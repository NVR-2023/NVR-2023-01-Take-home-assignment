import { Card } from "@mui/material";
import { PriceType } from "../../../backend/src/types/data-types";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

type ChartProps = {
  securityDetailsData: PriceType[];
};

const ChartZ = ({ securityDetailsData }: ChartProps) => {
  const dateSpan: string = (() => {
    if (!securityDetailsData || securityDetailsData.length === 0) {
      return "";
    }

    const sortedData = securityDetailsData.sort((firstEntry: PriceType, secondEntry: PriceType) => {
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
      text: `Volume and Close Price evolution from ${dateSpan}`,
      style: {
        color: "#333333",
        fontSize: ".75rem",
        fontWeight: 500,
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
        data: securityDetailsData.map((data) => [new Date(data.date).getTime(), data.close]),
        yAxis: 0,
        tooltip: {
          valueDecimals: 2,
        },
        color: "#FF5733",
      },
      {
        name: "Volume",
        data: securityDetailsData.map((data) => [new Date(data.date).getTime(), data.volume]),
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
      <Card sx={{ width: "100%", minWidth: "100%", margin: "auto" }}>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </Card>
    </section>
  );
};

export default ChartZ;
