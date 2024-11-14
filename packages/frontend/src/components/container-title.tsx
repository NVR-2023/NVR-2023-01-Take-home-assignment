type ContainerTitleProps = {
  text: string;
};
const ContainerTitle = ({ text }: ContainerTitleProps) => {
  return (
    <div
      className=" tracking-wide w-32 px1 flex align-items justify-center py-0.5 rounded border-black border-[2px]"
      style={{
        fontVariationSettings: "'wght' 400",
      }}>
      {text}
    </div>
  );
};

export default ContainerTitle;
