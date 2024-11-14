import { Card, CardContent } from "@mui/material";
import { useState, useEffect } from "react";
import Loader from "../components/loader";
import { PriceType } from "../../../backend/src/types/data-types";
type ChartProps = {
  securityId: number;
};

const Chart = ({ securityId }: ChartProps) => {
  const [chartData, setChartData] = useState<PriceType[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchSecurityPrices = async () => {
      setIsLoading(true);
      try {
        const urlEndpoint = `http://localhost:3000/api/v1/private/securities/prices/${securityId}`;
        const response = await fetch(urlEndpoint);
        const data = await response.json();
        if (data.ok) {
          const sieveData = data.data;
          setChartData(sieveData);
        }
      } catch (error) {
        console.error(`Error fetching prices: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSecurityPrices();
  }, [securityId]);

  return (
    <section className="w-full">
      <Card sx={{ width: "100%", minWidth: "100%", margin: "auto" }} className="relative">
        <CardContent>Graph</CardContent>
        {isLoading && <Loader />}
        {!isLoading && chartData && chartData.map((dataPoint) => <p>{dataPoint.close}</p>)}
      </Card>
    </section>
  );
};

export default Chart;
