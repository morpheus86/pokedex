import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchEvolutionChain,
  fetchPokeImage,
  fetchEvoImg
} from "../../store/actions/fetchpokeImgAction";
export class Evolution extends Component {
  commponentWillMount() {
    const id = this.props.id;
    this.props.fetchImage(id);
    this.props.chain(id);
    this.props.fetchEvo(id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.index !== nextProps.index) {
      this.props.fetchImage(nextProps.index);
      this.props.chain(nextProps.index);
      this.props.fetchEvo(nextProps.index);
    }
  }

  render() {
    const image = this.props.img;
    const source = image && image;
    const evolutionImg = this.props.img2;
    const evolving = evolutionImg && evolutionImg;
    return (
      <div className="evolutions">
        <div className="evolution-row">
          <div className="evolution-row-inner">
            <div className="evolution-sprite monster-sprite">
              <img src={source} alt="" />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="svg">
              <path d="M24 16V8l16 16-16 16v-8H8V16z" />
            </svg>
            <div className="evolution-sprite monster-sprite">
              <img src={evolving} alt="" />
            </div>
          </div>
          <div className="evolution-label">
            <span>
              <strong />.
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    evoChain: state.imgLoading.evoChainData,
    pokemonIdx: state.imgLoading.pokemonIdx,
    id: state.description.description.id,
    img: state.imgLoading.img,
    img2: state.imgLoading.imgChain
  };
};

const mapDispatchToProps = dispatch => {
  return {
    chain: id => dispatch(fetchEvolutionChain(id)),
    fetchImage: id => dispatch(fetchPokeImage(id)),
    fetchEvo: id => dispatch(fetchEvoImg(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Evolution);
