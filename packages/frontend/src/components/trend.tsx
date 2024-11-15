type TrendProps = {
  trend: number;
};

const Trend = ({ trend }: TrendProps) => {
  const thresholdArray: Array<[number, string]> = [
    [-.2, "bg-red-500"],
    [.2, "bg-green-500"],
    [1, "bg-blue-500"],
  ];
  const getBackgroundClassFromTrend = (targetTrend: number): string => {
    for (let i = 0; i <= thresholdArray.length - 2; i++) {
      const currentThreshold = thresholdArray[i][0];
      const currentClassString = thresholdArray[i][1];
      if (targetTrend < currentThreshold) {
        return currentClassString;
      }
    }

    const classString = (thresholdArray.at(-1) as [number, string])[1];
    return classString;
  };

  return (
    <div className={`w-14 flex justify-center items-center ${getBackgroundClassFromTrend(trend)} `}>
      <span>{trend}</span>
      <span></span>
    </div>
  );
};

export default Trend;
