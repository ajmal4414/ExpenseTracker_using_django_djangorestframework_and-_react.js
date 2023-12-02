import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// const Container = styled.div`
//   max-width: 400px;
//   margin: 0 auto;
//   padding: 20px;
//   border: 1px solid #d1d5db;
//   border-radius: 8px;
//   background-color: #f3f4f6;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// `;

// const Title = styled.h1`
//   text-align: center;
//   color: #374151;
//   margin-bottom: 16px;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const Label = styled.label`
//   margin-bottom: 4px;
//   color: #374151;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 8px;
//   margin-bottom: 12px;
//   outline: none;
//   border: 1px solid #d1d5db;
//   border-radius: 4px;
//   transition: border-color 0.3s;

//   &:focus {
//     border-color: #3b82f6;
//   }
// `;

// const ResetButton = styled.button`
//   background-color: #3b82f6;
//   color: #ffffff;
//   border: none;
//   border-radius: 4px;
//   padding: 10px;
//   font-weight: bold;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #2563eb;
//   }
// `;





const Container = styled.div`
  max-width: 300px; /* Adjusted max-width */
  margin: 0 auto;
  padding: 15px; /* Adjusted padding for a more compact form */
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background-color: #f3f4f6;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #374151;
  margin-bottom: 12px; /* Adjusted margin for better spacing */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 4px;
  color: #374151;
`;

const Input = styled.input`
  height:100%;
  width: 100%;
  padding: 8px;
  margin-bottom: 10px; /* Adjusted margin for better spacing */
  outline: none;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #3b82f6;
  }
`;

const ResetButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 8px; /* Adjusted padding for a more compact button */
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2563eb;
  }
`;


const handleClick=()=>{
  localStorage.removeItem("WE")
}
function PasswordReset() {
    const [email, setEmail] = useState('');
    const [resetSuccess, setResetSuccess] = useState(false);
    const [resetError, setResetError] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
      window.location.reload()
    };



  
    const handleResetPassword = async (e) => {
      e.preventDefault();
  
      try {
        // Use your specific endpoint for initiating password reset
        await axios.post("http://127.0.0.1:8000/account/password-reset/", {
          email,
        });
  
        setResetSuccess(true);
        setResetError('');
      } catch (error) {
        console.error(error);
        setResetSuccess(false);
  
        if (error.response && error.response.data.detail) {
          setResetError(error.response.data.detail);
        } else {
          setResetError('An error occurred. Please try again later.');
        }
      }
    };
  
//     return (
//       <Container>
//         <Title>Reset Password</Title>
//         {resetSuccess && <div>Password reset email sent. Check your inbox.</div>}
//         {resetError && <div>{resetError}</div>}
//         <form onSubmit={handleResetPassword} className='Password-reset-form'>
//         <div className='mb-4'>
//           <Label>Email</Label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={email}
//             onChange={handleEmailChange}
//           />
//           </div>
//           <ResetButton type="submit" onClick={handleClick}>Reset Password</ResetButton>
// {/* 
//           <Link to="/home"> {/* Assuming '/' is your home route */}
//           {/* <button onClick={handleClick}>Home</button> */}
//           {/* </Link> */} 
//         </form>

        
//       </Container>
//     );
//   }


return (
  <Container>
    <Title>Reset Password</Title>
    {resetSuccess && <div>Password reset email sent. Check your inbox.</div>}
    {resetError && <div>{resetError}</div>}
    <form onSubmit={handleResetPassword} className='Password-reset-form'>
    <div className='mb-4'>
      <Label>Email</Label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      </div>
      <ResetButton type="submit" onClick={handleClick}>Reset Password</ResetButton>
    </form>
  </Container>
);
}

  export default PasswordReset;