import axios from "axios";
import "./App.css";
import Main from "./Component /Main/Main";
import Footer from "./Component /Footer/Footer";
import { useState } from "react";

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
    const API = `http://localhost:8080/pokemon/${form.name.toLowerCase()}`;
    const res = await axios.get(API);
    setpokemon(res.data);
    console.log(res.data);
  };

  return (
    <div className="App">
      <Main handleChange={handleChange} getPokemon={getPokemon} pokemon={pokemon} />
      <Footer />
    </div>
  );
}

export default App;
