import * as React from 'react';
import { LineChart } from '@mui/x-charts';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// const Tableau10 = [
//   '#4e79a7',
//   '#f28e2c',
//   '#e15759',
//   '#76b7b2',
//   '#59a14f',
//   '#edc949',
//   '#af7aa1',
//   '#ff9da7',
//   '#9c755f',
//   '#bab0ab',
// ];

const chartsParams = {
  margin: { bottom: 20, left: 25, right: 5 },
  height: 300,
};
export default function CustomLineChart() {
  const [color, setColor] = React.useState('#4e79a7');

 
  return (
    <Stack direction="column" spacing={2} alignItems="center" sx={{ width: '100%' }}>
      <LineChart
        {...chartsParams}
        series={[
          {
            data: [15, 23, 18, 19, 13],
            color,
          },
        ]}
      />
     
    </Stack>
  );
}
