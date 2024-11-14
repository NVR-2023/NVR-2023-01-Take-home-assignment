type TrendProps = {
  trend: number;
};

const Trend = ({ trend }: TrendProps) => (
  <div className="w-12 flex justify-center" style={{ backgroundColor: trend > 0 ? "green" : "red" }}>
    {trend}
  </div>
);

export default Trend;
