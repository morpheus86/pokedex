import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./store/reducer/index";
import { createStore } from "redux";
import { middleware } from "./store/reducer/index";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";

import Routes from "./globalRoutes/Routes";
import { BrowserRouter } from "react-router-dom";

const state = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
export const store = createStore(rootReducer, state, middleware);

ReactDom.hydrate(
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
