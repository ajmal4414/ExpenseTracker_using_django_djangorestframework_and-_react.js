// import React, { useState } from 'react'
// import './Login.css'
// import axios from 'axios';
// function Login() {

//     const[email,setEmail] =useState('');
//     const[password,setPassword]= useState('');


//     const handleEmailChange =(e) =>{
//         setEmail(e.target.value);
//     };

//     const handlePasswordChange =(e) =>{
//         setPassword(e.target.value);
//     };

//     console.log({email, password});


//     const handleLogin = async(e) =>{
//         e.preventDefault();
//        console.log("Logging in with email :",email,'and password:', password);
//        try {
//             const{data} = await axios.post("http://127.0.0.1:8000/api/token/",{
//                 email,
//                 password
//             })
//             console.log(data);
//        } catch (error) {
//         console.log(error)

//        }
//     };
    
//   return (
//     <div class="mx-auto max-w-md p-4 border border-gray-300 rounded bg-gray-200 shadow-md">
//     <h1 class="text-center text-gray-700 mb-4">Sign-in</h1>
//     {/* <div className="email-container"> */}
//     <form onSubmit={handleLogin} className='login-form'>
//     <div>
//     <label>Email</label>
//       <input className='' type="text"  class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none" placeholder="Email" value={email} onChange={handleEmailChange} />
//     </div>
//      <div > 
//     <label>Password</label>
//       <input type="password" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none" placeholder="Password" value={password} onChange={handlePasswordChange} />
//     </div>
//      <button class="bg-blue-500 text-white rounded px-4 py-2 font-bold cursor-pointer hover:bg-blue-700" onClick={handleLogin}>Login</button>
//       </form>
//     </div>
  
// );
// }


// export default Login


// orginal

// import React, { useState } from 'react';
// import axios from 'axios';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     console.log("Logging in with email:", email, 'and password:', password);
//     try {
//       const { data } = await axios.post("http://127.0.0.1:8000/api/token/", {
//         email,
//         password
//       });
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 border border-gray-300 rounded bg-gray-200 shadow-md">
//       <h1 className="text-center text-gray-700 mb-4">Sign-in</h1>
//       <form onSubmit={handleLogin} className='login-form'>
//         <div className="mb-4">
//           <label>Email</label>
//           <input
//             type="text"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
//             placeholder="Email"
//             value={email}
//             onChange={handleEmailChange}
//           />
//         </div>
//         <div className="mb-4">
//           <label>Password</label>
//           <input
//             type="password"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
//             placeholder="Password"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </div>
//         <button className="bg-blue-500 text-white rounded px-4 py-2 font-bold cursor-pointer hover:bg-blue-700" onClick={handleLogin}>Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;





import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://127.0.0.1:8000/account/login/", {
        email,
        password
      });
      console.log(data);
      setErrorMessage(''); // Clear any previous error message
      setSuccessMessage('Login Successful');
    } catch (error) {
      console.log(error);
      setSuccessMessage(''); // Clear any previous success message
  
      if (error.response && error.response.status === 401) {
        setErrorMessage('Login Failed: Invalid email or password. Please try again.');
      } else {
        setErrorMessage('Login Failed. An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded bg-gray-200 shadow-md">
      <h1 className="text-center text-gray-700 mb-4">Sign-in</h1>
      {successMessage && <div className="text-green-500 text-center mb-2">{successMessage}</div>}
      {errorMessage && <div className="text-red-500 text-center mb-2">{errorMessage}</div>}
      <form onSubmit={handleLogin} className='login-form'>
        <div className="mb-4">
          <label>Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            name='email'
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-4">
          <label>Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            name='password'
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button className="bg-blue-500 text-white rounded px-4 py-2 font-bold cursor-pointer hover:bg-blue-700" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default Login;
