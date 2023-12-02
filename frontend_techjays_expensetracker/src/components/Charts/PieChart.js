// import { lightBlue } from '@mui/material/colors';
// import React from 'react';
// import { Chart } from 'react-google-charts';
// import styled from 'styled-components';


// const StyledChart =styled(Chart)`
//     width:700px;
//     max-width:900px;
//     height:38vh;
//     background-color: var(--color-blue);
//     box-shadow: 5px 10px 5px gray;
//     `;

// const BarChart = () => {
//     const data =[

//         ['categories', 'Expense Items' , 'Amount'],
//         ['Food', 8175000 , 80008000]
//         ['Transportation',400000,10000]
//         ['Entertainment', 500000, 20000]


//     ]
// }




//   return (
//     <StyledChart
//     chartType='BarChart'
//     data={data}
//     options={{
//         title: 'Daily Expense in BarChart',
//         chartArea : {width: '50',height : '50',},
//         is3D: true;
//         backgroundColor: lightblue;


//     }}
// />
//   );
// };

// export default BarChart



// dmmy
// import React from 'react';
// import { Chart } from 'react-google-charts';
// import styled from 'styled-components';


// const StyledChart = styled(Chart)`
//   width: 100%;
//   max-width: 900px;
//   height: 40vh;
//   margin: 0 auto;
//   background-color: var(--color-blue);
//   box-shadow: 5px 10px 5px gray;
// `;

// const GoogleBarChart = () => {
//   const data = [
//     ["Task", "Hours per Day"],
//     ['Food', 11],
//     ['Transportation',2],
//     ['Entertainment', 2],
//     ['Petrols', 2],
//     ['Friends', 7],
//   ];

//   return (
//     <StyledChart
//       chartType="PieChart"
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
// // import BarChart from '../PieChart/GooglePieChart';


// const BarChart = () => {
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
//                 width={'500px'}
//                 height={'300px'}
//                 chartType="PieChart"
//                 loader={<div>Loading Chart</div>}
//                 data={[
//                     ['Category', 'Amount'],
//                     ...chartData.map(({ category, amount }) => [category, amount]),
//                 ]}
//                 options={{
//                     title: 'Expense Distribution',
//                 }}
//                 rootProps={{ 'data-testid': '1' }}
//             />
//         </div>
//     );
// };

// export default BarChart;



import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Chart } from 'react-google-charts';
import axios from 'axios';

const StyledChartContainer = styled.div`
  width: 100%;
   max-width: 900px;
   height: 47vh;
   margin: 0 auto;
   background-color: var(--color-blue);
   box-shadow: 5px 10px 5px gray;
`;

const PieChart = () => {
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
    <StyledChartContainer>
      <Chart
        width={'100%'}
        height={'100%'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Category', 'Amount'],
          ...chartData.map(({ category, amount }) => [category, amount]),
        ]}
        options={{
          title: 'Expense Distribution (Pie Chart)',
          pieSliceText: 'value-and-percentage',
          slices: [
            { color: '#4285f4' },
            { color: '#34a853' },
            { color: '#fbbc05' },
            { color: '#ea4335' },
          ],
          legend: {
            position: 'right',
            alignment: 'center',
            textStyle: {
              color: '#333',
              fontSize: 12,
            },
          },
          pieHole: 0.4,
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </StyledChartContainer>
  );
};

export default PieChart;