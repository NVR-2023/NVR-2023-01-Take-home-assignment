import { Card, CardContent } from "@mui/material";
import { useState, useEffect } from "react";
import Loader from "../components/loader";
import { PriceType } from "../../../backend/src/types/data-types";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

type ChartProps = {
  securityName: string;
  securityId: number;
};

const Chart = ({ securityId, securityName }: ChartProps) => {
  const [chartData, setChartData] = useState<PriceType[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchSecurityPrices = async () => {
      setIsLoading(true);
      try {
        const endpointUrl = `http://localhost:3000/api/v1/private/securities/prices/${securityId}`;
        const response = await fetch(endpointUrl);
        const data = await response.json();
        if (data.ok) {
          const sieveData = data.data;

          const transformedSievedData = sieveData.map((dataPoint: PriceType) => ({
            ...dataPoint,
            date: new Date(dataPoint.date).getTime(),
          }));

          setChartData(transformedSievedData);
        }
      } catch (error) {
        console.error(`Error fetching security prices: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSecurityPrices();
  }, [securityId]);

  const chartOptions = {
    chart: {
      type: "line",
      backgroundColor: null,
    },
    title: {
      text: `${securityName} Volume and Close Prices Over Time`,
      style: {
        color: "#333333",
        fontSize: "18px",
        fontWeight: "bold",
      },
    },
    xAxis: {
      type: "datetime",
      title: {
        text: "Date",
        style: {
          color: "#666666",
          fontSize: "14px",
        },
      },
      labels: {
        style: {
          color: "#666666",
        },
      },
      lineColor: "#cccccc",
    },
    yAxis: [
      {
        title: {
          text: "Close Price",
          style: {
            color: "#666666",
            fontSize: "14px",
          },
        },
        labels: {
          style: {
            color: "#666666",
          },
        },
        gridLineColor: "#e6e6e6",
      },
      {
        title: {
          text: "Volume",
          style: {
            color: "#666666",
            fontSize: "14px",
          },
        },
        labels: {
          style: {
            color: "#666666",
          },
        },
        opposite: true,
        gridLineColor: "#e6e6e6",
      },
    ],
    series: [
      {
        name: "Close Price",
        data: chartData?.map((data) => [data.date, data.close]),
        yAxis: 0,
        tooltip: {
          valueDecimals: 2,
        },
        color: "#4caf50",
      },
      {
        name: "Volume",
        data: chartData?.map((data) => [data.date, data.volume]),
        yAxis: 1,
        type: "line",
        tooltip: {
          valueDecimals: 0,
        },
        color: "#2196f3",
      },
    ],
    legend: {
      itemStyle: {
        color: "#333333",
      },
    },
  };

  return (
    <section className="w-full">
      <Card sx={{ width: "100%", minWidth: "100%", margin: "auto" }} className="relative">
        <CardContent>Graph</CardContent>
        {isLoading && <Loader />}
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </Card>
    </section>
  );
};

export default Chart;
