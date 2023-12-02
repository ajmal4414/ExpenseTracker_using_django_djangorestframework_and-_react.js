// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ExpenseHistoryPage = () => {
//   const [expenses, setExpenses] = useState([]);
//   const [filteredExpenses, setFilteredExpenses] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');

//   useEffect(() => {
//     fetchExpenses();
//   }, []);

//   const fetchExpenses = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/expense_tracker/expense-history/');
//       setExpenses(response.data);
//       setFilteredExpenses(response.data); // Initially set filtered expenses to all expenses
//     } catch (error) {
//       console.error('Failed to fetch expenses:', error);
//     }
//   };

//   const handleSearch = (searchText) => {
//     setSearchTerm(searchText);
//     filterExpenses(searchText, startDate, endDate);
//   };

//   const handleDateFilter = (start, end) => {
//     setStartDate(start);
//     setEndDate(end);
//     filterExpenses(searchTerm, start, end);
//   };

//   const filterExpenses = (search, start, end) => {
//     let filtered = expenses;

//     if (search) {
//       filtered = filtered.filter(expense =>
//         expense.description.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     if (start && end) {
//       filtered = filtered.filter(expense =>
//         expense.date >= start && expense.date <= end
//       );
//     }

//     setFilteredExpenses(filtered);
//   };

//   const handleDelete = async (expenseId) => {
//     try {
//       await axios.delete(`http://127.0.0.1:8000/expense_tracker/expense-delete/${expenseId}/`);
//       fetchExpenses();
//     } catch (error) {
//       console.error('Failed to delete expense:', error);
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Expense History</h1>
//       <input
//         type="text"
//         placeholder="Search Expense"
//         value={searchTerm}
//         onChange={(e) => handleSearch(e.target.value)}
//         className="w-full mb-4 p-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
//       />
//       <div className="flex mb-4">
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => handleDateFilter(e.target.value, endDate)}
//           className="w-1/2 mr-2 p-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
//         />
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => handleDateFilter(startDate, e.target.value)}
//           className="w-1/2 ml-2 p-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
//         />
//       </div>
//       <ul>
//         {filteredExpenses.map(expense => (
//           <li key={expense.id} className="mb-4 p-4 bg-white shadow-md rounded">
//             <div className="text-lg font-semibold">{expense.description}</div>
//             <div className="text-gray-600">Amount: {expense.amount}</div>
//             <div className="text-gray-600">Date: {expense.date}</div>
//             <div className="text-gray-600">Category: {expense.category}</div>
//             <button onClick={() => handleDelete(expense.id)} className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md">
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ExpenseHistoryPage;



// edited



import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// import Table from '../Tables/Table';
import styled from "styled-components";


const StyledTableContainer = styled.div`
 max-height: 400px;
  overflow-y: auto;
  margin-top: 20px; /* Added margin-top for separation */
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledDeleteButton = styled.button`
  background-color: #e74c3c; /* Red color */
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c0392b; /* Darker red on hover */
  }
`;
const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color:#c0392b;
  }
`;


const ExpenseHistoryPage = () => {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/expense_tracker/expense-history/"
      );
      setExpenses(response.data);
      setFilteredExpenses(response.data); // Initially set filtered expenses to all expenses
    } catch (error) {
      console.error("Failed to fetch expenses:", error);
    }
  };

  const handleSearch = (searchText) => {
    setSearchTerm(searchText);
    filterExpenses(searchText, startDate, endDate);
  };

  const handleDateFilter = (start, end) => {
    setStartDate(start);
    setEndDate(end);
    filterExpenses(searchTerm, start, end);
  };

  const filterExpenses = (search, start, end) => {
    let filtered = expenses;

    if (search) {
      filtered = filtered.filter((expense) =>
        expense.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (start && end) {
      filtered = filtered.filter(
        (expense) => expense.date >= start && expense.date <= end
      );
    }

    setFilteredExpenses(filtered);
  };

  const handleDelete = async (expenseId) => {
    try {
      await axios.delete(
        `http://127.0.0.1:8000/expense_tracker/expense-delete/${expenseId}/`
      );
      fetchExpenses();
    } catch (error) {
      console.error("Failed to delete expense:", error);
    }
  };

//   return (
//     <div className="max-w-3xl mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4 text-center">Expense History</h1>
//       <input
//         type="text"
//         placeholder="Search Expense"
//         value={searchTerm}
//         onChange={(e) => handleSearch(e.target.value)}
//         className="w-full mb-4 p-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
//       />
//       <div className="flex mb-4">
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => handleDateFilter(e.target.value, endDate)}
//           className="w-1/2 mr-2 p-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
//         />
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => handleDateFilter(startDate, e.target.value)}
//           className="w-1/2 ml-2 p-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
//         />
//       </div>
//       <div className="overflow-x-auto">
//         <table className="w-full table-auto">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="py-2 px-4 border">Description</th>
//               <th className="py-2 px-4 border">Amount</th>
//               <th className="py-2 px-4 border">Date</th>
//               <th className="py-2 px-4 border">Category</th>
//               <th className="py-2 px-4 border"></th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredExpenses.map((expense) => (
//               <tr
//                 key={expense.id}
//                 className="bg-white hover:bg-gray-100 transition duration-300"
//               >
//                 <td className="py-2 px-4 border">{expense.description}</td>
//                 <td className="py-2 px-4 border text-right">
//                   {expense.amount}
//                 </td>
//                 <td className="py-2 px-4 border">{expense.date}</td>
//                 <td className="py-2 px-4 border">{expense.category}</td>
//                 <td className="py-2 px-4 border">
//                   <button
//                     onClick={() => handleDelete(expense.id)}
//                     className="bg-red-500 text-white px-4 py-2 rounded-md"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ExpenseHistoryPage

return (
  <StyledTableContainer>
    <h1 className="text-3xl font-bold mb-4 text-center">Expense History</h1>
    {/* ... (unchanged code) */}
    <div className="overflow-x-auto">
      <StyledTable>
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">Description</th>
            <th className="py-2 px-4 border">Amount</th>
            <th className="py-2 px-4 border">Date</th>
            <th className="py-2 px-4 border">Category</th>
            <th className="py-2 px-4 border"></th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map((expense) => (
            <tr
              key={expense.id}
              className="bg-white hover:bg-gray-100 transition duration-300"
            >
              <td className="py-2 px-4 border">{expense.description}</td>
              <td className="py-2 px-4 border text-right">
                {expense.amount}
              </td>
              <td className="py-2 px-4 border">{expense.date}</td>
              <td className="py-2 px-4 border">{expense.category}</td>
              <td className="py-2 px-4 border">
              <StyledDeleteButton
                  onClick={() => handleDelete(expense.id)}
                  // className="bg-red-500 text-white px-4 py-2 rounded-md"
                >
                  Delete
                  </StyledDeleteButton>
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </div>
  </StyledTableContainer>
);
};

export default ExpenseHistoryPage;





// 21

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const EditExpenseForm = ({ expense, onCancel, onUpdate }) => {
//   const [editedExpense, setEditedExpense] = useState({
//     description: expense.description,
//     amount: expense.amount,
//     date: expense.date,
//     category: expense.category,
//   });

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditedExpense((prevExpense) => ({
//       ...prevExpense,
//       [name]: value,
//     }));
//   };

//   const handleEditSubmit = async () => {
//     try {
//       await axios.put(
//         `http://127.0.0.1:8000/expense_tracker/expense-update/${expense.id}/`,
//         editedExpense
//       );
//       onUpdate();
//     } catch (error) {
//       console.error("Failed to update expense:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Edit Expense</h2>
//       <form>
//         <label>Description:</label>
//         <input
//           type="text"
//           name="description"
//           value={editedExpense.description}
//           onChange={handleEditChange}
//         />
//         <label>Amount:</label>
//         <input
//           type="number"
//           name="amount"
//           value={editedExpense.amount}
//           onChange={handleEditChange}
//         />
//         <label>Date:</label>
//         <input
//           type="date"
//           name="date"
//           value={editedExpense.date}
//           onChange={handleEditChange}
//         />
//         <label>Category:</label>
//         <input
//           type="text"
//           name="category"
//           value={editedExpense.category}
//           onChange={handleEditChange}
//         />
//         <button type="button" onClick={handleEditSubmit}>
//           Update
//         </button>
//         <button type="button" onClick={onCancel}>
//           Cancel
//         </button>
//       </form>
//     </div>
//   );
// };

// const ExpenseHistoryPage = () => {
//   const [expenses, setExpenses] = useState([]);
//   const [filteredExpenses, setFilteredExpenses] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [editExpense, setEditExpense] = useState(null);

//   useEffect(() => {
//     fetchExpenses();
//   }, []);

//   const fetchExpenses = async () => {
//     try {
//       const response = await axios.get(
//         "http://127.0.0.1:8000/expense_tracker/expense-history/"
//       );
//       setExpenses(response.data);
//       setFilteredExpenses(response.data);
//     } catch (error) {
//       console.error("Failed to fetch expenses:", error);
//     }
//   };

//   const handleSearch = (searchText) => {
//     setSearchTerm(searchText);
//     filterExpenses(searchText, startDate, endDate);
//   };

//   const handleDateFilter = (start, end) => {
//     setStartDate(start);
//     setEndDate(end);
//     filterExpenses(searchTerm, start, end);
//   };

//   const filterExpenses = (search, start, end) => {
//     let filtered = expenses;

//     if (search) {
//       filtered = filtered.filter((expense) =>
//         expense.description.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     if (start && end) {
//       filtered = filtered.filter(
//         (expense) => expense.date >= start && expense.date <= end
//       );
//     }

//     setFilteredExpenses(filtered);
//   };

//   const handleDelete = async (expenseId) => {
//     try {
//       await axios.delete(
//         `http://127.0.0.1:8000/expense_tracker/expense-delete/${expenseId}/`
//       );
//       fetchExpenses();
//     } catch (error) {
//       console.error("Failed to delete expense:", error);
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4 text-center">Expense History</h1>
//       <input
//         type="text"
//         placeholder="Search Expense"
//         value={searchTerm}
//         onChange={(e) => handleSearch(e.target.value)}
//         className="w-full mb-4 p-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
//       />
//       <div className="flex mb-4">
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => handleDateFilter(e.target.value, endDate)}
//           className="w-1/2 mr-2 p-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
//         />
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => handleDateFilter(startDate, e.target.value)}
//           className="w-1/2 ml-2 p-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
//         />
//       </div>
//       {editExpense && (
//         <EditExpenseForm
//           expense={editExpense}
//           onCancel={() => setEditExpense(null)}
//           onUpdate={() => {
//             setEditExpense(null);
//             fetchExpenses();
//           }}
//         />
//       )}
//       <div className="overflow-x-auto">
//         <table className="w-full table-auto">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="py-2 px-4 border">Description</th>
//               <th className="py-2 px-4 border">Amount</th>
//               <th className="py-2 px-4 border">Date</th>
//               <th className="py-2 px-4 border">Category</th>
//               <th className="py-2 px-4 border"></th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredExpenses.map((expense) => (
//               <tr
//                 key={expense.id}
//                 className="bg-white hover:bg-gray-100 transition duration-300"
//               >
//                 <td className="py-2 px-4 border">{expense.description}</td>
//                 <td className="py-2 px-4 border text-right">
//                   {expense.amount}
//                 </td>
//                 <td className="py-2 px-4 border">{expense.date}</td>
//                 <td className="py-2 px-4 border">{expense.category}</td>
//                 <td className="py-2 px-4 border">
//                   <button
//                     onClick={() => setEditExpense(expense)}
//                     className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(expense.id)}
//                     className="bg-red-500 text-white px-4 py-2 rounded-md"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ExpenseHistoryPage;