import { Link } from "react-router-dom";

const Home = () => {
  
  return (
    <div>
      <h1 className="webName">Welcome to the Pokemon App!</h1>
      <Link to="/sets">
        <button>Sets</button>
      </Link>
      <Link to="/pokemon-world">
        <button>Pokemon World</button>
      </Link>
      <hr />
    </div>
  );
};

export default Home;
