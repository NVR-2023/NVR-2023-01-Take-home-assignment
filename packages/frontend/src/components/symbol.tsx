import getHslaColorFromString from "../utils/get-hsla-color-from-string";

type SymbolProps = {
  text: string;
};

const Symbol = ({ text }: SymbolProps) => {
  return (
    <div
      className="w-24 min-w-22 px-1.5 h-7 tracking-wide text-sm font-normal text-neutral-100 rounded flex justify-center items-center"
      style={{
        fontVariant: "small-caps",
        backgroundColor: getHslaColorFromString(text),
      }}>
      {text}
    </div>
  );
};

export default Symbol;
