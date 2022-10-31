import React from "react";
import Chart from "react-apexcharts";
export default function BarChart(props) {

  return (
    <>
      <Chart
        series={[
          {
            name: "Cement Content",
            data: props.options
          },
        ]}
        type="bar"
        height="180px"
        width="100%"
        options={{
          chart: {
            type: "bar",
            toolbar: {
              show: false,
            },
          },
          colors: ["#0089ff"],
          fill: {
            colors: ["#0089ff",],
          },
          grid: {
            show: false,
          },
          plotOptions: {
            bar: {
              horizontal: true,
              columnWidth: "5%",
              dataLabels: {
                position: "top",
              },
            },
          },

          dataLabels: {
            enabled: true,
            offsetX: 60,
            // offsetY: -20,
            style: {
              fontSize: "10px",
              lineHeight: "13px",
              colors: ["#000000"],
            },
          },

          legend: {
            position: "top",
            horizontalAlign: "right",
            useSeriesColors: true,
          },
          stroke: {
            show: true,
            width: 4,
            colors: ["#fff"],
          },
          tooltip: {
            shared: true,
            intersect: false,
          },
          xaxis: {
            title: {
              text: "",
              offsetX: 0,
              offsetY: 0,
              style: {
                color: "#000000",
                fontSize: "14px",
                lineHeight: "18px",
                fontWeight: 400,
                cssClass: "apexcharts-xaxis-title",
              },
            },
            axisBorder: {
              show: true,
              color: "#707070",
              offsetX: 0,
              offsetY: 0,
            },
            categories: props.series,
          },
          yaxis: {
            title: {
              text: "",
              offsetX: 0,
              offsetY: 0,
              style: {
                color: "#000000",
                fontSize: "14px",
                lineHeight: "18px",
                fontWeight: 400,
                cssClass: "apexcharts-xaxis-title",
              },
            },
            axisBorder: {
              show: true,
              color: "#707070",
              offsetX: 0,
              offsetY: 0,
            },
          },
        }}
      />
    </>

  )

}