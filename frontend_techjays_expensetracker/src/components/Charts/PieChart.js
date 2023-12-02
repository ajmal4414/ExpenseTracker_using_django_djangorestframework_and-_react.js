

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
