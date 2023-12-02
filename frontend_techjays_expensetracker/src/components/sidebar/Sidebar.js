import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Dp from  '../images/userdp.png'
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import HomeIcon from'@mui/icons-material/Home';
import userdp from '../images/userdp.png'

import DashboardIcon from "@mui/icons-material/Dashboard";
import AddCardIcon from "@mui/icons-material/AddCard";
import HistoryIcon from "@mui/icons-material/History";
import EditNoteIcon from "@mui/icons-material/EditNote";
import SummarizeIcon from "@mui/icons-material/Summarize";
import LogoutIcon from "@mui/icons-material/Logout";
import Lock from '../images/Lock.png'
import { useParams } from "react-router-dom";
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';

// import './Sidebar.css'

  //   const Container = styled.div`
  //     height:100;
  //     width:100;
  //   `;
  //   const Wrapper = styled.div`
  //     height:100;
  //     display:flex;
  //     flex-direction:column;
  //     justify-content: center;
  //     align-items: center;
  //   `;
    
  //   const UserContainer=styled.div``;
  //   const UserDp = styled.img`
  //     width:100px;
  //     border-radius:50%;
  //     height:fit-content;

  //   `;

  //   const DpContainer =styled.div``;
  //   const UserName = styled.div ``;
  //   const FirstContainer =styled.ul`
  //   padding:60px;
  //   `;

  //   const SecondContainer = styled.div`
  //   height: 100%;
  //   width: 100%;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: flex-end;
  // `;
  //   const ItemContainer = styled.li`
  //     display:flex;
  //     margin:5px;
  //   `;
  //   const ItemIcon = styled.div`
  //      margin-right:8px;
  //   `;

    // const location = useLocation();
  
  // modfied 
//   const Container = styled.div`
//   height: 100%;
//   width: 100%;
//   background-color: #283747;
//   color: #ecf0f1;
  
  
// `;

// const Wrapper = styled.div`
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const Parent=styled.div`
// '' /* height: 100%;
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// background-color: lightblue; */
// `
// const UserContainer = styled.div`
// `;

// // nt

//   // display: flex;
//   // flex-direction: column;
//   // align-items: center;
//   // margin-bottom: 20px;




// const UserDp = styled.img`
//   width: 100px;
//   border-radius: 50%;
//   height: auto;
// `;

// const DpContainer = styled.div`
//   margin-bottom: 10px;
// `;
// const UserName = styled.div`
//   font-size: 18px;
//   font-weight: bold;
// `;

// const FirstContainer = styled.ul`
//   padding: 20px;
//   list-style: none;
// `;

// const SecondContainer = styled.div`
//   margin-top: 20px;
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;


// const ItemContainer = styled.li`
//   display: flex;
//   margin: 10px 0;
//   align-items: center;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #34495e;
//   }

//   a {
//     text-decoration: none;
//     color: inherit;
//     font-size: 16px;
//   }
// `;

// const ItemIcon = styled.div`
//   margin-right: 10px;
// `;

// nt
// const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: inherit;
//   font-size: 16px;
// `;


// wrkinhg
 
//   function Sidebar() {
//   const AccessToken=localStorage.getItem('accessToken');
  
//   const navigate = useNavigate();
//   const location = useLocation();

//   const LocClear=()=>{
//     localStorage.clear();
//     window.location.reload();
//   };
    
// // const location = useLocation();
//   return (
//     <Container>
//         <Wrapper>
//         {
//         !AccessToken?<UserDp src={Lock} />:<Parent>
//         <UserContainer>
//             <DpContainer>
//                 <UserDp src={Dp}/>
//             </DpContainer>
//             <UserName>Admin</UserName>
            
//         </UserContainer>
//         <FirstContainer>
//         <ItemContainer>
//             <ItemIcon>
//                 <HomeIcon/>
//             </ItemIcon>
//             <Link 
//             style={{"textDecoration":"none"}}
//             to = "/home" className= {location.pathname ==="/home" ? "active":""}>
//             Home
//             </Link>
//         </ItemContainer>

//         <ItemContainer>
//             <ItemIcon>
//               <DashboardIcon />
//             </ItemIcon>
//             <Link
//             style={{"textDecoration":"none"}}
//               to="/dashboard"
//               className={location.pathname === "/dashboard" ? "active" : ""}
//             >
//               Dashboard
//             </Link>
//           </ItemContainer>
//           <ItemContainer>
//             <ItemIcon>
//               <AddCardIcon />
//             </ItemIcon>
//             <Link
//             style={{"textDecoration":"none"}}
//               to="/Add-expense"
//               className={location.pathname === "/Add-expense" ? "active" : ""}
//             >
//               Add Expence
//             </Link>
//           </ItemContainer>
//           <ItemContainer>
//             <ItemIcon>
//               <HistoryIcon />
//             </ItemIcon>
//             <Link
//             style={{"textDecoration":"none"}}
//               to="/Expense-History"
//               className={location.pathname === "/Expense-History" ? "active" : ""}
//             >
//               History
//             </Link>
//           </ItemContainer>
//           <ItemContainer>
//             <ItemIcon>
//               <EditNoteIcon />
//             </ItemIcon>
//             <Link
//             style={{"textDecoration":"none"}}
//               to="/Edit-Expense"
//               className={location.pathname === "/Edit-Expense" ? "active" : ""}
//             >
//               Edit
//             </Link>
//           </ItemContainer>
//           <ItemContainer>
//             <ItemIcon>
//               <SummarizeIcon />
//             </ItemIcon>
//             <Link
//             style={{"textDecoration":"none"}}
//               to="/Report"
//               className={location.pathname === "/Report" ? "active" : ""}
//             >
//               Report
//             </Link>
//             </ItemContainer>

//         </FirstContainer>

//         <SecondContainer>
//           <ItemContainer>
//             <ItemIcon>
//               <LogoutIcon />
//             </ItemIcon>
//             <Link style={{"textDecoration":"none"}} onClick={LocClear}>Logout</Link>
//             </ItemContainer>
//         </SecondContainer>
//         </Parent>
//       }
//         </Wrapper>
//     </Container>
//   );
// }

// export default Sidebar




// jst mdfing

// function Sidebar()




// {  const location = useLocation();
//   const AccessToken = localStorage.getItem("accessToken");

  // const [loginStatus, setLoginStatus] = useState(''); // 'success', 'failed', or ''
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   // Reset login status when the component mounts
  //   setLoginStatus('');
  // }, []);


//   const LocClear = () => {
//     localStorage.clear();
//     window.location.reload();
//   };
//   const [User,setUser]=useState('')
//   useEffect(() => {
//   setUser(localStorage.getItem('user'))
//   }, []);
//   const navigate=useNavigate()
//   const handleSwitch=()=>{
//     navigate('/Dp')
//   } 
//   const [keyDash,setKeyDash]=useState([])
//   const handleKey=()=>{
     
//      setKeyDash(true)
//      localStorage.setItem('Keydash',keyDash)
//   }
//   const Remove=()=>{
//     localStorage.removeItem('Keydash')
//     window.location.reload()
//   }
//   return (
//     <Container>
//       <Wrapper>
//         {!AccessToken ? (
//           <UserDp src={Lock} />
//         ) : (
//           <Parent>
//             <UserContainer>
//               <DpContainer onClick={handleSwitch}>
//                 <UserDp src={Dp} />
//               </DpContainer>
//               <UserName>{User}</UserName>
//             </UserContainer>
//             <FirstContainer>
//               <ItemContainer>
//                 <ItemIcon>
//                   <HomeIcon />
//                 </ItemIcon>
//                 <Link
//                   style={{
//                     textDecoration: "none",
//                     padding: "2px",
//                     display: "flex",
//                     alignItems: "center",
//                     fontSize: "1rem",
//                     fontWeight: 800,
//                     color: "black",
//                   }}
//                   to="/home"
                  
//                   className={location.pathname === "/home" ? "active" : ""}
//                 >
//                   Home
//                 </Link>
//               </ItemContainer>
//               <ItemContainer>
//                 <ItemIcon>
//                   <DashboardIcon />
//                 </ItemIcon>
//                 <Link
//                   style={{
//                     textDecoration: "none",
//                     padding: "2px",
//                     display: "flex",
//                     alignItems: "center",
//                     fontSize: "1rem",
//                     fontWeight: 800,
//                     color: "black",
//                   }}
//                   to="/dashboard"
                  
//                   className={location.pathname === "/dashboard" ? "active" : ""}
//                 >
//                   Dashboard
//                 </Link>
//               </ItemContainer>
//               <ItemContainer>
//                 <ItemIcon>
//                   <AddCardIcon />
//                 </ItemIcon>
//                 <Link
//                   style={{
//                     textDecoration: "none",
//                     padding: "2px",
//                     display: "flex",
//                     alignItems: "center",
//                     fontSize: "1rem",
//                     fontWeight: 800,
//                     color: "black",
//                   }}
//                   to="/add"
                  
//                   className={location.pathname === "/add" ? "active" : ""}
//                 >
//                   Add Expence
//                 </Link>
//               </ItemContainer>
//               <ItemContainer>
//                 <ItemIcon>
//                   <HistoryIcon />
//                 </ItemIcon>
//                 <Link
//                   style={{
//                     textDecoration: "none",
//                     padding: "2px",
//                     display: "flex",
//                     alignItems: "center",
//                     fontSize: "1rem",
//                     fontWeight: 800,
//                     color: "black",
//                   }}
//                   to="/history"
//                   className={location.pathname === "/history" ? "active" : ""}
              
//                 >
//                   History
//                 </Link>
//               </ItemContainer>
//               <ItemContainer>
//                 <ItemIcon>
//                   <EditNoteIcon />
//                 </ItemIcon>
//                 <Link
//                   style={{
//                     textDecoration: "none",
//                     padding: "2px",
//                     display: "flex",
//                     alignItems: "center",
//                     fontSize: "1rem",
//                     fontWeight: 800,
//                     color: "black",
//                   }}
//                   to="/edit"
//                   className={location.pathname === "/edit" ? "active" : ""}
//                 >
//                   Edit
//                 </Link>
//               </ItemContainer>
//               <ItemContainer>
//                 <ItemIcon>
//                   <SummarizeIcon />
//                 </ItemIcon>
//                 <Link
//                   style={{
//                     textDecoration: "none",
//                     padding: "2px",
//                     display: "flex",
//                     alignItems: "center",
//                     fontSize: "1rem",
//                     fontWeight: 800,
//                     color: "black",
//                   }}
//                   onClick={handleKey}
//                   to="/report"
//                   className={location.pathname === "/report" ? "active" : ""}
//                 >
//                   Report-doubleClick
//                 </Link>
//               </ItemContainer>
//             </FirstContainer>
//             <SecondContainer>
//               <ItemContainer>
//                 <ItemIcon>
//                   <LogoutIcon />
//                 </ItemIcon>
//                 <Link
//                   style={{
//                     textDecoration: "none",
//                     padding: "2px",
//                     display: "flex",
//                     alignItems: "center",
//                     fontSize: "1rem",
//                     fontWeight: 800,
//                     color: "black",
//                   }}
//                   onClick={LocClear}
//                 >
//                   Logout
//                 </Link>
//               </ItemContainer>
//             </SecondContainer>
//           </Parent>
//         )}
//       </Wrapper>
//     </Container>
//   );
// }


// export default Sidebar

function Sidebar() {
// const Container = styled.div`
//     height: 100%;
//     width: 100%;
//     background-color: #F875AA;
    
//   `;
//   const Wrapper = styled.div`
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     background-color: #F875AA;
    
//   `;
//   const Parent = styled.div`
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;

//     background-color: #F875AA;
    
//   `;
//   const UserContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     border-radius: 5%;
//     background-color:#eeb3dc
// ;
//     border: none;
//     box-shadow: 5px 5px 5px black;
//     margin-top: 20px;
//   `;
//   const UserDp = styled.img`
//     width: 100px;
//     border-radius: 50%;
//     height: fit-content;
//     margin: 0%;
//     padding: 5px;
//   `;
//   const DpContainer = styled.div`
//     width: fit-content;
//     background-color: #20aa33;
//     border-radius: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     cursor: pointer;
//   `;
//   const UserName = styled.div`
//     background-color: transparent;
//     color: #a23dd1;
//     font-size: 30px;
//     font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
//   `;
//   const FirstContainer = styled.ul`
//     padding: 60px;
//     /* background-color: lightcoral; */
//     border-radius: 5%;
//   `;
//   const SecondContainer = styled.div`
//     height: 100%;
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: flex-end;
//   `;
//   const ItemContainer = styled.li`
//     display: flex;

//     margin: 5px;
//     & :hover {
//       color: #7662e7 !important;
//       border-radius: 20%;
//     }
//   `;
//   const ItemIcon = styled.div`
//     margin-right: 1px;
//     padding: 2px;
//     color: black;
//   `;


const Container = styled.div`
  height: 100%;
  width: 100% /* Reduced sidebar width */
  background-color: #2c3e50;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #2c3e50;
  padding-top: 20px;
`;

const Parent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #2c3e50;
  padding-top: 20px;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #3498db;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  padding: 10px;
`;

const UserDp = styled.img`
  width: 60px; /* Reduced image size */
  border-radius: 50%;
  height: auto;
  margin: 10px;
`;

const DpContainer = styled.div`
  width: fit-content;
  background-color: #27ae60;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const UserName = styled.div`
  color: #ecf0f1;
  font-size: 16px; /* Reduced font size */
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-top: 10px;
`;

const FirstContainer = styled.ul`
  padding: 10px; /* Adjusted padding */
`;

const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const ItemContainer = styled.li`
  display: flex;
  align-items: center;
  margin: 5px; /* Adjusted margin */
  cursor: pointer;

  &:hover {
    color: #e74c3c;
    background-color: #34495e;
    border-radius: 5px; /* Adjusted border-radius */
  }
`;

const ItemIcon = styled.div`
  margin-right: 5px; /* Adjusted margin */
  font-size: 14px; /* Adjusted font size */
  color: #ecf0f1;
`;

  
  const location = useLocation();
  const AccessToken = localStorage.getItem("accessToken");
  const LocClear = () => {
    localStorage.clear();
    window.location.reload();
  };
  const [User,setUser]=useState('')
  useEffect(() => {
  setUser(localStorage.getItem('user'))
  }, [])
  const navigate=useNavigate()
  const handleSwitch=()=>{
    navigate('/Dp')
  } 
  const [keyDash,setKeyDash]=useState([])
  const handleKey=()=>{
     
     setKeyDash(true)
     localStorage.setItem('Keydash',keyDash)
  }
  const Remove=()=>{
    localStorage.removeItem('Keydash')
    window.location.reload()
  }
  const {expense_id}=useParams()
  return (
    <Container>
      <Wrapper>
        {!AccessToken ? (
          <UserDp src={Lock} />
        ) : (
          <Parent>
            <UserContainer>
              <DpContainer onClick={handleSwitch}>
                <UserDp src={Dp} />
              </DpContainer>
              <UserName>{User}</UserName>
            </UserContainer>
            <FirstContainer>
              <ItemContainer>
                <ItemIcon>
                  <HomeIcon />
            </ItemIcon>
            <Link
                  style={{
                    textDecoration: "none",
                    padding: "2px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "black",
                  }}
                  to="/home"
                  
                  className={location.pathname === "/home" ? "active" : ""}
                >
                  Home
                </Link>
              </ItemContainer>
              <ItemContainer>
                <ItemIcon>
                  <DashboardIcon />
                </ItemIcon>
                <Link
                  style={{
                    textDecoration: "none",
                    padding: "2px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "black",
                  }}
                  to="/dashboard"
                  
                  className={location.pathname === "/dashboard" ? "active" : ""}
                >
                  Dashboard
                </Link>
              </ItemContainer>
              <ItemContainer>
                <ItemIcon>
                  <AddCardIcon />
                </ItemIcon>
                <Link
                  style={{
                    textDecoration: "none",
                    padding: "2px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "black",
                  }}
                  to="/Add-expense"
                  
                  className={location.pathname === "/Add-expense" ? "active" : ""}
                >
                  Add Expense
                </Link>
              </ItemContainer>
              <ItemContainer>
                <ItemIcon>
                  <HistoryIcon />
                </ItemIcon>
                <Link
                  style={{
                    textDecoration: "none",
                    padding: "2px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "black",
                  }}
                  to="/Expense-History"
                  className={location.pathname === "/Expense-History" ? "active" : ""}
              
                >
                  History
                </Link>
              </ItemContainer>
              
          <ItemContainer>
            <ItemIcon>
              <EditNoteIcon />
            </ItemIcon>
            <Link
            style={{
                    textDecoration: "none",
                    padding: "2px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "black",
                  }}
              to="Edit_Expense/:id"
              className={location.pathname === "Edit_Expense/:id" ? "active" : ""}
            >
              Edit
            </Link>
            </ItemContainer>
              <ItemContainer>
                <ItemIcon>
                  <SummarizeIcon />
                </ItemIcon>
                <Link
                  style={{
                    textDecoration: "none",
                    padding: "1px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "black",
                  }}
                  onClick={handleKey}
                  to="/Report"
                  className={location.pathname === "/Report" ? "active" : ""}
                >
                  Print Report
                </Link>
              </ItemContainer>
            </FirstContainer>
            <SecondContainer>
              <ItemContainer>
                <ItemIcon>
                  <LogoutIcon />
                </ItemIcon>
                <Link
                  style={{
                    textDecoration: "none",
                    padding: "2px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "black",
                  }}
                  onClick={LocClear}
                >
                  Logout
                </Link>
              </ItemContainer>
            </SecondContainer>
          </Parent>
        )}
      </Wrapper>
    </Container>
  );
}

export default Sidebar;




            {/* <Link 
            style={{"textDecoration":"none"}}
            to = "/home" className= {location.pathname ==="/home" ? "active":""}>
            Home
            </Link>
        </ItemContainer>

        <ItemContainer>
            <ItemIcon>
              <DashboardIcon />
            </ItemIcon>
            <Link
            style={{"textDecoration":"none"}}
              to="/dashboard"
              className={location.pathname === "/dashboard" ? "active" : ""}
            >
              Dashboard
            </Link>
          </ItemContainer>
          <ItemContainer>
            <ItemIcon>
              <AddCardIcon />
            </ItemIcon>
            <Link
            style={{"textDecoration":"none"}}
              to="/Add-expense"
              className={location.pathname === "/Add-expense" ? "active" : ""}
            >
              Add Expence
            </Link>
          </ItemContainer>
          <ItemContainer>
            <ItemIcon>
              <HistoryIcon />
            </ItemIcon>
            <Link
            style={{"textDecoration":"none"}}
              to="/Expense-History"
              className={location.pathname === "/Expense-History" ? "active" : ""}
            >
              History
            </Link>
          </ItemContainer>
          <ItemContainer>
            <ItemIcon>
              <EditNoteIcon />
            </ItemIcon>
            <Link
            style={{"textDecoration":"none"}}
              to="/Edit-Expense"
              className={location.pathname === "/Edit-Expense" ? "active" : ""}
            >
              Edit
            </Link>
          </ItemContainer>
          <ItemContainer>
            <ItemIcon>
              <SummarizeIcon />
            </ItemIcon>
            <Link
            style={{"textDecoration":"none"}}
              to="/Report"
              className={location.pathname === "/Report" ? "active" : ""}
            >
              Report
            </Link>
            </ItemContainer>

        </FirstContainer>

        <SecondContainer>
          <ItemContainer>
            <ItemIcon>
              <LogoutIcon />
            </ItemIcon>
            
            <Link style={{"textDecoration":"none"}} >
            Logout</Link>
            </ItemContainer>
        </SecondContainer>
        </Parent>
        )}
        </Wrapper>
        </Container>
     );
export default Sidebar */}











// import userDp from '../images/userdp.png';

// const Container = styled.div`
//   height: 100vh;
//   width: 250px;
//   background: #f0f0f0;
// `;

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
// `;

// const UserContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const UserDp = styled.img`
//   width: 100px;
//   border-radius: 50%;
// `;

// const UserName = styled.div`
//   margin-top: 10px;
// `;

// const ItemContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 15px;
//   cursor: pointer;
// `;

// const ItemText = styled.span`
//   margin-left: 10px;
// `;

// const Sidebar = () => {
//   const location = useLocation();
//   // const history = useHistory();

//   const handleLogout = () => {
//     // Implement your logout logic here, for example, clearing user sessions.
//     // After logout, redirect to the login page.
//     // Example:
//     // clearUserSession();
//     // history.push('/login');
//   };

//   return (
//     <Container>
//       <Wrapper>
//         <UserContainer>
//           <UserDp src={userDp} alt="User" />
//           <UserName>Admin</UserName>
//         </UserContainer>

//         <ItemContainer>
//           <HomeIcon />
//           <Link to="/home" className={location.pathname === '/home' ? 'active' : ''}>
//             <ItemText>Home</ItemText>
//           </Link>
//         </ItemContainer>

//         <ItemContainer>
//           <DashboardIcon />
//           <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>
//             <ItemText>Dashboard</ItemText>
//           </Link>
//         </ItemContainer>

//         <ItemContainer>
//           <AddCardIcon />
//           <Link to="/Add-expense" className={location.pathname === '/Add-expense' ? 'active' : ''}>
//             <ItemText>Add Expence</ItemText>
//           </Link>
//         </ItemContainer>

//         <ItemContainer>
//           <HistoryIcon />
//           <Link to="/Expense-History" className={location.pathname === '/Expense-History' ? 'active' : ''}>
//             <ItemText>History</ItemText>
//           </Link>
//         </ItemContainer>

//         <ItemContainer>
//           <EditNoteIcon />
//           <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>
//             <ItemText>Edit</ItemText>
//           </Link>
//         </ItemContainer>

//         <ItemContainer>
//           <SummarizeIcon />
//           <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>
//             <ItemText>Report</ItemText>
//           </Link>
//         </ItemContainer>
        

//         <ItemContainer onClick={handleLogout}>
//           <LogoutIcon />
//           <ItemText>Logout</ItemText>
//         </ItemContainer>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Sidebar