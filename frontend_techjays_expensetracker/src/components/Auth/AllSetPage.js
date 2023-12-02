import React, { useEffect ,useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
function AllSetPage() {
  const Container = styled.div`
    width: 100%;
    background-image:url("https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D");
    ${'' /* background-image: url("https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9uZXklMjB0cmVlfGVufDB8fDB8fHww"); */}
    height: 100%;
    border-radius: 5%;
    background-repeat: no-repeat;
    background-size: cover;
  `;
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
  `;
  const SubWrapper = styled.div`
    display: flex;
    margin-left: 30%;
    margin-top: 10%;
    margin-left: 50%;
  `;
  const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 30px;
  `;
  const HeaddingContainer = styled.div`
    margin-bottom: 10px;
    font-size: 30px;
    font-weight: 600;
  `;
  const Headding = styled.div`
    ${'' /* color: white; */}
    color:black;
  `;
  const SubHeaddingContainer = styled.div`
    margin-bottom: 90px;
    font-size: 25px;
  `;
  const SubHeadding = styled.div`
    color: white;
  `;
  const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
    background-color: green;
    border-radius: 60%;
  `;
  const SubIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const navigate = useNavigate();
  const [User,setUser]=useState('')
  useEffect(() => {
    setUser(localStorage.getItem('user'))
  !token?navigate('/home'):navigate('/')
  }, []);
 
  const flashIn = () => {
    localStorage.removeItem("flash");
    navigate("/home");
  };
  const token=( localStorage.getItem("flash"));
  return (
    <>
      {token ? (
        <Container onMouseDownCapture={flashIn}>
          <Wrapper className="container">
            <SubWrapper className="container">
              <IconContainer>
                <SubIconContainer>
                  <CheckCircleIcon
                    style={{ fontSize: "100px", color: "white" }}
                  />
                </SubIconContainer>
              </IconContainer>
              <MainBox>
                <HeaddingContainer>
                  <Headding>Mr.{User}....Click to continue..</Headding>
                </HeaddingContainer>
                <SubHeaddingContainer>
                  <SubHeadding>
                    Hi there you are one of our greate customer Welcome....
                  </SubHeadding>
                </SubHeaddingContainer>
              </MainBox>
            </SubWrapper>
          </Wrapper>
        </Container>
      ) : (
        flashIn()
      )}
    </>
  );
}

export default AllSetPage;