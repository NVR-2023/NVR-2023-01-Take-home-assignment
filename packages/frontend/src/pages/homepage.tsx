import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="bg-purple-500 flex flex-col">
      Homepage
      <Link to="/security-list">Securities</Link>
      <Link to="/security-detail/">Security Detail</Link>
    </div>
  );
};

export default Homepage;
