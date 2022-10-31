import React, { useState } from "react";
import BarChart from '../BarChart/barChart'
export default function VertivalBarChart(props) {

  const vertivalBarChart = props.data;

  //restructure to form chart data
  const options = [];
  vertivalBarChart.cementContents.forEach((data) => {
    options.push(data.value);
  });

  const series = [];
  vertivalBarChart.cementContents.forEach((data) => {
    series.push(data.label);
  });

  return (
    <>
      <BarChart
        options={options}
        series={series}
        type="bar"
        width="500"
      />

    </>
  )
}
