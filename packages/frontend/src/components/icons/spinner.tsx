import IconComponentProps from "../../types/icon-types";

const Spinner = ({ scale = 1, color = "currentColor" }: IconComponentProps) => {
  const size = `${24 * scale}px`;
  return (
    <svg
      className="animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      viewBox="0 -960 960 960"
      fill={color}>
      <path d="M476-126q-147 0-250.5-103.5T122-480q0-147 103.5-250.5T476-834q78 0 147.5 31.5T742-711v-123h96v329H508v-95h162q-32-50-83-79t-111-29q-95 0-161.5 66.5T248-480q0 95 66.5 161.5T476-252q71 0 129.5-41T690-400h131q-29 120-125 197t-220 77Z" />
    </svg>
  );
};

export default Spinner;
