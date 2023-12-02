import React from 'react'
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GooglePieChart from '../Charts/PieChart';
import GoogleBarChart from '../Charts/GoogleBarChart'
import Table from '../Tables/Table';
// import BarChart from './BarChart/BarChart';




const Container = styled.div`
width: 100%;
height: inherit;
`;
const Wrapper = styled.div`
width: 100%;
height: inherit;
`;
const MainBoxContainer = styled.div`
width: 100%;
height: inherit;
display: grid;
grid-template-rows: 1fr 1fr;
`;
const FirstContainer = styled.div`
width: 100%;
height: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
`;
const SecondContainer = styled.div`
overflow-y: scroll;
background-color: lightblue;
`;
const FirstSubContainer1 = styled.div`
background-color: lightblue;
`;
const FirstSubContainer2 = styled.div`
width: 100%;
background-color: var(  --color-green);
`;

const PieChartContainer = styled.div`
width:100;
height:100;
display:flex;
justify-content:center;
align-items:center;
background-color:lightblue;
`;


const GoogleBarChartContainer = styled.div`
width:100;
height:100;
display:flex;
justify-content:center;
align-items:center;
background-color: lightblue;
`;

function Dashboard() {


  return (
    
    <Container>
    <Wrapper>
      <MainBoxContainer>
        <FirstContainer>
          <FirstSubContainer1>
      <GoogleBarChartContainer>
      <GoogleBarChart/>
      </GoogleBarChartContainer>
      </FirstSubContainer1>
            <FirstSubContainer2>
      <PieChartContainer>
      <GooglePieChart/>
      </PieChartContainer>
      </FirstSubContainer2>
          </FirstContainer>
          <SecondContainer>
            <Table />
          </SecondContainer>
        </MainBoxContainer>
      </Wrapper>
    </Container>
  );
}



export default Dashboard









































    // {/* <Link to ='Sign-up'>Signup</Link>
    // <br></br><br></br>
    // <Link to ='Sign-in'>Sign-in</Link>
    // <Link to ='Add-expense'>AddExpense</Link>
    // <br></br>
    // <Link to ='Expense-History'>ExpenseHistory</Link>

    // <br></br>

    // <Link to ='Edit-Expense'>EditExpense</Link> */}

    // {/* <Link to ='Bar-chart'>BarChart</Link> */}
    // {/* <Link to ='Google-pie-chart'>GooglePieChart</Link> */}
   
 