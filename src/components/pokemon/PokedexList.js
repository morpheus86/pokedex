import React from "react";
import SinglePokemon from "./SinglePokemon";
import { Link } from "react-router-dom";
import { Row } from "react-materialize";
// import { FixedSizeList as List } from "react-window";
import { List } from "react-virtualized";

export default function PokedexList({ result, loaded }) {
  // console.log(props);
  // const poke = loaded ? (
  //   result.map((p, idx) => {
  //     return (
  //       <Link to={`/pokemon/${idx + 1}`} key={idx}>
  //         <SinglePokemon key={idx + 1} poke={p} />
  //       </Link>
  //     );
  //   })
  // ) : (
  //   <div>...loading</div>
  // );

  // return <div className="pokedex-list section">{poke}</div>;
  // // console.log(props);
  //   return loaded ? (
  //     <Row>
  //       <div>
  //         <List
  //           height={Math.max(
  //             document.documentElement.clientHeight,
  //             window.innerHeight || 0
  //           )}
  //           itemCount={50}
  //           itemSize={15}
  //           width="100%"
  //           overscanCount={3}
  //         >
  //           {({ index, style }) => (
  //             <Link
  //               to={`/pokemon/${index + 1}`}
  //               key={index}
  //               className="monster-sprite"
  //             >
  //               <SinglePokemon poke={result[index]} style={style} />
  //             </Link>
  //           )}
  //         </List>
  //       </div>
  //     </Row>
  //   ) : (
  //     <div>...loading</div>
  //   );
  //   // return <div />;
  // }

  {
    /* <List
        rowCount={result.length}
        width={700}
        height={300}
        rowHeight={1000}
        rowRenderer={rowRenderer}
        overscanRowCount={3}
      /> */
  }

  const rowRenderer = ({ index, key, style }) => {
    return (
      <Link
        to={`/pokemon/${index + 1}`}
        key={index}
        className="monster-sprite"
        style={style}
      >
        <SinglePokemon poke={result[index]} />
      </Link>
    );
  };

  return loaded ? (
    <div>
      <List
        rowCount={result.length}
        width={100}
        height={Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        )}
        rowHeight={1000}
        rowRenderer={rowRenderer}
        overscanRowCount={3}
      />
    </div>
  ) : (
    <div>...loading</div>
  );
}
