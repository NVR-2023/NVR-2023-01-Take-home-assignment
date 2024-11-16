import { Link } from "react-router-dom";

const CtaButton = () => {
  return (
    <Link
      to={"/security-list"}
      className="flex justify-center items-center rounded px-3 py-1.5 w-80 bg-[#03646d] text-neutral-900 transform transition-all duration-300 hover:scale-105">
      <button
        style={{ fontVariant: "small-caps" }}
        className="text-yellow-200 text-lg font-[500] tracking-wide">
        go to security list
      </button>
    </Link>
  );
};

export default CtaButton;
