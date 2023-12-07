import { useState, useEffect } from "react";
import Home from "../components/Home";
import CardsList from "../components/CardsList";
import PokemonWorldForm from "../components/PokemonWorldForm"; // Import the PokemonWorldForm component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //previous import
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

const PokemonContainer = () => {
  const [pokemon, setPokemon] = useState([]); 
  const [sets, setSets] = useState([]);
  const [selectedSet, setSelectedSet] = useState('');

  // Fetch the data
  const fetchData = async () => {
      const cardsResponse = await fetch('https://api.pokemontcg.io/v2/cards');
      const cardsData = await cardsResponse.json();
      setPokemon(cardsData.data); 
  }

  // Fetch the sets data
  const fetchSetsData = async () => {
      const setsResponse = await fetch('https://api.pokemontcg.io/v2/sets');
      const setsData = await setsResponse.json();
      setSets(setsData.data);
  }

  useEffect(() => {
    fetchData();
    fetchSetsData();
  }, []);

  const handleSelectedSet = (set) => {
    setSelectedSet(set);
  };

  // Router
  // const pokemonRoutes = createBrowserRouter ([
  //   {
  //     // Home button 
  //     path: "/",
  //     element: <Home />,
  //     // Children to insert other parts 
  //     children: [
  //       {
  //         path: "/sets",
  //         element: <CardsList pokemons={pokemon} sets={sets} onSelect={handleSelectedSet} 
  //         /> 
  //       }
  //     ]
  //   }
  // ])




  return (
    <Router>
      <>
        <Routes>
          <Route 
            path="/" 
            element={<Home />} />
          <Route
            path="/sets"
            element={<CardsList pokemons={pokemon} sets={sets} onSelect={handleSelectedSet} />} 
          />
          <Route 
            path="/pokemon-world" 
            element={<PokemonWorldForm />} />
        </Routes>
      </>
    </Router>
    // <RouterProvider router={pokemonRoutes}/>
  );
};

export default PokemonContainer;
