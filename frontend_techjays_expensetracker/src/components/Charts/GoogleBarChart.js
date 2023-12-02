
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
