import getHslaColorFromString from "../utils/get-hsla-color-from-string";

type SymbolProps = {
  text: string;
};

const Symbol = ({ text }: SymbolProps) => {
  const parsedText = text.toLowerCase();
  const splitText = parsedText.split(".");
  return (
    <div
      className="w-18 h-7 tracking-wide font-medium text-neutral-100 rounded flex justify-center items-center"
      style={{
        fontVariant: "small-caps",
        transform: "translateY(37.5%)",
        backgroundColor: getHslaColorFromString(parsedText),
      }}>
      <span className="font-sm">{splitText[0]}</span>
      {splitText[1] && <span>{`.${splitText[1]}`}</span>}
    </div>
  );
};

export default Symbol;
