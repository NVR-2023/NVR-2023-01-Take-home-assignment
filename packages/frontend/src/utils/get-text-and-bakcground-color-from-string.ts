const getTextAndBackgroundColorFromString = (
  text: string
): { backgroundColor: string; textColor: string } => {
  const MAX_HUE = 360;
  const MIN_SATURATION = 80;
  const MAX_SATURATION_VARIATION = 20;
  const MIN_LIGHTNESS = 90; 
  const MAX_LIGHTNESS_VARIATION = 5;
  const TEXT_LIGHTNESS_REDUCTION = 60;
  const MIN_ALPHA = 0.9;
  const TEXT_ALPHA = 1;

  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
  }

  const hue = Math.abs(hash) % MAX_HUE;
  const saturation = MIN_SATURATION + (Math.abs(hash) % MAX_SATURATION_VARIATION);
  const backgroundLightness = MIN_LIGHTNESS + (Math.abs(hash * 2) % MAX_LIGHTNESS_VARIATION);
  const textLightness = backgroundLightness - TEXT_LIGHTNESS_REDUCTION;
  const backgroundAlpha = MIN_ALPHA;
  const textAlpha = TEXT_ALPHA;

  const backgroundColor = `hsla(${hue}, ${saturation}%, ${backgroundLightness}%, ${backgroundAlpha})`;
  const textColor = `hsla(${hue}, ${saturation}%, ${textLightness}%, ${textAlpha})`;

  return { backgroundColor: backgroundColor, textColor: textColor };
};

export default getTextAndBackgroundColorFromString;
