import React from "react";
import Evolution from "./Evolution";

export default function PokeData(props) {
  const { abilities, name, height, weight, types, stats, id } = props.data;
  const abilityName =
    abilities && abilities.map(ab => ab.ability.name).join(", ");
  const type =
    types &&
    types.map(t => {
      return (
        <div className="monster-details" key={t.type.name}>
          <strong>type: </strong>
          <span>{t.type.name}</span>
        </div>
      );
    });
  const stat =
    stats &&
    stats.map(st => {
      return (
        <div className="monster-details" key={st.stat.name}>
          <strong>{st.stat.name}: </strong>
          <span>{st.base_stat}</span>
        </div>
      );
    });
  const habitat =
    props.habit.results &&
    props.habit.results
      .map(h => {
        return h.name;
      })
      .join(", ");
  return (
    <div className="container section pokemon-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">
            <h1 className="detail-panel-header overflow-y red-text">{name}</h1>
            <div className="detail-panel-content">
              <div className="detail-picture">
                {stat}
                <div className="more-detail-info">
                  <div className="monster-species" />
                  <div className="monster-description flow-text indigo-text text-darken-4" />
                  <h2 className="row detail-subheader">Type</h2>
                  <div className="monster-details">{type}</div>
                  <div className="monster-description flow-text indigo-text text-darken-4" />
                  <h2 className="row detail-subheader">Profile</h2>
                  <div className="monster-details">
                    <strong>weight: </strong>
                    <span>{weight}</span>
                    <strong>height: </strong>
                    <span>{height}</span>
                  </div>
                  <div className="monster-details">
                    <strong>catchRate: </strong>
                    <span>result</span>
                    <strong>Egg groups: </strong>
                    <span>result</span>
                  </div>
                  <div className="monster-details">
                    <strong>abilities: </strong>
                    <span>{abilityName}</span>
                    <strong>EVs: </strong>
                    <span>result</span>
                  </div>
                  <div className="monster-description flow-text indigo-text text-darken-4" />
                  <h2 className="row detail-subheader">Habitat</h2>
                  <div className="monster-details">
                    <strong>habitat: </strong>
                    <span>{habitat}</span>
                  </div>
                  <h2 className="detail-subheader">Evolution</h2>
                  <div className="row evolution">
                    <div className="row evolution-row">
                      <Evolution index={id} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
