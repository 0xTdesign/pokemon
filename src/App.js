import axios from "axios";
import "./App.css";
import Footer from "./Component /Footer/Footer";
import Home from "./Pages/Home";
import Battle from "./Pages/Battle";
import { useState } from "react";
import Second from "./Pages/Second";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component /Header/Header";

function App() {
  const [pokemon, setpokemon] = useState({});
  const [form, setform] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const getPokemon = async (e) => {
    e.preventDefault();
    // const API = `http://localhost:8080/pokemon/${form.name.toLowerCase()}`;
    const API = `https://pokeapi.co/api/v2/pokemon/${form.name.toLowerCase()}`;
    const res = await axios.get(API);
    setpokemon(res.data);
    console.log(res.data);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <main className="main">
          <Header pokemon={pokemon} />
          <Routes>
            <Route path="/" element={<Home handleChange={handleChange} getPokemon={getPokemon} pokemon={pokemon} />} />
            <Route path="/battle" element={<Battle />} />
            <Route path="/second" element={<Second />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
