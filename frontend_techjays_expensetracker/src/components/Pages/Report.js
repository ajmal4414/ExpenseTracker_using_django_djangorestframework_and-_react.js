

// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { Chart } from 'react-google-charts';
// import { useReactToPrint } from 'react-to-print';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// const ReportsPage = () => {
//     const [yearlyData, setYearlyData] = useState([]);
//     const componentRef = useRef();
  
//     useEffect(() => {
//       const fetchYearlyData = async () => {
//         try {
//           const response = await axios.get('http://127.0.0.1:8000/expense_tracker/reports/yearly/2023/');
//           setYearlyData(response.data);
//         } catch (error) {
//           console.error('Error fetching yearly data:', error);
//         }
//       };
  
//       fetchYearlyData();
//     }, []);
  
//     // Transform the data to fit the expected format for a bar chart
//     const chartData = yearlyData.map(item => [item.category, parseFloat(item.amount)]);
  
//     const chartOptions = {
//       title: 'Yearly Expense Report',
//       hAxis: { title: 'Category' },
//       vAxis: { title: 'Total Expense' },
//     };
  
//     const handleDownloadReport = useReactToPrint({
//       content: () => componentRef.current,
//       documentTitle: 'Yearly_Expense_Report',
//       onAfterPrint: () => {
//         // Implement additional logic after printing, if needed
//       },
//     });
  
//     const handleGeneratePDF = () => {
//       const pdf = new jsPDF();
//       pdf.text('Yearly Expense Report', 20, 20);
//       pdf.autoTable({
//         head: [['Category', 'Total Expense']],
//         body: [...chartData],
//       });
//       pdf.save('Yearly_Expense_Report.pdf');
//     };
  
//     return (
//       <div>
//         <h2>Yearly Expense Report</h2>
//         <Chart
//           width={'100%'}
//           height={'400px'}
//           chartType="Bar"
//           loader={<div>Loading Chart</div>}
//           data={[['Category', 'Total Expense'], ...chartData]}
//           options={chartOptions}
//           ref={componentRef}
//         />
  
//         <h2>Total Expenses by Category</h2>
//         <ul>
//           {yearlyData.map(item => (
//             <li key={item.category}>{`${item.category}: $${item.amount}`}</li>
//           ))}
//         </ul>
  
//         {/* Add the option to download or print the report here */}
//         <button onClick={handleGeneratePDF}>Download PDF</button>
//         <button onClick={handleDownloadReport}>Print</button>
//       </div>
//     );
//   };
  
//   export default ReportsPage;




import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import styled from 'styled-components';

// // Styled components
// const PageContainer = styled.div`
//   font-family: 'Arial', sans-serif;
//   padding: 20px;
// `;

// const Title = styled.h2`
//   color: #333;
//   font-size: 24px;
//   margin-bottom: 20px;
// `;

// const ChartContainer = styled.div`
//   width: 100%;
//   height: 400px;
// `;

// const CategoryList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
// `;

// const CategoryItem = styled.li`
//   color: #555;
//   font-size: 16px;
//   margin-bottom: 8px;
// `;

// const ButtonContainer = styled.div`
//   margin-top: 20px;
//   button {
//     margin-right: 10px;
//     padding: 10px 20px;
//     font-size: 16px;
//     cursor: pointer;
//     background-color: #007bff;
//     color: #fff;
//     border: none;
//     border-radius: 5px;
//     transition: background-color 0.3s ease;

//     &:hover {
//       background-color: #0056b3;
//     }
//   }
// `;

// const ReportsPage = () => {
//   const [yearlyData, setYearlyData] = useState([]);
//   const componentRef = useRef();

//   useEffect(() => {
//     const fetchYearlyData = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/expense_tracker/reports/yearly/2023/');
//         setYearlyData(response.data);
//       } catch (error) {
//         console.error('Error fetching yearly data:', error);
//       }
//     };

//     fetchYearlyData();
//   }, []);

//   // Transform the data to fit the expected format for a bar chart
//   const chartData = yearlyData.map(item => [item.category, parseFloat(item.amount)]);

//   const chartOptions = {
//     title: 'Yearly Expense Report',
//     hAxis: { title: 'Category' },
//     vAxis: { title: 'Total Expense' },
//   };

//   const handleDownloadReport = useReactToPrint({
//     content: () => componentRef.current,
//     documentTitle: 'Yearly_Expense_Report',
//     onAfterPrint: () => {
//       // Implement additional logic after printing, if needed
//     },
//   });

//   const handleGeneratePDF = () => {
//     const pdf = new jsPDF();
//     pdf.text('Yearly Expense Report', 20, 20);
//     pdf.autoTable({
//       head: [['Category', 'Total Expense']],
//       body: [...chartData],
//     });
//     pdf.save('Yearly_Expense_Report.pdf');
//   };

//   return (
//     <PageContainer>
//       <Title>Yearly Expense Report</Title>
//       <ChartContainer>
//         <Chart
//           width={'100%'}
//           height={'400px'}
//           chartType="Bar"
//           loader={<div>Loading Chart</div>}
//           data={[['Category', 'Total Expense'], ...chartData]}
//           options={chartOptions}
//           ref={componentRef}
//         />
//       </ChartContainer>

//       <Title>Total Expenses by Category</Title>
//       <CategoryList>
//         {yearlyData.map(item => (
//           <CategoryItem key={item.category}>{`${item.category}: $${item.amount}`}</CategoryItem>
//         ))}
//       </CategoryList>

//       {/* Add the option to download or print the report here */}
//       <ButtonContainer>
//         <button onClick={handleGeneratePDF}>Download PDF</button>
//         <button onClick={handleDownloadReport}>Print</button>
//       </ButtonContainer>
//     </PageContainer>
//   );
// };

// export default ReportsPage;



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

// const CategoryList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   margin-bottom: 20px;
// `;

// const CategoryItem = styled.li`
//   text-align: center;
//   margin-bottom: 8px;
// `;

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

      {/* <Title>Total Expenses by Category</Title> */}
      {/* <CategoryList>
        {yearlyData.map(item => (
          <CategoryItem key={item.category}>{`${item.category}: $${item.amount}`}</CategoryItem>
        ))}
      </CategoryList> */}

      {/* Add the option to download or print the report here */}
      <ButtonContainer>
        <button onClick={handleGeneratePDF}>Download PDF</button>
        <button onClick={handleDownloadReport}>Print</button>
      </ButtonContainer>
    </PageContainer>
  );
};

export default ReportsPage;