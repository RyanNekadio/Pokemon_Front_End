import { Link } from "react-router-dom";

const Home = () => {
  
  return (
    <div>
      <h1 className="webName">Welcome to the Pokemon App!</h1>
      <Link to="/cards-list">
        <button>Cards</button>
      </Link>
      <hr />
    </div>
  );
};

export default Home;
