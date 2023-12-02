// import React, { useState  } from 'react'
// // import React ,{state} from 'react'
// import './Signup.css';
// function Signup() {
//     const [FormData, setFormData] = useState({
//         username: '',
//         email: '',
//         password: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...FormData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//     };

//     return (
//         <div className="max-w-400 mx-auto p-20 border border-gray-300 rounded bg-gray-200 shadow-md">
//             <h1 className="text-center text-gray-333">Signup</h1>
//             <form onSubmit={handleSubmit}>
//             <div  className="block font-bold">
//             <label class="block font-bold">Username</label>
//                 <input
//                     type="text"
//                     className="w-full p-10 border border-gray-300 rounded outline-none"
//                     name="username"
                    
//                     value={FormData.username}
//                     onChange={handleChange}
//                     placeholder="Username"
//                 />
//                     </div>
//                     <div className="mb-20">
//                 <label className="block font-bold">>Email</label>
//                 <input
//                     type="text"
//                     className="w-full p-10 border border-gray-300 rounded outline-none"
//                     name="email"
//                     value={FormData.email}
//                     onChange={handleChange}
//                     placeholder="Email"
//                 />
//                     </div>
//                     <div className="mb-20">
//                 <label className="block font-bold">Password</label>
//                 <input
//                     type="password"
//                     className="w-full p-10 border border-gray-300 rounded outline-none"
//                     name="password"
//                     value={FormData.password}
//                     onChange={handleChange}
//                     placeholder="Password"
//                 />
//                     </div>
//                     <div className="mb-20">
//                 <button className="bg-blue-500 text-white rounded p-10 font-bold cursor-pointer hover:bg-blue-700" type="submit">Submit</button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default Signup;







// import React, { useState } from 'react';
// import axios from 'axios';

// function Signup() {
//   const [FormData, setFormData] = useState({
//     email: '',
//     username: '',
//     first_name: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...FormData, [name]: value });
//   };

//   const handleSubmit =async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://127.0.0.1:8000/account/register/", FormData);
//       console.log('Registration Successful:',response.data);

//     } catch (error) {
//       console.error('Registration Failed:', error);
//     }
//   };



  

//   return (
//     <div className="max-w-md mx-auto p-4 border border-gray-300 rounded bg-gray-200 shadow-md">
//       <h1 className="text-center text-gray-700">Signup</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block font-bold">Username</label>
//           <input
//             type="text"
//             className="w-full px-3 py-2 border border-gray-300 rounded outline-none"
//             name="username"
//             value={FormData.username}
//             onChange={handleChange}
//             placeholder="Username"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block font-bold">Email</label>
//           <input
//             type="text"
//             className="w-full px-3 py-2 border border-gray-300 rounded outline-none"
//             name="email"
//             value={FormData.email}
//             onChange={handleChange}
//             placeholder="Email"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block font-bold">Password</label>
//           <input
//             type="password"
//             className="w-full px-3 py-2 border border-gray-300 rounded outline-none"
//             name="password"
//             value={FormData.password}
//             onChange={handleChange}
//             placeholder="Password"
//           />
//         </div>
//         <div className="mb-4">
//           <button className="bg-blue-500 text-white rounded px-4 py-2 font-bold cursor-pointer hover:bg-blue-700" type="submit">
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Signup;



// orig


// import React, { useState } from 'react';
// import axios from 'axios';

// function Signup() {
//   const [FormData, setFormData] = useState({
//     email: '',
//     user_name: '',
//     password: '',
//   });
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...FormData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://127.0.0.1:8000/account/register/", FormData);
//       console.log('Registration Successful:', response.data);
//     } catch (error) {
//       console.error('Registration Failed:', error);
//       if (error.response && error.response.status === 400) {
//         // Bad Request (validation error)
//         setErrorMessage('Registration Failed: Please fill in all required fields.');
//       } else {
//         setErrorMessage('Registration Failed: An error occurred. Please try again later.');
//       }
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 border border-gray-300 rounded bg-gray-200 shadow-md">
//       <h1 className="text-center text-gray-700">Signup</h1>
//       {errorMessage && (
//         <div className="text-red-500 text-center mb-2">{errorMessage}</div>
//       )}
//       <form onSubmit={handleSubmit}>

//       <div className="mb-4">
//           <label className="block font-bold">Email</label>
//           <input
//             type="email"
//             className="w-full px-3 py-2 border border-gray-300 rounded outline-none"
//             name="email"
//             value={FormData.email}
//             onChange={handleChange}
//             placeholder="Email"
//             required
//           />
//         </div> 


//         <div className="mb-4">
//           <label className="block font-bold">user_name</label>
//           <input
//             type="text"
//             className="w-full px-3 py-2 border border-gray-300 rounded outline-none"
//             name="user_name"
//             value={FormData.user_name}
//             onChange={handleChange}
//             placeholder="user_name"
//             required
//           />
//         </div>
      
//         <div className="mb-4">
//           <label className="block font-bold">Password</label>
//           <input
//             type="password"
//             className="w-full px-3 py-2 border border-gray-300 rounded outline-none"
//             name="password"
//             value={FormData.password}
//             onChange={handleChange}
//             placeholder="Password"
//             required
//           />
//         </div>
// {/* not needed */}
//         {/* <div className="mb-4">
//           <label className="block font-bold">Confirm Password</label>
//           <input
//             type="password"
//             className="w-full px-3 py-2 border border-gray-300 rounded outline-none"
//             name="confirmPassword"
//             value={FormData.confirmPassword}
//             onChange={handleChange}
//             placeholder="Confirm Password"
//             required
//           />
//         </div> */}

//         <div className="mb-4">
//           <button className="bg-blue-500 text-white rounded px-4 py-2 font-bold cursor-pointer hover:bg-blue-700" type="submit">
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import axios from 'axios';

// function Signup() {
//   const [FormData, setFormData] = useState({
//     email: '',
//     user_name: '',
//     password: '',
//   });
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...FormData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://127.0.0.1:8000/account/register/", FormData);
//       console.log('Registration Successful:', response.data);
//     } catch (error) {
//       console.error('Registration Failed:', error);
//       if (error.response && error.response.status === 400) {
//         // Bad Request (validation error)
//         setErrorMessage('Registration Failed: Please fill in all required fields.');
//       } else {
//         setErrorMessage('Registration Failed: An error occurred. Please try again later.');
//       }
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-lg">
//       <h1 className="text-3xl font-semibold text-center text-gray-700">Signup</h1>
//       {errorMessage && (
//         <div className="text-red-500 text-center mb-4">{errorMessage}</div>
//       )}
//       <form onSubmit={handleSubmit}>

//         <div className="mb-4">
//           <label className="block text-sm font-semibold text-gray-600">Email</label>
//           <input
//             type="email"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//             name="email"
//             value={FormData.email}
//             onChange={handleChange}
//             placeholder="Email"
//             required
//           />
//         </div> 

//         <div className="mb-4">
//           <label className="block text-sm font-semibold text-gray-600">User Name</label>
//           <input
//             type="text"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//             name="user_name"
//             value={FormData.user_name}
//             onChange={handleChange}
//             placeholder="User Name"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-semibold text-gray-600">Password</label>
//           <input
//             type="password"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//             name="password"
//             value={FormData.password}
//             onChange={handleChange}
//             placeholder="Password"
//             required
//           />
//         </div>

//         <div className="mb-6">
//           <button className="w-full bg-blue-500 text-white rounded-md px-4 py-2 font-semibold hover:bg-blue-700 focus:outline-none focus:bg-blue-700" type="submit">
//             Sign Up
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Signup;




import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Signup.css";




function Signup() {
  const [ email, setEmail] = useState("");
  const [user_name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const postData = () => {
    // we need to valclassNameate the email using ajax javascript
    if (
      !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
        email
      )
    ) {
      alert("complete the inout fileds as per the valid path");
      return;
    }
    fetch("	http://127.0.0.1:8000/register/", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        user_name,
        password,
        
      }),
    })
      .then((res) =>res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } 
        handleClick()
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleClick=()=>{
   localStorage.clear()
    window.location.reload();

  }

  return (
    <div class="container">
      <div className="secondContainer">
        <div class="wrapper">
          <div className="HearderContainer">
            {/* <img src={GoogleIcon} /> */}
          </div>
          <div className="hedding1">
            <h4>Sign up</h4>
            <h6>to continue to MoneyTracker</h6>
          </div>

          <input
            className="input1"
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            className="input1"
            type="text"
            placeholder="user_name"
            value={user_name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
       
          <input
            className="input1"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="buttonContainer">
            <button class="button-signup" onClick={() => postData()}>
              Sign up
            </button>
            </div>
        {/* <br></br> */}
          <h3>
          
            <Link 
              to="/login"
              onClick={handleClick}
              style={{ fontSize: "15px", 
               textDecoration: "none",
               display: "inline-block",
               padding: "11px",
              //  margin:"65",
               lineHeight: "1.2",
               transition: "transform 0.2s ease" ,
               verticalAlign: "middle",}}
            // >
             className="link-hover">
              Already have account? Login
            </Link>

          </h3>
          {/* </div> */}
          </div>
        </div>
      </div>
    // </div>
  );
}

export default Signup;