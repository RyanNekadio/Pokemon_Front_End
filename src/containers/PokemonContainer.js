import { useState, useEffect } from "react";
import Home from "../components/Home";
import CardsList from "../components/CardsList";
import Cards from "../components/Cards";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //previous import
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

const PokemonContainer = () => {
  const [backupPokemon, setBackupPokemon] = useState([]); 
  // const [displayPokemon, setDisplayPokemon] = useState([]); 
  const [cardSets, setCardSets] = useState([]);
  const [selectedCardSet, setSelectedCardSet] = useState('');

  // Fetch the  cards data
  const fetchData = async () => {
      const cardsResponse = await fetch('https://api.pokemontcg.io/v2/cards');
      const cardsData = await cardsResponse.json();
      setBackupPokemon(cardsData.data); 
  }

  // Fetch the sets data
  const fetchCardSetsData = async () => {
      const cardSetsResponse = await fetch('https://api.pokemontcg.io/v2/sets');
      const cardSetsData = await cardSetsResponse.json();
      setCardSets(cardSetsData.data);
  }

  useEffect(() => {
    fetchData();
    fetchCardSetsData();
  }, []);

  //event listener for set dropdown list
  const handleCardSetChange = (e) => {
    const value = e.target.value;
    setSelectedCardSet(value);
  };
  //event listener
  const handleSelectedSet = (set) => {
    setSelectedCardSet(set);
  };
  //gets the names of each set from set api
  const setsWithPokemon = cardSets.filter((set) => {
    return backupPokemon.some(pokemon => pokemon.set.id === set.id)
  })
  
  const setOptions = setsWithPokemon.map((set) => (
    <option key={set.id} value={set.id}>
      {set.name}
    </option>
  ));

  const filteredPokemon = selectedCardSet ? backupPokemon.filter((pokemon) => pokemon.set.id === selectedCardSet) : backupPokemon;

  //display all cards using backupPokemon
  const pokemonCards = filteredPokemon.map((pokemon) => (
    <Cards key={pokemon.id} pokemon={pokemon} />
  ));

  return (
    <Router>
      <>
        <Routes>
          <Route 
            path="/" 
            element={<Home />} />
          <Route
            path="/cards-list"
            element={<CardsList pokemon={pokemonCards} sets={cardSets} onSelect={selectedCardSet} setOptions={setOptions} onChange={handleCardSetChange} />} 
          />
        </Routes>
      </>
    </Router>
  );
};

export default PokemonContainer;

  // const regions = ['Kanto', 'Johto', 'Hoenn'];

  // const handleRegionChange = (event) => {
  //   const value = event.target.value;
  //   setSelectedRegion(value);
  // };

  // const regionOptions = regions.map((region, index) => (
  //   <option key={index} value={region}>
  //     {region}
  //   </option>
  // ));


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

     // <RouterProvider router={pokemonRoutes}/>