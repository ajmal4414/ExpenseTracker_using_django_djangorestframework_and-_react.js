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






import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [FormData, setFormData] = useState({
    email: '',
    user_name: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/account/register/", FormData);
      console.log('Registration Successful:', response.data);
    } catch (error) {
      console.error('Registration Failed:', error);
      if (error.response && error.response.status === 400) {
        // Bad Request (validation error)
        setErrorMessage('Registration Failed: Please fill in all required fields.');
      } else {
        setErrorMessage('Registration Failed: An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded bg-gray-200 shadow-md">
      <h1 className="text-center text-gray-700">Signup</h1>
      {errorMessage && (
        <div className="text-red-500 text-center mb-2">{errorMessage}</div>
      )}
      <form onSubmit={handleSubmit}>

      <div className="mb-4">
          <label className="block font-bold">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded outline-none"
            name="email"
            value={FormData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div> 


        <div className="mb-4">
          <label className="block font-bold">user_name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded outline-none"
            name="user_name"
            value={FormData.user_name}
            onChange={handleChange}
            placeholder="user_name"
            required
          />
        </div>
      
        <div className="mb-4">
          <label className="block font-bold">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded outline-none"
            name="password"
            value={FormData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>

        {/* <div className="mb-4">
          <label className="block font-bold">Confirm Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded outline-none"
            name="confirmPassword"
            value={FormData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
          />
        </div> */}

        <div className="mb-4">
          <button className="bg-blue-500 text-white rounded px-4 py-2 font-bold cursor-pointer hover:bg-blue-700" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;