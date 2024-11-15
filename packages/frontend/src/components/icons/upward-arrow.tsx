import IconComponentProps from "../../types/icon-types";

const UpwardArrowIcon = ({ scale = 1, color = "currentColor" }: IconComponentProps) => {
  const size = `${24 * scale}px`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      viewBox="0 -960 960 960"
      fill={color}>
      <path d="M417-126v-466L215-390l-89-90 354-354 354 354-89 90-202-202v466H417Z" />
    </svg>
  );
};

export default UpwardArrowIcon;
