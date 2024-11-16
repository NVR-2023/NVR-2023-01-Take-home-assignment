import { Card } from "@mui/material";
import { useState, useEffect } from "react";
import Loader from "../components/loader";
import { PriceType } from "../../../backend/src/types/data-types";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

type ChartProps = {
  securityId: number;
};

const Chart = ({ securityId }: ChartProps) => {
  const [chartData, setChartData] = useState<PriceType[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dateSpan: string = (() => {
    if (!chartData || chartData.length === 0) {
      return "";
    }

    const sortedData = chartData.sort((firstEntry: PriceType, secondEntry: PriceType) => {
      const firstEntryDate = new Date(firstEntry.date);
      const secondEntryDate = new Date(secondEntry.date);
      return firstEntryDate.getTime() - secondEntryDate.getTime();
    });

    const firstDate = new Date(sortedData[0].date);
    const lastDate = new Date(sortedData[sortedData.length - 1].date);

    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      year: "numeric",
    };

    const firstDateFormatted = firstDate.toLocaleString("en-US", options);
    const lastDateFormatted = lastDate.toLocaleString("en-US", options);

    return `${firstDateFormatted} to ${lastDateFormatted}`;
  })();

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
      height: 300,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: `Volume and Close Prices evolution from ${dateSpan}`,
      style: {
        color: "#333333",
        fontSize: ".75rem",
        fontWeight: 700,
      },
    },
    xAxis: {
      type: "datetime",
      title: {
        text: `Date`,
        style: {
          color: "#666666",
          fontSize: ".5rem",
        },
      },
      labels: {
        style: {
          color: "#666666",
          fontSize: ".625rem",
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
            fontSize: ".5rem",
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
            fontSize: ".5rem",
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
        color: "#FF5733",
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
        {isLoading && <Loader />}
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </Card>
    </section>
  );
};

export default Chart;
