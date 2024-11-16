import { Card } from "@mui/material";
import Loader from "../components/loader";
import ErrorToastWithRedirect from "../components/error-toast-with-redirect";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import getDateSpan from "../utils/get-sate-span";
import useSecurityDetails from "../hooks/use-security-details";

type ChartProps = {
  securityId: number;
};

const Chart = ({ securityId }: ChartProps) => {
  const { isSecurityDetailsLoading, hasSecurityDetailsErrors, securityDetailsData } =
    useSecurityDetails(securityId);
  const dateSpan = getDateSpan(securityDetailsData!);
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
      text: null,
    },
    subtitle: {
      text: `Volume, Close | ${dateSpan}`,
      style: {
        fontSize: "0.625rem",
        fontWeight: 600,
        padding: ".5rem 1rem",
        backgroundColor: "#e5e5e5",
        color: "#171717",
        borderRadius: "4px",
        letterSpacing: "loose",
        display: "inline-block",
      },
      useHTML: true,
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
        data: securityDetailsData?.map((data) => [data.date, data.close]),
        yAxis: 0,
        tooltip: {
          valueDecimals: 2,
        },
        color: "#FF5733",
      },
      {
        name: "Volume",
        data: securityDetailsData?.map((data) => [data.date, data.volume]),
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
        {isSecurityDetailsLoading && <Loader />}
        {!isSecurityDetailsLoading && hasSecurityDetailsErrors && (
          <ErrorToastWithRedirect
            redirectUrl={"/security-list"}
            errorMessage={"Error loading security data"}
          />
        )}
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </Card>
    </section>
  );
};

export default Chart;
