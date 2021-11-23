import React from "react";
import AmCharts from "@amcharts/amcharts3-react";

const Chart = () => {
  return (
    <AmCharts.React
      className="chartdiv"
      style={{
        width: "100%",
        height: "400px",
        backgroundColor: "#EFF6FF"
      }}
      options={{
        "type": "pie",
        "hideCredits": true,
        "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
        "innerRadius": "40%",
        "titleField": "category",
        "valueField": "column-1",
        "allLabels": [],
        "balloon": {},
        "legend": {
          "enabled": true,
          "align": "center",
          "markerType": "circle"
        },
        "titles": [],
        "dataProvider": [
          {
            "category": "Development & Administration",
            "column-1": "40"
          },
          {
            "category": "Marketing",
            "column-1": "30"
          },
          {
            "category": "Security",
            "column-1": "25"
          },
          {
            "category": "Legal",
            "column-1": "5"
          }
        ]
      }} />
  )
}

export default Chart;