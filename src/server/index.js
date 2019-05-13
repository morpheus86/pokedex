import express from "express";
import React from "react";
import { matchRoutes } from "react-router-config";
import compression from "compression";
import helper from "./helper";
import store from "./store";
import Routes from "../globalRoutes/Routes";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

function shouldCompress(req, res) {
  if (req.headers["x-no-compression"]) return false;
  return compression.filter(req, res);
}

app.use(
  compression({
    level: 2,
    filter: shouldCompress
  })
);

const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("*", (req, res) => {
  const params = req.params[0].split("/");
  const id = params[2];

  const createStore = store();

  const routes = matchRoutes(Routes, req.path);

  const promises = routes
    .map(({ route }) => {
      return route.loadData ? route.loadData(createStore, id) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
      return null;
    });

  Promise.all(promises).then(() => {
    const context = {};
    const content = helper(req, store, context);

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
