type TrendProps = {
  trend: number;
};

const Trend = ({ trend }: TrendProps) => (

  
  <div
    className="w-14 flex justify-center relative"
    style={{ backgroundColor: trend > 0 ? "green" : "red" }}>
    <span>{trend}</span>
    <span>+</span>
  </div>
);

export default Trend;
