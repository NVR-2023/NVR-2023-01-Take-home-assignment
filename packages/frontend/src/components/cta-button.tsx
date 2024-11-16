import { Link } from "react-router-dom";

const CtaButton = () => {
  return (
    <button className="rounded px-3 py-1.5 w-48 bg-[#03646d] text-neutral-900 transform transition-all duration-300 hover:scale-105">
      <Link
        to={"/security-list"}
        style={{ fontVariant: "small-caps" }}
        className="text-neutral-300 text-lg font-bold tracking-wider ">
        go to security list
      </Link>
    </button>
  );
};

export default CtaButton;
