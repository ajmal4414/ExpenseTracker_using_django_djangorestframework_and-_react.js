
// import React from 'react';
// import { Chart } from 'react-google-charts';
// import styled from 'styled-components';

// const StyledChart = styled(Chart)`
//   width: 500px;
//   max-width: 790px;
//   height: 40vh;
//   margin: 0 auto;
//   background-color: var(--color-blue);
//   box-shadow: 5px 10px 5px gray;
// `;

// const GoogleBarChart = () => {
//   const data = [
//     ['categories', 'Expense Items', 'Amount'],
//     ['Food', 8175000, 8008000],
//     ['Transportation', 3792000, 3694000],
//     ['Entertainment', 2695000, 2896000],
//     ['Petrols', 2899000, 195000],
//     ['Friends', 1526000, 1517000],
//   ];

//   return (
//     <StyledChart
//       chartType="BarChart"
//       data={data}
//       options={{
//         title: 'Daily Expense in BarChart',
//         chartArea: { width: '50%', height: '50%' },
//         is3D: true,
//         backgroundColor: 'lightblue', // Note: You might need to adjust this based on your color scheme
//       }}
//     />
//   );
// };

// export default GoogleBarChart;








// import React, { useEffect, useState } from 'react';
// import { Chart } from 'react-google-charts';
// import axios from 'axios';

// const GoogleBarChart = () => {
//     const [chartData, setChartData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://127.0.0.1:8000/expense_tracker/expense-chart/');
//                 setChartData(response.data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div>
//             <Chart
//                 width={'450px'}
//                 height={'300px'}
//                 chartType="BarChart"  // Specify BarChart type
//                 loader={<div>Loading Chart</div>}
//                 data={[
//                     ['Category', 'Amount'],
//                     ...chartData.map(({ category, amount }) => [category, amount]),
//                 ]}
//                 options={{
//                     title: 'Expense Distribution (Bar Chart)',
//                     chartArea: { width: '50%' },
//                     hAxis: {
//                         title: 'Amount',
//                         minValue: 0,
//                     },
//                     vAxis: {
//                         title: 'Category',
//                     },
//                 }}
//                 rootProps={{ 'data-testid': '1' }}
//             />
//         </div>
//     );
// };

// export default GoogleBarChart;







import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Chart } from 'react-google-charts';
import axios from 'axios';

const StyledChart = styled(Chart)`
  width: 500px;
  max-width: 800px;
  height: 47vh;
  margin: 0 auto;
  background-color: var(--color-blue);
  box-shadow: 5px 10px 5px gray;
`;

const GoogleBarChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://127.0.0.1:8000/expense_tracker/expense-chart/'
        );
        setChartData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <StyledChart
      chartType="BarChart"
      loader={<div>Loading Chart</div>}
      data={[
        ['Category', 'Amount'],
        ...chartData.map(({ category, amount }) => [category, amount]),
      ]}
      options={{
        title: 'Expense Distribution (Bar Chart)',
        chartArea: { width: '70%', height: '70%' },
        hAxis: {
          title: 'Amount',
          minValue: 0,
          titleTextStyle: {
            color: '#333',
            fontSize: 14,
          },
        },
        vAxis: {
          title: 'Category',
          titleTextStyle: {
            color: '#333',
            fontSize: 14,
          },
        },
        legend: {
          position: 'top',
          alignment: 'center',
          textStyle: {
            color: '#333',
            fontSize: 12,
          },
        },
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  );
};

export default GoogleBarChart;