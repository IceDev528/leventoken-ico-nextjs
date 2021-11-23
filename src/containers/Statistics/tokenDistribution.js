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
        "innerRadius": 30,
        "baseColor": "",
        "colors": [
          "#495fbc",
          "#fcd404",
          "#ae85c9",
          "#fff",
          "#de4daa",
          "#000000",
          "#719dc3",
          "#e65457"
        ],
        "gradientRatio": [],
        "hoverAlpha": 0,
        "labelColorField": "#FF0000",
        "labelTickColor": "#FF0000",
        "outlineAlpha": 0,
        "titleField": "country",
        "valueField": "litres",
        "backgroundColor": "#EFF6FF",
        "borderColor": "#EFF6FF",
        "color": "#000000",
        "fontSize": 17,
        "theme": "dark",
        "allLabels": [],
        "balloon": {},
        "titles": [],
        "dataProvider": [
          {
            "country": "Public Sale",
            "litres": "180"
          },
          {
            "country": "Private Sale",
            "litres": "20"
          },
          {
            "country": "Airdrops",
            "litres": "75"
          },
          {
            "country": "Team",
            "litres": "25"
          },
          {
            "country": "Platform Reserve",
            "litres": "800"
          }
        ]
      }} />
  )
}

export default Chart;