import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="bg-purple-500 flex flex-col">
      Homepage
      <Link to="/securities">Securities</Link>
      <Link to="/securities/abc">Security Detail</Link>
    </div>
  );
};

export default Homepage;
