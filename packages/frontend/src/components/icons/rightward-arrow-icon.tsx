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
      <path d="M592-417H126v-126h466L390-745l90-89 354 354-354 354-90-89 202-202Z" />
    </svg>
  );
};

export default RightwardArrowIcon;
