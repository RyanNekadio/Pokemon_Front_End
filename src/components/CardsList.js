import Cards from "./Cards";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const CardsList = ({pokemon, onSelect, setOptions, onChange}) => {

  return (
    <form>
      <label htmlFor="set">Select a set:</label>
      <select id="set" value={onSelect} onChange={onChange}>
        <option value="">All Sets</option>
        {setOptions}
      </select>
      <Link to="/">
        <button>Home</button>
      </Link>
      <hr />
      <div className="card-container">
        {pokemon}
      </div>
    </form>
  );
};

export default CardsList;
