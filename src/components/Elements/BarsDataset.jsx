import { BarChart } from "@mui/x-charts/BarChart";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

const chartSetting = {
  height: 300,
  yAxis: [
    {
      disableTicks: true,
      disableLine: true,
      width: 50,
    },
  ],
  grid: {
    horizontal: true,
  },
  sx: {
    ["& .MuiChartsAxis-left .MuiChartsAxis-tickLabel"]: {
      fill: "#9F9F9F",
    },
    ["& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel"]: {
      fill: "#9F9F9F",
    },
  },
};

export default function BarsDataset(props) {
  const { dataset } = props;
  const { theme: themeMode } = useContext(ThemeContext);

  return (
    <BarChart
      dataset={dataset.data}
      xAxis={[
        {
          dataKey: dataset.dataKey,
          categoryGapRatio: 0.5,
        },
      ]}
      series={dataset.series.map((item, index) => ({
        ...item,
        color: index === 1 ? themeMode.color : "#E8E8E8",
      }))}
      {...chartSetting}
    />
  );
}
