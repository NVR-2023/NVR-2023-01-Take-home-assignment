import getTextAndBackgroundColorFromString from "../utils/get-text-and-bakcground-color-from-string";

type SymbolProps = {
  text: string;
};

const Symbol = ({ text }: SymbolProps) => {
  return (
    <div
      className="w-[4.5rem] min-w-[4.5rem] px-1.5 h-7 tracking-wide text-xs text-neutral-100 rounded flex justify-center items-center"
      style={{
        fontVariant: "small-caps",
        fontWeight: 700,
        backgroundColor: getTextAndBackgroundColorFromString(text).backgroundColor,
        color: getTextAndBackgroundColorFromString(text).textColor,
      }}>
      {text.toLowerCase()}
    </div>
  );
};

export default Symbol;
