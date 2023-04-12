import React, {useEffect, useState} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {Box} from "@mui/material";
import classes from './HydrogenDataChart.module.css'

ChartJS.register(ArcElement, Tooltip, Legend);

const HydrogenDataChart = (props) => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 0,
      },
    ],
  });

  useEffect(() => {
    let com = new Map(Object.entries(props.data?.composition).sort((a, b) => b[1] - a[1]));
    setData({
      labels: [...com.keys()],
      datasets: [
        {
          label: '# of Votes',
          data: Array.from(com.values()),
          backgroundColor: [
            'rgba(255,73,73,0.58)',
            'rgba(255,80,147,0.53)',
            'rgba(255,60,214,0.51)',
            'rgba(178,55,255,0.51)',
            'rgba(148,55,255,0.53)',
            'rgba(83,64,255,0.57)',
            'rgba(48,152,255,0.49)',
            'rgba(59,201,252,0.52)',
            'rgba(60,255,241,0.51)',
            'rgba(65,255,191,0.44)',
            'rgba(52,255,106,0.38)',
            'rgba(105,255,64,0.5)',
            'rgba(176,255,84,0.48)',
            'rgba(213,255,55,0.47)',
            'rgba(255,219,43,0.49)',
            'rgba(180,125,62,0.48)',
            'rgba(176,77,0,0.49)',
            'rgba(183,183,183,0.5)',
            'rgba(61,61,61,0.51)',
            'rgba(0,0,0,0.45)',
          ],
          borderColor: [
            'rgb(255,73,73)',
            'rgb(255,80,147)',
            'rgb(255,60,214)',
            'rgb(178,55,255)',
            'rgb(148,55,255)',
            'rgb(83,64,255)',
            'rgb(48,152,255)',
            'rgb(59,201,252)',
            'rgb(60,255,241)',
            'rgb(65,255,191)',
            'rgb(52,255,106)',
            'rgb(105,255,64)',
            'rgb(176,255,84)',
            'rgb(213,255,55)',
            'rgb(255,219,43)',
            'rgb(180,125,62)',
            'rgb(176,77,0)',
            'rgb(183,183,183)',
            'rgb(61,61,61)',
            'rgb(0,0,0)',
          ],
          borderWidth: 1,
        },
      ],
    });
  }, [props.data]);
  return (
      <div className={classes.dataCart}>
        <Box>
          <Doughnut data={data} />
        </Box>
        <Box>
          {props.data.averageNHDistance > 0 ? <span>Predicted NH Distance: {(Math.round(props.data.averageNHDistance * 1000) / 1000).toFixed(3)}</span>: ''}
          <br/>{props.data.averageHHDistance > 0 ? <span>Average HH Distance: {(Math.round(props.data.averageHHDistance * 1000) / 1000).toFixed(3)}</span>: ''}
        </Box>
      </div>
  );
};

export default HydrogenDataChart;