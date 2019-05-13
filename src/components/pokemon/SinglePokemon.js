import React, { Component } from "react";
import { Card, CardTitle, Col, Circular } from "react-materialize";

export default class SinglePokemon extends Component {
  state = {
    pokedexIndex: "",
    imgUrl: "",
    name: "",
    tooManyRequest: false,
    imgLoading: true
  };
  componentDidMount() {
    const { url, name } = this.props.poke;
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const imgUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
    this.setState({
      pokedexIndex: pokemonIndex,
      imgUrl,
      name
    });
  }
  render() {
    const { imgUrl, name } = this.state;
    return (
      <Col m={3} s={6} xs={2}>
        <Card
          header={<CardTitle reveal image={imgUrl} waves="light" />}
          title={name.slice(0, 1).toUpperCase() + name.slice(1)}
          className="img"
        />
      </Col>
    );
  }
}
