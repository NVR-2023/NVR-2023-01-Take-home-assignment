const getHslaColorFromString = (input: string): string => {
  const MAX_HUE = 360;
  const MIN_SATURATION = 40;
  const MAX_SATURATION_VARIATION = 40;
  const MIN_LIGHTNESS = 40;
  const MAX_LIGHTNESS_VARIATION = 40;
  const MIN_ALPHA = 0.5;
  const MAX_ALPHA_VARIATION = 0.5;

  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = input.charCodeAt(i) + ((hash << 5) - hash);
  }

  const hue = Math.abs(hash) % MAX_HUE;
  const saturation = MIN_SATURATION + (Math.abs(hash) % MAX_SATURATION_VARIATION);
  const lightness = MIN_LIGHTNESS + (Math.abs(hash * 2) % MAX_LIGHTNESS_VARIATION);
  const alpha = MIN_ALPHA + ((Math.abs(hash) % 50) / 100) * MAX_ALPHA_VARIATION;

  return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
};

export default getHslaColorFromString;
