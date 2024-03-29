import React from "react";
import Evolution from "./Evolution";

export default function PokeData(props) {
  const {
    abilities,
    name,
    height,
    weight,
    types,
    stats,
    id,
    sprites
  } = props.data;
  const pokeName = name && name[0].toUpperCase() + name.substring(1);
  const abilityName =
    abilities && abilities.map(ab => ab.ability.name).join(", ");
  const type =
    types &&
    types.map(t => {
      return (
        <div key={t.type.name} className="badge badge-pill mr-1">
          <span>{t.type.name}</span>
        </div>
      );
    });

  const stat =
    stats &&
    stats.map(st => {
      return (
        <div className="row align-items-center" key={st.stat.name}>
          <div className={`col-12 col-md-${3}`}>{st.stat.name}:</div>
          <div className={`col-12 col-md${9}`}>
            <div className="progress">
              <div
                className="progress-bar "
                style={{
                  width: `${st.base_stat}%`,
                  backgroundColor: `#c2185b`
                }}
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <small>{st.base_stat}</small>
              </div>
            </div>
          </div>
        </div>
      );
    });
  const habitat = props.habit && props.habit;
  const img = sprites && sprites.front_shiny;
  const ev =
    stats &&
    stats.map(st => {
      if (st.effort > 0) {
        return `${st.effort} ${st.stat.name}, `;
      } else {
        return false;
      }
    });

  const catchRate = props.species && props.species.capture_rate;
  const egg_group =
    props.species && props.species.egg_groups.map(el => el.name).join(", ");
  const hash_step = props.species && props.species.hatch_counter;

  return (
    <div className="col">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="card-title">{pokeName}</div>
            <div className="col">
              <div className="card-header">
                <div className="row">
                  <div className="col-5">
                    <h5>{id}</h5>
                  </div>
                  <div className="col-7">
                    <div className="float-right">{type}</div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row align-items-center">
                  <div className=" col-md-3 ">
                    <img
                      src={img}
                      className="card-img-top rounded mx-auto mt-2"
                    />
                  </div>
                  <div className="col-md-9">{stat}</div>
                  <div className="row mt-1" />
                </div>
                <hr />
                <div className="card-body">
                  <h5 className="card-title text-center">Profile</h5>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-6">
                          <h6 className="float-right">Height:</h6>
                        </div>
                        <div className="col-6">
                          <h6 className="float-left">{height} ft.</h6>
                        </div>
                        <div className="col-6">
                          <h6 className="float-right">Weight:</h6>
                        </div>
                        <div className="col-6">
                          <h6 className="float-left">{weight} lbs</h6>
                        </div>
                        <div className="col-6">
                          <h6 className="float-right">Catch Rate:</h6>
                        </div>
                        <div className="col-6">
                          <h6 className="float-left">{catchRate}%</h6>
                        </div>
                        <div className="col-6" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-6">
                          <h6 className="float-right">Egg Groups:</h6>
                        </div>
                        <div className="col-6">
                          <h6 className="float-left">{egg_group} </h6>
                        </div>
                        <div className="col-6">
                          <h6 className="float-right">Hatch Steps:</h6>
                        </div>
                        <div className="col-6">
                          <h6 className="float-left">{hash_step}</h6>
                        </div>
                        <div className="col-6">
                          <h6 className="float-right">Abilities:</h6>
                        </div>
                        <div className="col-6">
                          <h6 className="float-left">{abilityName}</h6>
                        </div>
                        <div className="col-6">
                          <h6 className="float-right">EVs:</h6>
                        </div>
                        <div className="col-6">
                          <h6 className="float-left">{ev}</h6>
                        </div>
                      </div>
                      <div>
                        <h5 className="card-title text-center">Habitat</h5>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <h6 className="float-left">habitat: {habitat}</h6>
                        </div>
                      </div>
                      <div className="row evolution-row">
                        <h5 className="card-title text-center">Evolution</h5>
                        <Evolution index={id} />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer text-muted">
                  Data From{" "}
                  <a
                    href="https://pokeapi.co/"
                    target="_blank"
                    className="card-link"
                  >
                    PokeAPI.co
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
