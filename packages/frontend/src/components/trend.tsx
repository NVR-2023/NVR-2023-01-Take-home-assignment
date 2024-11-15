import { ComponentType } from "react";
import IconComponentProps from "../types/icon-types";
import UpwardArrowIcon from "./icons/upward-arrow";
import DownwardArrowIcon from "./icons/downward-arrow";
import RightwardArrowIcon from "./icons/rightward-arrow-icon";

type TrendProps = {
  trend: number;
};

const Trend = ({ trend }: TrendProps) => {
  const TREND_THRESHOLD_ARRAY: Array<[number, string, string, ComponentType<IconComponentProps>]> =
    [
      [-0.2, "bg-red-200", "text-red-800", DownwardArrowIcon],
      [0.2, "bg-green-200", "text-green-800", RightwardArrowIcon],
      [1, "bg-indigo-200", "text-indigo-800", UpwardArrowIcon],
    ];
  let ArrowComponent: ComponentType<IconComponentProps> = RightwardArrowIcon;

  const modifyTrendString = (trend: number): string => {
    let trendString = trend.toString();
    trendString = trendString.length === 3 ? trendString.padEnd(4, "0") : trendString;
    return trendString;
  };

  const getBackgroundClassFromTrend = (targetTrend: number): string => {
    let currentBackgroundColorClass = "";
    let currentTextColorClass = "";

    for (let i = 0; i < TREND_THRESHOLD_ARRAY.length; i++) {
      const currentThreshold = TREND_THRESHOLD_ARRAY[i][0];
      if (targetTrend < currentThreshold) {
        currentBackgroundColorClass = TREND_THRESHOLD_ARRAY[i][1];
        currentTextColorClass = TREND_THRESHOLD_ARRAY[i][2];
        ArrowComponent = TREND_THRESHOLD_ARRAY[i][3];
        break;
      }
    }

    if (!currentBackgroundColorClass || !currentTextColorClass) {
      const lastThreshold = TREND_THRESHOLD_ARRAY[TREND_THRESHOLD_ARRAY.length - 1];
      currentBackgroundColorClass = lastThreshold[1];
      currentTextColorClass = lastThreshold[2];
    }

    return `${currentBackgroundColorClass} ${currentTextColorClass}`;
  };

  const backgroundClass = getBackgroundClassFromTrend(trend);
  const [currentBackgroundColorClass, currentTextColorClass] = backgroundClass.split(" ");
  return (
    <div
      className={`space-x-1 tracking-wide text-sm font-bold w-16 h-8 rounded flex justify-center items-center ${currentBackgroundColorClass} ${currentTextColorClass}`}>
      <ArrowComponent scale={0.5} />
      <span className=" w-9 flex justify-end tabular-nums">{modifyTrendString(trend)}</span>
    </div>
  );
};

export default Trend;
