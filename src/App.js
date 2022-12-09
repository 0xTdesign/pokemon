import axios from "axios";
import "./App.css";
import Footer from "./Component /Footer/Footer";
import Home from "./Pages/Home";
import Battle from "./Pages/Battle";
import { useState, useEffect } from "react";
import Second from "./Pages/Second";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component /Header/Header";

function App() {
  const [pokemon, setpokemon] = useState({});
  const [form, setform] = useState({
    name: "",
  });
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(Math.floor(Math.random() * 1000));
  // const [pokemons, setpokemons] = useState([]);
  // const [isloading, setisloading] = useState(true);
  // const [iserror, setiserror] = useState(false);
  // const [offset, setoffset] = useState(Math.floor(Math.random() * 1000));

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleClickChange = (e) => {
    setItems({ ...items, [e.target.name]: e.target.value });
  };

  const getPokemon = async (e) => {
    e.preventDefault();
    // const API = `http://localhost:8080/pokemon/${form.name.toLowerCase()}`;
    const API = `https://pokeapi.co/api/v2/pokemon/${form.name.toLowerCase()}`;
    const res = await axios.get(API);
    setpokemon(res.data);
    console.log(res.data);
  };

  function getUrl(name, id) {
    return `https://pokeapi.co/api/v2/pokemon/${name}/?${id}`;
  }

  const getNewPokemon = () => {
    const id = Math.floor(Math.random() * 1000);
    setOffset(id);
  };

  useEffect(() => {
    const fetchItems = async (offset) => {
      const response = await axios.get(getUrl(1, offset));
      const data = response.data;
      setItems([...items, ...data.results]);
    };
    fetchItems(offset);
  }, [offset]);

  return (
    <BrowserRouter>
      <div className="App">
        <main className="main">
          <Header pokemon={pokemon} />
          <Routes>
            <Route path="/" element={<Home handleChange={handleChange} getPokemon={getPokemon} pokemon={pokemon} />} />
            <Route
              path="/battle"
              element={
                <Battle
                  handleChange={handleChange}
                  getPokemon={getPokemon}
                  pokemon={pokemon}
                  getNewPokemon={getNewPokemon}
                  items={items}
                />
              }
            />
            <Route path="/second" element={<Second />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
