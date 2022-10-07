import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home({ pokemon, getPokemon, handleChange }) {
  return (
    <>
      <div className="pokemon">
        <div className="pokemon-container">
          <h1>Explorer the world of Pokemon</h1>
          <form onSubmit={getPokemon}>
            <input onChange={handleChange} name="name" placeholder="Name of Pokemon" type="text" />
            <button type="submit">◉</button>
          </form>
          <div className={pokemon.abilities ? "" : "hide"}>
            <div className="ability-container">
              <h4>Abilities</h4>
              <div className="pokemon-abilites">
                {pokemon.abilities?.map((ability, idx) => {
                  return <p key={idx}>{ability.ability.name}</p>;
                })}
              </div>
              <div className="pokemon-stats">
                <h4>Stats</h4>
                {pokemon.stats?.map((stat, idx) => {
                  return (
                    <p key={idx}>
                      {stat.stat.name} : {stat.base_stat}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="img-container">
            <img
              src={pokemon.sprites?.versions?.["generation-v"]["black-white"].animated.front_default}
              alt={pokemon.name}
            />
          </div>
        </div>
        <footer className="footer">
          <div className="footer-container">
            <span>&#169; Pokemon</span>
            <span>T:design</span>
          </div>
        </footer>
      </div>
    </>
  );
}
