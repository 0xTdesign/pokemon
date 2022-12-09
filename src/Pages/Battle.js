import React from "react";
import "./Home.css";
import "./Battle.css";

export default function Battle({ pokemon, getPokemon, handleChange, getnewPokemon, items, handleClickChange }) {
  return (
    <section>
      <div className="battle">
        <div className="fighter">
          <form onSubmit={getPokemon}>
            <input onChange={handleChange} name="name" placeholder="Choose your fighter" type="text" />
            <button type="submit">Explore</button>
          </form>
        </div>
        <div className="flex-container">
          <div className="flex-items">
            <div className="container-top">
              <h4 className="name">Player: {pokemon.name}</h4>
            </div>
            <div className="battle-stats">
              <span>Stats</span>
              {pokemon.stats?.map((stat, idx) => {
                return (
                  <p key={idx}>
                    {stat.stat.name} : {stat.base_stat}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="fight">
            <button onClick={getnewPokemon}>Fight</button>
          </div>
          <div className="flex-items">
            <div className="container-top">
              {items && items.map((item, idx) => <h4 key={idx}>Computer: {item.name}</h4>)}
            </div>
            <div className="battle-stats">
              <span>Stats</span>
            </div>
          </div>
        </div>
      </div>
      <div className="fighter">
        <footer className="footer">
          <div className="footer-container">
            <span>&#169; Pokemon</span>
            <span>T:design</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
