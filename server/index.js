const request = require("request");
const express = require("express");
const app = express();
const morgan = require("morgan");
const Pokedex = require("pokedex-promise-v2");
const cors = require("cors");

const PORT = 8000;
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

const P = new Pokedex();
app.get("/", async (req, res, next) => {
  try {
    const pokemonList = await P.getPokemonsList();
    res.send(pokemonList);
  } catch (error) {
    console.log(error);
  }
});

app.get("/:name", async (req, res, next) => {
  try {
    const pokemon = await P.getPokemonByName(req.params.name);
    res.send(pokemon);
  } catch (error) {
    console.log(error);
  }
});

app.get("/:id", async (req, res, next) => {
  try {
    const evoChain = await P.getCharacteristicById(req.params.id);
    res.send(evoChain);
  } catch (error) {
    console.log(error);
  }
});

app.get("/:name/habitat", async (req, res, next) => {
  try {
    const habit = await P.getPokemonHabitatsList(req.params.name);
    res.send(habit);
  } catch (error) {
    console.log(error);
  }
});

app.use(morgan("dev"));
app.use(express.json());

app.listen(PORT);
console.log("APP is running on PORT 8000");
