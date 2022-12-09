import React from "react";
import { Link } from "react-router-dom";

export default function Header({ pokemon }) {
  return (
    <section className="header">
      <nav>
        <h3>{pokemon.name}</h3>
        <Link to="/">Home</Link>
        <Link to="/battle">Battle</Link>
        <Link to="/second"></Link>
      </nav>
    </section>
  );
}
