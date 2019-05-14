import React, { Component } from "react";
import { connect } from "react-redux";
import fetchDescription from "../../store/actions/fetchDescription";
import PokeData from "./PokeData";
import {
  fetchHabitat,
  fetchSpecies
} from "../../store/actions/fetchPokedexAction";

class PokeSummary extends Component {
  async componentDidMount() {
    const id = this.props.match.params.id;

    await this.props.fetch(id);
    await this.props.fetchHabit(id);
    await this.props.species(id);
  }
  render() {
    return (
      <div className="container section pokemon-details">
        <PokeData
          data={this.props.description}
          habit={this.props.habit}
          species={this.props.speciesList}
        />
      </div>
    );
  }
}

const mapState = (state, ownProps) => {
  return {
    description: state.description.description,
    habit: state.pokedexData.habitat,
    speciesList: state.pokedexData.species
  };
};

const mapDispatch = dispatch => {
  return {
    fetch: id => dispatch(fetchDescription(id)),
    fetchHabit: id => dispatch(fetchHabitat(id)),
    species: id => dispatch(fetchSpecies(id))
  };
};

export default connect(
  mapState,
  mapDispatch
)(PokeSummary);
