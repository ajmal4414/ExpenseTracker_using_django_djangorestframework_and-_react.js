import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import Dp from '../Images/Navbar/dp.jpg'
function DpView() {
 
    const Container=styled.div`
        width: 100%;
        height: 100%;
       
    `
    const Wrapper=styled.div`
          width: 100%;
        height: 100%;
        border: 35px solid pink;
        background-image: url("https://i0.wp.com/community.adobe.com/legacyfs/online/1174196_pozadie-animacia-Recovered2.gif");
        display: flex;
        align-items: center;
        justify-content: center;
    `
    const UserContainer=styled.div`
    min-width: 30%;
    height: 80%;

    `
   const DpContainer=styled.div`
    width: inherit;
    height: inherit;
   `
   const UserDp=styled.img`
    width: 100%;
    height: 100%;
   `
   const UserName=styled.h4`
    padding: 10px;
   `
   const EmailD=styled.h4`
     padding: 10px
   `
    const [User,setUser]=useState('')
    const [Email,setEmail]=useState('')
    useEffect(() => {
    setUser(localStorage.getItem('user'))
setEmail(localStorage.getItem('email'))
    }, []);
    
  return (
<Container>
    <Wrapper>
    <UserContainer>
              <DpContainer>
                <UserDp src={Dp} />
              </DpContainer>
              <UserName>Name  : {User}</UserName>
              <EmailD>EmailId : {Email}</EmailD>
              
            </UserContainer>
    </Wrapper>
</Container>
  )
}

export default DpView