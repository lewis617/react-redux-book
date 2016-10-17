import React, { PropTypes } from 'react';
import ReactHighcharts from 'react-highcharts';

function Column(props) {
  if (!props.statistic) return <p>数据异常</p>;

  const { categories, series } = props.statistic.chart;
  const config = {
    credits: {
      enabled: false
    },
    chart: {
      type: 'column'
    },
    title: {
      text: 'Monthly Average Temperature',
      x: -20
    },
    subtitle: {
      text: 'Source: WorldClimate.com',
      x: -20
    },
    xAxis: {
      categories
    },
    yAxis: {
      title: {
        text: 'Temperature (°C)'
      }
    },
    tooltip: {
      valueSuffix: '°C'
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
    },
    series
  };
  return (
    <ReactHighcharts config={config}/>
  );
}

Column.propTypes = {
  statistic: PropTypes.any
};

export default Column;
