import React from "react";
import "./Main.css";

export default function Main({ pokemon, getPokemon, handleChange }) {
  return (
    <main className="main">
      <section className="header">
        <nav>
          <h3>{pokemon.name}</h3>
        </nav>
      </section>
      <div className="pokemon">
        <div className="pokemon-container">
          <form onSubmit={getPokemon}>
            <input onChange={handleChange} name="name" placeholder="Name of Pokemon" type="text" />
            <button type="submit">O</button>
          </form>
          <div className="ability-container">
            <p>Abilities</p>
            <div className="pokemon-abilites">
              {pokemon.abilities?.map((ability, idx) => {
                return <p key={idx}>{ability.ability.name}</p>;
              })}
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
    </main>
  );
}
