import { useState } from "react";
import { Link } from "react-router-dom";

const PokemonWorldForm = () => {
  const [selectedCharacter, setSelectedCharacter] = useState('');

  const trainerClasses = ['Gym Leaders', 'Elite Fours', 'Champions', 'Frontier Brains'];

  const handleCharacterChange = (event) => {
    const value = event.target.value;
    setSelectedCharacter(value);
    // Handle the character change as needed
  };

  const trainerClassOptions = trainerClasses.map((trainerClass, index) => (
    <option key={index} value={trainerClass}>
      {trainerClass}
    </option>
  ));

  return (
    <form>
      <label htmlFor="character">Browse a character:</label>
      <select id="character" value={selectedCharacter} onChange={handleCharacterChange}>
        <option value="">Trainer Classes</option>
        {trainerClassOptions}
      </select>
      <Link to="/">
        <button>Home</button>
      </Link>
      <hr />
    </form>
  );
};

export default PokemonWorldForm;
