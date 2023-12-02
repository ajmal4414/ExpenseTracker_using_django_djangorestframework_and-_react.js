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

function Sidebar() {

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


