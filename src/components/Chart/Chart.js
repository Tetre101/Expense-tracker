import React from "react";
import { ChartBar } from "./ChartBar";
import "./Chart.css";

export const Chart = (props) => {
  const dataPointValues = props.datapoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  console.log(props.datapoints);
  return (
    <div className="chart">
      {props.datapoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
