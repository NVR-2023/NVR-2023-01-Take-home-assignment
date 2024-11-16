import { Link, useLocation } from "react-router-dom";

type PageTitleProps = {
  text: string;
};
const PageTitle = ({ text }: PageTitleProps) => {
  const location = useLocation();
  const isAtSecurityDetail = location.pathname.includes("security-detail");

  return (
    <div className="flex space-x-9">
      <h1
        className=" tracking-wide w-[12rem] flex align-items justify-center py-0.5 rounded border-black border-[2px]"
        style={{
          fontVariationSettings: "'wght' 400",
        }}>
        {text}
      </h1>
      {isAtSecurityDetail && (
        <button
          className="flex tracking-wide justify-center items-center text-sm "
          style={{
            fontVariant: "small-caps",
            fontWeight: "600",
          }}>
          <Link
            to="/security-list"
            className="transition-all duration-300 transform hover:scale-110">
            &lt; back to security list
          </Link>
        </button>
      )}
    </div>
  );
};

export default PageTitle;
