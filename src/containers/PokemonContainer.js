import { useState, useEffect } from "react";
import Home from "../components/Home";
import CardsList from "../components/CardsList";
import PokemonWorldForm from "../components/PokemonWorldForm"; // Import the PokemonWorldForm component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const PokemonContainer = () => {
  const [pokemon, setPokemon] = useState([]); 
  const [sets, setSets] = useState([]);
  const [selectedSet, setSelectedSet] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const cardsResponse = await fetch('https://api.pokemontcg.io/v2/cards');
      const cardsData = await cardsResponse.json();
      setPokemon(cardsData.data); 

      const setsResponse = await fetch('https://api.pokemontcg.io/v2/sets');
      const setsData = await setsResponse.json();
      setSets(setsData.data);
    };

    fetchData();
  }, []);

  // const ashKanto = ['Pikachu', 'Butterfree', 'Bulbasaur', 'Charmander', 'Pidgeot'];

  return (
    <Router>
      <>
        <Routes>
          <Route 
            path="/" 
            element={<Home />} />
          <Route
            path="/sets"
            element={<CardsList pokemons={pokemon} sets={sets} />} 
          />
          <Route 
            path="/pokemon-world" 
            element={<PokemonWorldForm />} />
        </Routes>
      </>
    </Router>
  );
};

export default PokemonContainer;
