import * as React from 'react';
import { LineChart } from '@mui/x-charts';

export default function BasicLineChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 12] }]}
      series={[
        {
          data: [2, 5.5, 6.5, 8.5, 2.5, 1.5,0],
        },
      ]}
      width={700}
      height={400}
    />
  );
}