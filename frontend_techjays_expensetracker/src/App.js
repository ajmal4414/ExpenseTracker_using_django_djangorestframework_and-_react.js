import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Signup from './components/Auth/Signup'
import Login from './components/Auth/Login'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Dashboard from './components/Pages/Dashboard'
import NavBar from './components/NavBar'
import Sidebar from './components/sidebar/Sidebar'
import styled from "styled-components";
import AddExpense from './components/Pages/AddExpense'
import ExpenseHistoryPage from './components/Pages/ExpenseHistory'
import EditExpensePage from './components/Pages/EditExpense'
// import ReportsPage from './components/BarChart/BarChart'
import GoogleBarChart from './components/Charts/GoogleBarChart'
import GooglePieChart from './components/Charts/PieChart'
import Home from './components/Pages/Home'
import './App.css'
import ReportsPage from './components/Pages/Report'
import AboutUsPage from './components/Pages/AboutUs'
import PasswordReset from './components/Auth/PasswordReset';

import { Outlet } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage'
import AllSetPage from './components/Auth/AllSetPage'
import { Navigate } from 'react-router-dom';
import AddExpensePage from './components/Pages/AddExpense'

// import AddExpensePage from './components/AddExpense'
// import 

const Container = styled.div`
    width: 100%;
    overflow-x: hidden;
   
  `;
  const ContainerSub = styled.div`
    width: 100%;
    border: 1px solid lightgray;
  `;
  const Wrapper = styled.div`
    width: 100%;
    height: 90vh;
    display: grid;
    grid-template-columns: 1fr 11fr;
 ;
  `;
  const MainBoxContainer = styled.div`
    width: 100%;
    height: 86vh;
    background-color: var(--color-info-light);
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const MainBox = styled.div`
    width: 70vw;
    height: 80vh;
    border-radius: 2%;
    box-shadow: 5px 5px 5px 8px gray;
    background-color: white;
  `;

  const SidebarContainer = styled.aside`
  width: 20vw;
  height: 86vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Sidebars = styled.div`
  width: 80%;
  height: 80vh;
  background-color: var(--color-info-dark);
  padding-top: 10%;
  box-shadow: 5px 5px 5px gray;
`;

function App() {

  const Container = styled.div`
    width: 100%;
    overflow-x: hidden;
   
  `;
  const ContainerSub = styled.div`
    width: 100%;
    border: 1px solid lightgray;
  `;
  const Wrapper = styled.div`
    width: 100%;
    height: 90vh;
    display: grid;
    grid-template-columns: 1fr 11fr;
 ;
  `;
  const MainBoxContainer = styled.div`
    width: 100%;
    height: 86vh;
    background-color: var(--color-info-light);
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const MainBox = styled.div`
    width: 70vw;
    height: 80vh;
    border-radius: 2%;
    box-shadow: 5px 5px 5px 8px gray;
    background-color: white;
  `;

  const SidebarContainer = styled.aside`
  width: 20vw;
  height: 86vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Sidebars = styled.div`
  width: 80%;
  height: 80vh;
  background-color: var(--color-info-dark);
  padding-top: 10%;
  box-shadow: 5px 5px 5px gray;
`;
const [AccessToken, setAccessToken] = useState([]);
const {expense_id}=useParams()
useEffect(() => {
  setAccessToken(localStorage.getItem("accessToken"));
}, []);
  return (

    <Router>
    <Container className="App">
        <ContainerSub className="container">
      <NavBar style={{"position":"fixed"}}/>
      <Wrapper>
      <SidebarContainer>
        <Sidebars>
      <Sidebar/>

      
      </Sidebars>
      </SidebarContainer>
      <MainBoxContainer>
      
      
              <MainBox>

              <Outlet />
              
                {!AccessToken ? (
                  <LandingPage />
                ) : (

  

    <Routes>
    
    <Route exact path="/password-reset" Component={PasswordReset} />
    <Route path="/" element={<AllSetPage />} />
    <Route path="/home" element={<Home />} />
 
     <Route exact path ='/dashboard' Component={Dashboard}/> 

     <Route path="/Add-expense" element={<AddExpensePage />} />
       <Route path="/Expense-History" element={<ExpenseHistoryPage />} />
      <Route path="Edit_Expense/:id" element={<EditExpensePage />} />
        <Route path="/Report" element={<ReportsPage />} />
        <Route path="/barchart" element={<GoogleBarChart />} />
        {/* <Route path="/helppage" element={<Hel />} /> */}
        {/* <Route path="/Dp" element={<DpView />} /> */}




           {/* <Route path="/password-reset" element={<PasswordReset/>} /> */}
    
    {/* <Route path="/" element={<LandingPage />} /> */}
    {/* <Route path ='' Component={Login}/>  */}
    {/* <Route exact path ='/Sign-in' Component={Signup}/> */}
    {/* <Route path='/' element={NavBar} ></Route> */}
    {/* <Route exact path ='/home' Component={Home}/>  */}
        </Routes>
                )}
   
    {/* <Route path ='/Sign-in' Component={Login}/>  */}

{/* 
    <Route path = '/Add-expense' Component={AddExpense}/>
    <Route path = '/Expense-History' Component={ExpenseHistoryPage}/>
     <Route path='/Edit-Expense/' Component={EditExpensePage}/>
    <Route path='/Bar-chart' Component={GoogleBarChart}/>
    <Route path='/Google-pie-chart' Component={GooglePieChart}/> 
    <Route path='/Report' Component={ReportsPage}/> 
    </Routes> */}

    </MainBox>
            </MainBoxContainer>
          </Wrapper>
        </ContainerSub>
      </Container>
      
    </Router>

    /* // <div>
    // <Signup/>
    // <Login/>
    </div> */


  );
}



function ProtectedRoutes() {
  // You might perform authentication checks here
  // and redirect to login if not authenticated
  // For simplicity, assuming authenticated is always true
  const authenticated = true;

  return authenticated ? (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes as needed */}
      </Routes>
    </>
  ) : (
    // Redirect to login if not authenticated
    <Navigate to="/" replace />
  );
}

export default App


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path='/' element={<NavBar />} />
//         <Route path='/dashboard' element={<Dashboard />} />
//         <Route path='/Sign-up' element={<Signup />} />
//         <Route path='/Sign-in' element={<Login />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;