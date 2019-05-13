import React, { Component } from "react";
import { connect } from "react-redux";
import fetchDescription from "../../store/actions/fetchDescription";
import PokeData from "./PokeData";
import { fetchHabitat } from "../../store/actions/fetchPokedexAction";
import NotFoundPage from "../../server/NotFoundPage";
// import NotFoundPage from "../../server/NotFoundPage";

class PokeSummary extends Component {
  async componentDidMount() {
    const id = this.props.match.params.id;

    await this.props.fetch(id);
    await this.props.fetchHabit(id);
  }
  render() {
    return (
      <div className="container section pokemon-details">
        <PokeData data={this.props.description} habit={this.props.habit} />
      </div>
    );
  }
}

const mapState = (state, ownProps) => {
  return {
    description: state.description.description,
    habit: state.pokedexData.habitat
  };
};

const mapDispatch = dispatch => {
  return {
    fetch: id => dispatch(fetchDescription(id)),
    fetchHabit: id => dispatch(fetchHabitat(id))
  };
};

export default connect(
  mapState,
  mapDispatch
)(PokeSummary);
