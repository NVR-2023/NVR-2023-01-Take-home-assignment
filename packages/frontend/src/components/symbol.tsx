type SymbolProps = {
  text: string;
};

const Symbol = ({ text }: SymbolProps) => {
  const parsedText = text.toLowerCase();
  return (
    <div
      className="w-18 h-7 font-bold text-neutral-100  bg-yellow-300 rounded flex justify-center items-center"
      style={{
        fontVariant: "small-caps",
        transform: "translateY(50%)",
      }}>
      {parsedText}
    </div>
  );
};

export default Symbol;
