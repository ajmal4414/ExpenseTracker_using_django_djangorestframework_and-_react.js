import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import NavBar from './components/NavBar'
import Sidebar from './components/sidebar/Sidebar'
import styled from "styled-components";
function App() {

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
  return (

    <Router>
      <NavBar style={{"position":"fixed"}}/>

      <SidebarContainer>
        <Sidebars>
      <Sidebar/>

      
      </Sidebars>
      </SidebarContainer>
    <Routes>
     <Route exact path ='/' Component={Dashboard}/> 
    <Route exact path ='/Sign-up' Component={Signup}/>
    <Route path ='/Sign-in' Component={Login}/> 
    </Routes>
    </Router>

    /* // <div>
    // <Signup/>
    // <Login/>
    </div> */


  )
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