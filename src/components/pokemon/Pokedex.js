import React, { Component } from "react";
import { fetchPokedex } from "../../store/actions/fetchPokedexAction";
import { connect } from "react-redux";
import PokedexList from "./PokedexList";
import SearchBar from "../search/SearchBar";

class Pokedex extends Component {
  state = {
    isLoaded: false
  };
  componentDidMount() {
    this.props.fetchPoke();
    this.setState({
      isLoaded: true
    });
  }
  render() {
    const results = this.props.pokedexData.results;
    const isFetching = this.props.fetched;
    return (
      <div>
        <SearchBar />
        <div className="poke-list">
          <PokedexList result={results} loaded={isFetching} />
        </div>
      </div>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    fetchPoke: () => dispatch(fetchPokedex())
  };
};
const mapState = state => {
  return {
    pokedexData: state.pokedexData.pokemon,
    fetched: state.pokedexData.isFetching
  };
};
export default connect(
  mapState,
  mapDispatch
)(Pokedex);
