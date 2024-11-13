const Trend = ({ trend }: { trend: number }) => (
  <span style={{ color: trend > 0 ? "green" : "red" }}>{trend > 0 ? "↑" : "↓"}{trend}</span>
);

export default Trend;