
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import styled from 'styled-components';



const PageContainer = styled.div`
  font-family: sans-serif;
  margin: 0;
  padding: 20px;
  height: 100%;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 8px;
`;

const ChartContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;


const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 20px;

  button {
    margin: 0 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const ReportsPage = () => {
  const [yearlyData, setYearlyData] = useState([]);
  const componentRef = useRef();

  useEffect(() => {
    const fetchYearlyData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/expense_tracker/reports/yearly/2023/');
        setYearlyData(response.data);
      } catch (error) {
        console.error('Error fetching yearly data:', error);
      }
    };

    fetchYearlyData();
  }, []);

  // Transform the data to fit the expected format for a bar chart
  const chartData = yearlyData.map(item => [item.category, parseFloat(item.amount)]);

  const chartOptions = {
    title: 'Yearly Expense Report',
    hAxis: { title: 'Category' },
    vAxis: { title: 'Total Expense' },
    chartArea: { width: '80%', height: '60%' }, // Adjust the size of the chart
  };

  const handleDownloadReport = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Yearly_Expense_Report',
    onAfterPrint: () => {
      // Implement additional logic after printing, if needed
    },
  });

  const handleGeneratePDF = () => {
    const pdf = new jsPDF();
    pdf.text('Yearly Expense Report', 20, 20);
    pdf.autoTable({
      head: [['Category', 'Total Expense']],
      body: [...chartData],
    });
    pdf.save('Yearly_Expense_Report.pdf');
  };

  return (
    <PageContainer>
      <Title>Yearly Expense Report</Title>
      <ChartContainer>
        <Chart
          width={'100%'}
          height={'400px'}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[['Category', 'Total Expense'], ...chartData]}
          options={chartOptions}
          ref={componentRef}
        />
      </ChartContainer>

      {/* Add the option to download or print the report here */}
      <ButtonContainer>
        <button onClick={handleGeneratePDF}>Download PDF</button>
        <button onClick={handleDownloadReport}>Print</button>
      </ButtonContainer>
    </PageContainer>
  );
};

export default ReportsPage;
