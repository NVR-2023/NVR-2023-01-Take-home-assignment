import IconComponentProps from "../../types/icon-types";

const RightwardArrowIcon = ({ scale = 1, color = "currentColor" }: IconComponentProps) => {
  const size = `${24 * scale}px`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      viewBox="0 -960 960 960"
      fill={color}>
      <path d="m561-208-88-88 121-121H126v-126h468L473-664l88-88 273 272-273 272Z" />
    </svg>
  );
};

export default RightwardArrowIcon;
