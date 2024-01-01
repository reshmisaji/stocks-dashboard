import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ChartComponent from "react-apexcharts";
import "./Chart.css";

import jsonData from "../mocks/chartResponse.json";
import React, { useEffect, useRef, useState } from "react";

const getCandleData = (stockCode) => {
  const stockData = jsonData?.data; // should be fetched using stock code
  const options = {
    chart: {
      type: "candlestick",
      redrawOnParentResize: true,
    },
    title: {
      text: "CandleStick Chart",
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  const series = [
    {
      data: stockData?.map((candleData) => ({
        x: candleData.datetime,
        y: [candleData.open, candleData.high, candleData.low, candleData.close],
      })),
    },
  ];

  return { series, options };
};

export const Char1 = React.forwardRef(({ type, stockCode }, ref) => {
    const [width, setWidth] = useState(100);
    const [height, setHeight] = useState(100);
    useEffect(() => {
      
      const resizeObserver = new ResizeObserver((event) => {
        setWidth(event[0].contentBoxSize[0].inlineSize);
        setHeight(event[0].contentBoxSize[0].blockSize);
      });
  
      if (ref && ref.current) {
        resizeObserver.observe(ref.current);
      }
    }, [ref]);

  let data = {};

  switch (type) {
    case "candlestick":
      data = getCandleData(stockCode);
  }

  return (
      <ChartComponent
        options={data.options}
        series={data.series}
        type="candlestick"
        width={width * 80/100}
        // height={height}
      />

  );
});


export const Chart = ({type,stockCode}) => {
    const containerRef = useRef();
    return  <div className="chart-container" ref={containerRef}>
        <Char1 type={type} stockCode={stockCode} ref={containerRef}/>
    </div>
}