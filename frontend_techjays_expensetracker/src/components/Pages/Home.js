
import React,{useEffect,useState} from "react";
import styled from "styled-components";
import GoogleChart from "../../components/Charts/GoogleBarChart";
import PaymentsIcon from '@mui/icons-material/Payments';
// import expenseReducer from '../components/pages/Store/expeneReducer;'
// import expenseReducer from '../Store/expenseReducer';


// function Home() {
//     const Container = styled.div`
//       width: 100%;
//       height: 80vh;
  
//     `;
//     const Wrapper = styled.div`
//           width: 100%;
//           height: 80vh;
//     `;
    
//     const MainBox=styled.div`
//        width: 100%;
//       height: inherit;
//       display: grid;
//       grid-template-rows: 50% 50%;
//     `
//     const FirstContainer = styled.div`
//       background-color:var( --color-info-dark);
//       width: 100%;
//       height:100% ;
//     `;
//     // const SecondContainer = styled.div`
//     //   height:100%;
//     //   display: flex;
//     //   justify-content: center;
//     //   align-items: center;
//     //   background-color:var( --color-info-dark);
    
      
//     // `;



//     const SecondContainer = styled.div`
//     height: 100%;
//     display: flex;
//     flex-direction: column; /* Adjusted to column layout */
//     justify-content: flex-start; /* Moved content to the top */
//     align-items: center;
//     background-color: var(--color-info-dark);
//     margin-top: 10px; /* Adjusted margin-top to move slightly to the top */
//   `;


//     const CardContainer=styled.div`
//     width: 100%;
//       display :flex;
//       height: 100%;
//       justify-content: center;
//       align-items: center;
//     `
//     const Card=styled.div`
//   width: 100%;
//   padding: 20px;
//   height: inherit;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//     `
//     const CardContainer1=styled.div`
//       background-color: var( --color-background);
//       flex:1;
     
//       justify-content: center;
//       align-items: center;
//       border-radius:10% ;
//       box-shadow: 5px 5px 5px 5px gray;
//     `
//     const CardContainer2=styled.div`
//     flex: 1;
//     background-color: var( --color-background);
//     justify-content: center;
//       align-items: center;
//       margin: 10px;
//       border-radius:10% ;
//       box-shadow: 5px 5px 5px 5px gray;
  
//     `
//     const CardContainer3=styled.div`
//       flex: 1;
//       background-color: var( --color-background);
//       justify-content: center;
//       align-items: center;
//       border-radius:10% ;
//       box-shadow: 5px 5px 5px 5px gray;
//     `
//     const Icon=styled.div`
  
   
  
//     `
//     const IconDesc=styled.div`
      
//     `
//     return (
//       <Container>
//         <Wrapper>
//           <MainBox>
//           <FirstContainer>
//             <CardContainer>
//               <Card>
//               <CardContainer1>
//                 <Icon>
//                   <PaymentsIcon style={{ "fontSize":"4rem",  "color": "var( --color-green)"}}/><br/>
//                    $ 3000
//                   </Icon>
//                   <IconDesc>Expence</IconDesc> 
//               </CardContainer1>
//               <CardContainer2>
//               <Icon>
//               <PaymentsIcon style={{ "fontSize":"4rem"}}/>
//                   </Icon>
//                   <IconDesc></IconDesc> 
//               </CardContainer2>
//               <CardContainer3>
//               <Icon>
//               <PaymentsIcon style={{ "fontSize":"4rem"}}/>
//                   </Icon>
//                   <IconDesc></IconDesc> 
//               </CardContainer3>
//               </Card>
//             </CardContainer>
//           </FirstContainer>
//           <SecondContainer>
//           <GoogleChart/>
//           </SecondContainer>
//           </MainBox>
//         </Wrapper>
//       </Container>
//     );
//   }
  
//   export default Home;



function Home() {

//   const Container = styled.div`
//     width: 100%;
//     height: 80vh;
//   `;
//   const Wrapper = styled.div`
//     width: 100%;
//     height: 80vh;
//   `;
//   const MainBox = styled.div`
//     width: 100%;
//     height: inherit;
//     display: grid;
//     grid-template-rows: 50% 50%;
//     border-radius: 20px;
//     text-align: center;
//   `;
//   const FirstContainer = styled.div`
//     background-color: lightblue;
//     width: 100%;
//     height: 100%;
//   `;
//   const SecondContainer = styled.div`
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     background-color: lightblue;
//     padding-bottom: 10%;
//   `;
//   const CardContainer = styled.div`
//     width: 100%;
//     display: flex;
//     height: 100%;
//     justify-content: center;
//     align-items: center;
//   `;
//   const Card = styled.div`
//     width: 100%;
//     padding: 20px;
//     height: inherit;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin-bottom: 100px;
//   `;
//   const CardContainer1 = styled.div`
//     background-image: linear-gradient(to right, #dabed0, white 80%);
//     flex: 1;

//     justify-content: center;
//     align-items: center;
//     border-radius: 10%;
//     box-shadow: 5px 5px 5px 5px gray;
//     text-align: center;
//   `;
//   const CardContainer2 = styled.div`
//     background-image: linear-gradient(to right, #dabed0, white 80%);
//     text-align: center;
//     flex: 1;
//     background-color: var(--color-background);
//     justify-content: center;
//     align-items: center;
//     margin: 10px;
//     border-radius: 10%;
//     box-shadow: 5px 5px 5px 5px gray;
//     text-align: center;
//   `;
//   const CardContainer3 = styled.div`
//     background-image: linear-gradient(to right, #dabed0, white 80%);
//     text-align: center;
//     flex: 1;
//     background-color: var(--color-background);
//     justify-content: center;
//     align-items: center;
//     border-radius: 10%;
//     box-shadow: 5px 5px 5px 5px gray;
//   `;
//   const Icon = styled.div``;
//   const IconDesc = styled.div``;
//   const LapContainer = styled.div`
//     background-color: white;
//     width: 50%;
//     height: fit-content;
//     border-radius: 20px;
//     margin-top: 40px;
//   `;

//   const LapScreen = styled.div`
//   margin: 5%;
//   top: 4px;
// `;
// const LapBase1 = styled.div`
//   width: 55%;
//   height: 20px;
//   padding: 10px;
//   border-radius: 8px;
//   display: flex;
//   background-color: white;
//   justify-content: center;
//   align-items: center;
//   color: white;
// `;
// const LapBase2 = styled.div`
//   width: 55%;
//   height: 5px;
//   margin-top:22;
//   padding: 30px;
//   border-radius: 8px;
//   display: flex;
//   background-color: white;
//   justify-content: center;
//   align-items: center;
// `;
  

const Container = styled.div`
  width: 100%;
  height: 50vh;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 50vh;
`;

const MainBox = styled.div`
  width: 100%;
  height: inherit;
  display: grid;
  ${'' /* grid-template-rows: 1fr 1fr; */}
  gap: 0px; /* Added gap between grid rows */
  border-radius: 20px;
  text-align: center;
`;

const FirstContainer = styled.div`
  background-image: url("https://thumbs.dreamstime.com/b/poker-prints-us-dollar-american-money-isolated-white-cash-flying-hundred-dollars-background-194776268.jpg"); */
  background-color: lightwhite;
  width: 100%;
  height: 80%;
  ${'' /* display: flex; */}
  display:fit-content;
  justify-content: center;
  align-items: center;
`;

const SecondContainer = styled.div`
  width:100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
  padding-bottom: 5%;
  background-image: url("https://media.istockphoto.com/id/1303339829/photo/businessman-counting-hundreds-of-dollars-at-his-table.webp?b=1&s=170667a&w=0&k=20&c=dDoXszTkkyLLlWvU3ijdJj4KnewFdoMlzgPRdn3kYzY=");
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 20%;
  padding: 20px;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: -900px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardContainer1 = styled.div`
  background-color: #ffffff;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: -10px;
`;

const CardContainer2 = styled.div`
  background-color: #ffffff;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardContainer3 = styled.div`
  background-color: #ffffff;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Icon = styled.div``;

const IconDesc = styled.div``;

const LapContainer = styled.div`
  background-color: #ffffff;
  width: 60%;
  height: fit-content;
  border-radius: 20px;
  margin-top: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const LapScreen = styled.div`
  margin: 5%;
  top: 4px;
`;

const LapBase1 = styled.div`
  width: 55%;
  height: 20px;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  color: #000000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const LapBase2 = styled.div`
  width: 55%;
  height: 5px;
  margin-top: 22px;
  padding: 30px;
  border-radius: 8px;
  display: flex;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

 
// const [User,setUser]=useState('')
// useEffect(() => {
// setUser(localStorage.getItem('user'))
// }, [])


//   return (
//     <Container>
//       <Wrapper>
//         <MainBox>
//           <FirstContainer>
//             <h2 style={{ margin: "0px", fontSize: "40px" }}>
//               Welcome User....
//             </h2>
//             <CardContainer>
//               <Card>
//                 <CardContainer1>
//                   <Icon>
//                     <PaymentsIcon
//                       style={{ fontSize: "4rem", color: "var( --color-green)" }}
//                     />
//                     <br />$ 30000
//                   </Icon>
//                   <IconDesc>Salary</IconDesc>
//                 </CardContainer1>
//                 <CardContainer2>
//                   <Icon>
//                     <PaymentsIcon
//                       style={{ fontSize: "4rem", color: "var( --color-green)" }}
//                     />
//                   </Icon>
//                   <IconDesc>
//                     {" "}
//                     $4000
//                     <br />
//                     Expence
//                   </IconDesc>
//                 </CardContainer2>
//                 <CardContainer3>
//                   <Icon>
//                     <PaymentsIcon
//                       style={{ fontSize: "4rem", color: "var( --color-green)" }}
//                     />
//                   </Icon>
//                   <IconDesc>
//                     $24000
//                     <br />
//                     Balance
//                   </IconDesc>
//                 </CardContainer3>
//               </Card>
//             </CardContainer>
//           </FirstContainer>
//           <SecondContainer>
//             <LapContainer>
//               <LapScreen>
//                 <GoogleChart />
//               </LapScreen>
//             </LapContainer>
//             <LapBase1></LapBase1>
//             <LapBase2>
//               “Do not save what is left after spending, but spend what is left
//               after saving”. – Warren Buffett
//             </LapBase2>
//           </SecondContainer>
//         </MainBox>
//       </Wrapper>
//     </Container>
//   );
// }

// export default Home;

const [User,setUser]=useState('')
useEffect(() => {
setUser(localStorage.getItem('user'))
}, [])
  return (
    <Container>
      <Wrapper>
        <MainBox>
          <FirstContainer>
          <h2
              style={{
                // margin: "0px",
                // fontSize: "25px",
                // padding: "5px",
                // backgroundColor:"white",
                margin: "10px",  // Adjusted margin
              fontSize: "35px",  // Adjusted font size
              padding: "10px",  // Adjusted padding
                backgroundColor: "lightwhite",
                textAlign:"center",
                width:"fit-content",
                // marginLeft:"45%"
                marginLeft: "36%",  // Centered horizontally
                marginRight: "auto",  
              }}
            >
              Welcome {User}..
            </h2>
            <CardContainer>
              <Card>
                <CardContainer1>
                  <Icon>
                    {/* <PaymentsIcon /> */}
                  </Icon>
                  {/* <IconDesc>$3000</IconDesc> */}
                </CardContainer1>
                <CardContainer2>
                  <Icon>
                    {/* <PaymentsIcon /> */}
                  </Icon>
                  {/* <IconDesc></IconDesc> */}
                </CardContainer2>
                <CardContainer3>
                  <Icon>
                    {/* <PaymentsIcon /> */}
                  </Icon>
                  <IconDesc></IconDesc>
                </CardContainer3>
              </Card>
            </CardContainer>
          </FirstContainer>
          <SecondContainer>
          <LapContainer>
              <LapScreen>
            <GoogleChart />
            </LapScreen>
            </LapContainer>
            <LapBase2>
              “Do not save what is left after spending, but spend what is left
              after saving”. – Warren Buffett
            </LapBase2>
          </SecondContainer>
        </MainBox>
      </Wrapper>
    </Container>
  );
}

export default Home;
