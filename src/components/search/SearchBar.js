import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchByName } from "../../store/actions/fetchPokedexAction";
import { withRouter } from "react-router";

class SearchBar extends Component {
  state = {
    input: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchBy(this.state.input);
    this.props.history.push(`/pokemon/${this.state.input}`);
    e.target.reset();
  };
  render() {
    return (
      <div>
        <form action="" className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Search for Pokemon</h5>
          <div className="input-field" />
          <label htmlFor="input">Search</label>
          <input type="text" id="input" onChange={this.handleChange} />
          <button className="btn green lighten-1 zdepth-0">Search</button>
        </form>
      </div>
    );
  }
}

const mapState = (state, ownProps) => {
  return {
    singlePokemon: state.pokedexData.poke,
    fetched: state.pokedexData.getPoke
  };
};

const mapDispatch = dispatch => {
  return {
    fetchBy: name => dispatch(fetchByName(name))
  };
};

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(SearchBar)
);
