import React from "react";
import SinglePokemon from "./SinglePokemon";
import { Link } from "react-router-dom";
import { Row } from "react-materialize";
import { FixedSizeList as List } from "react-window";

export default function PokedexList({ result, loaded }) {
  return loaded ? (
    <Row>
      <div>
        <List
          height={Math.max(
            document.documentElement.clientHeight,
            window.innerHeight || 0
          )}
          itemCount={50}
          itemSize={15}
          width="100%"
          overscanCount={3}
        >
          {({ index, style }) => (
            <Link
              to={`/pokemon/${index + 1}`}
              key={index}
              className="monster-sprite"
            >
              <SinglePokemon poke={result[index]} style={style} />
            </Link>
          )}
        </List>
      </div>
    </Row>
  ) : (
    <div>...loading</div>
  );
}
