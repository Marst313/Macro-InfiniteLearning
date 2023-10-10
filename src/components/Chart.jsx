import React, { useState } from 'react';

// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

// Include the chart type
import Widgets from 'fusioncharts/fusioncharts.widgets';
// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

const Chart = () => {
  const [maxValue, setMaxValue] = useState(20);
  const chartConfigs = {
    id: 'stockRealTimeChart',
    type: 'realtimearea', // The chart type
    width: '700', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      chart: {
        theme: 'candy',
        caption: 'Statistik Laporan',
        xAxisName: 'Waktu',
        yAxisName: 'Jumlah Laporan',
        refreshinterval: '5',
        yaxisminvalue: '1',
        yaxismaxvalue: maxValue,
        yAxisminvalueFontColor: '#FFFFFF',
        yAxismaxvalueFontColor: '#FFFFFF',
        xAxisNameFontColor: '#FFFFFF',
        yAxisNameFontColor: '#FFFFFF',
        numdisplaysets: '8',
        labeldisplay: 'rotate',
        showRealTimeValue: '0',
        bgColor: '#0057FF',
        anchorRadius: '5',
      },
      categories: [
        {
          category: [
            {
              label: '7 AM',
            },
            {
              label: '9 AM',
            },
            {
              label: '11 AM',
            },
            {
              label: '1 PM',
            },
            {
              label: '3 PM',
            },
            {
              label: '5 PM',
            },
            {
              label: '7 PM',
            },
            {
              label: '9 PM',
            },
          ],
        },
      ],
      dataset: [
        {
          data: [
            {
              value: '2',
            },
            {
              value: '3',
            },
            {
              value: '4',
            },
            {
              value: '7',
            },
            {
              value: '7',
            },
            {
              value: '7',
            },
            {
              value: '10',
            },
            {
              value: '13',
            },
          ],
          linecolor: '#FFFFFF',
        },
      ],
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default Chart;
