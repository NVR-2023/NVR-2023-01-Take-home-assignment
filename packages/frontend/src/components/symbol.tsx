import getHslaColorFromString from "../utils/get-hsla-color-from-string";

type SymbolProps = {
  text: string;
};

const Symbol = ({ text }: SymbolProps) => {
  const parsedText = text.toLowerCase();
  return (
    <div
      className="w-18 h-7 tracking-wide font-medium text-neutral-100 rounded flex justify-center items-center"
      style={{
        fontVariant: "small-caps",
        transform: "translateY(50%)",
        backgroundColor: getHslaColorFromString(parsedText),
      }}>
      {parsedText}
    </div>
  );
};

export default Symbol;
