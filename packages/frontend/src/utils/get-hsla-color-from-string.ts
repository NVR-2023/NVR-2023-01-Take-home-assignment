const getHslaColorFromString = (text: string): string => {
  const MAX_HUE = 360;
  const MIN_SATURATION = 80;
  const MAX_SATURATION_VARIATION = 20;
  const MIN_LIGHTNESS = 0;
  const MAX_LIGHTNESS_VARIATION = 50;
  const MIN_ALPHA = .75;
  const MAX_ALPHA_VARIATION = .1;

  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
  }

  const hue = Math.abs(hash) % MAX_HUE;
  const saturation = MIN_SATURATION + (Math.abs(hash) % MAX_SATURATION_VARIATION);
  const lightness = MIN_LIGHTNESS + (Math.abs(hash * 2) % MAX_LIGHTNESS_VARIATION);
  const alpha = MIN_ALPHA + ((Math.abs(hash) % 50) / 100) * MAX_ALPHA_VARIATION;

  return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
};

export default getHslaColorFromString;
