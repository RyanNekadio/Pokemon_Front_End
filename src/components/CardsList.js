import { useState } from "react";
import Kanto from "./Kanto";
import { Link } from "react-router-dom";

const CardsList = ({ sets, pokemons, onSelect, pokemonRoutes }) => {
  const [selectedSet, setSelectedSet] = useState('');

  const handleSetChange = (event) => {
    const value = event.target.value;
    setSelectedSet(value);
    onSelect(value); // Pass the selected set back to the parent component
  };

  const setsWithPokemon = sets.filter((set) => {
    return pokemons.some(pokemon => pokemon.set.id === set.id)
  })
  
  const setOptions = setsWithPokemon.map((set) => (
    <option key={set.id} value={set.id}>
      {set.name}
    </option>
  ));

  // Filter Pokemon cards based on the selected set
  const filteredPokemons = selectedSet ? pokemons.filter((pokemon) => pokemon.set.id === selectedSet) : pokemons;

  // Create React components for each Pokemon card in the filtered array
  const pokemonCards = filteredPokemons.map((pokemon) => (
    <Kanto key={pokemon.id} pokemon={pokemon} />
  ));

  return (
    <form>
      <label htmlFor="set">Select a set:</label>
      <select id="set" value={selectedSet} onChange={handleSetChange}>
        <option value="">All Sets</option>
        {setOptions}
      </select>
      <Link to="/">
        <button>Home</button>
      </Link>
      <hr />

      <div className="card-container">
        {pokemonCards}
      </div>
    </form>
  );
};

export default CardsList;
