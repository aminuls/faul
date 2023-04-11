import React from 'react';
import {
   LineChart,
   Line,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   Legend,
   ReferenceLine,
   ResponsiveContainer,
} from 'recharts';
const Statistics = () => {
   const chartData = [

      {
         "student": "John",
         "score": 80,
         "assignment": 57,
      },
      {
         "student": "Emily",
         "score": 90,
         "assignment": 52,
      },
      {
         "student": "David",
         "score": 75,
         "assignment": 21,
      },
      {
         "student": "Sarah",
         "score": 85,
         "assignment": 25,
      },
      {
         "student": "Michael",
         "score": 70,
         "assignment": 43,
      },
      {
         "student": "Amanda",
         "score": 95,
         "assignment": 48,
      },
      {
         "student": "Tom",
         "score": 85,
         "assignment": 60,
      },
      {
         "student": "Lisa",
         "score": 80,
         "assignment": 47,
      }
   ];
   return (
      <div>
         <LineChart
            width={1000}
            height={500}
            data={chartData}
         >
            <Line dataKey="score"> </Line>
            <Line stroke="#82ca9d" dataKey="assignment"> </Line>
         <XAxis dataKey="name"  />
         <YAxis />
         </LineChart>
      </div>
   );
};

export default Statistics;