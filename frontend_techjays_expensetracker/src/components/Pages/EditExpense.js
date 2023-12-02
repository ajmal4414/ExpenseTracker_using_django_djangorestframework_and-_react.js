// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const EditExpensePage = ({ expenseId }) => {
//   const [expense, setExpense] = useState({
//     description: '',
//     amount: 0,
//     date: '',
//     category: ''
//   });
//   const [confirmationMessage, setConfirmationMessage] = useState('');
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchExpense();
//   }, []);

//   const fetchExpense = async () => {
//     try {
//       const response = await axios.get(`http://127.0.0.1:8000/expense_tracker/expense-history/${expenseId}/`);
//       setExpense(response.data);
//     } catch (error) {
//       console.error('Failed to fetch expense:', error);
//       setError('Failed to fetch expense. Please try again.');
//     }
//   };

//   const handleUpdate = async () => {
//     try {
//       await axios.put(`http://127.0.0.1:8000/expense_tracker/expense-history/${expenseId}/`, expense);
//       setConfirmationMessage('Expense updated successfully!');
//     } catch (error) {
//       console.error('Failed to update expense:', error);
//       setError('Failed to update expense. Please try again.');
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setExpense({ ...expense, [name]: value });
//   };

//   return (
//     <div>
//       <h1>Edit Expense</h1>
//       <form onSubmit={(e) => e.preventDefault()}>
//         <input
//           type="text"
//           placeholder="Expense Name"
//           name="description"
//           value={expense.description}
//           onChange={handleChange}
//         />
//         <input
//           type="number"
//           placeholder="Amount Spent"
//           name="amount"
//           value={expense.amount}
//           onChange={handleChange}
//         />
//         <input
//           type="date"
//           name="date"
//           value={expense.date}
//           onChange={handleChange}
//         />
//         <select
//           name="category"
//           value={expense.category}
//           onChange={handleChange}
//         >
//           <option value="">Select Category</option>
//           <option value="Food">Food</option>
//           <option value="Transportation">Transportation</option>
//           <option value="Entertainment">Entertainment</option>
//           {/* Add more categories as needed */}
//         </select>
//         <button onClick={handleUpdate}>Update Expense</button>
//       </form>
//       {confirmationMessage && <p>{confirmationMessage}</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// };

// export default EditExpensePage;


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
//         `http://127.0.0.1:8000/expense_tracker/expense-edit/${expense.id}/`,
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

// const ExpenseEditPage = () => {
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
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ExpenseEditPage;



import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";


const StyledContainer = styled.div`
  max-width: 800px; /* Increased the max-width for better layout */
  margin: 0 auto;
  padding: 20px;
`;

const StyledHeader = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #3498db;
  }
`;

const StyledButton = styled.button`
  background-color: ${(props) => (props.primary ? "#3498db" : "#2ecc71")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: ${(props) => (props.primary ? "#2185d0" : "#28a745")};
  }
`;

const StyledTableContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
  margin-top: 20px; /* Added margin-top for separation */
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledTableHeader = styled.th`
  padding: 12px 8px;
  border: 1px solid #ddd;
  background-color: #f2f2f2;
`;

const StyledTableCell = styled.td`
  padding: 12px 8px;
  border: 1px solid #ddd;
  text-align: center;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #3498db;
  }
`;


const EditExpenseForm = ({ expense, onCancel, onUpdate }) => {
  const [editedExpense, setEditedExpense] = useState({
    description: expense.description,
    amount: expense.amount,
    date: expense.date,
    category: expense.category,
  });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }));
  };

  const handleEditSubmit = async () => {
    try {
      await axios.put(
        `http://127.0.0.1:8000/expense_tracker/expense-edit/${expense.id}/`,
        editedExpense
      );
      onUpdate();
    } catch (error) {
      console.error("Failed to update expense:", error);
    }
  };

  return (
    <StyledContainer>
      <StyledHeader> </StyledHeader>
      <form>
        <StyledInput
          type="text"
          name="description"
          value={editedExpense.description}
          onChange={handleEditChange}
          placeholder="Description"
        />
        <StyledInput
          type="number"
          name="amount"
          value={editedExpense.amount}
          onChange={handleEditChange}
          placeholder="Amount"
        />
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <StyledInput
            type="date"
            name="date"
            value={editedExpense.date}
            onChange={handleEditChange}
            placeholder="Date"
          />
          {/* <StyledInput
            type="text"
            name="category"
            value={editedExpense.category}
            onChange={handleEditChange}
            placeholder="Category"
          /> */}


          {/* edt categ */}

          <StyledSelect
            name="category"
            value={editedExpense.category}
            onChange={handleEditChange}
          >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Transportation">Transportation</option>
            <option value="Entertainment">Entertainment</option>
            {/* Add more categories as needed */}
          </StyledSelect>


        </div>
        <StyledButton primary onClick={handleEditSubmit}>
          Update
        </StyledButton>
        <StyledButton onClick={onCancel}>Cancel</StyledButton>
      </form>
    </StyledContainer>
  );
};

const ExpenseEditPage = () => {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [editExpense, setEditExpense] = useState(null);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/expense_tracker/expense-history/"
      );
      setExpenses(response.data);
      setFilteredExpenses(response.data);
    } catch (error) {
      console.error("Failed to fetch expenses:", error);
    }
  };

  const handleEditExpense = (expense) => {
    setEditExpense(expense);
    setFilteredExpenses([]); // Hide expense history when editing
  };

  const handleCancelEdit = () => {
    setEditExpense(null);
    fetchExpenses(); // Show expense history again after canceling edit
  };

  const handleUpdate = () => {
    setEditExpense(null);
    fetchExpenses(); // Show expense history again after updating
  };

  return (
    <StyledContainer>
      <StyledHeader>Edit Expense</StyledHeader>
      {editExpense ? (
        <EditExpenseForm
          expense={editExpense}
          onCancel={handleCancelEdit}
          onUpdate={handleUpdate}
        />
      ) : (
        <StyledTableContainer>
          <StyledTable>
            <thead>
              <tr>
                <StyledTableHeader>Description</StyledTableHeader>
                <StyledTableHeader>Amount</StyledTableHeader>
                <StyledTableHeader>Date</StyledTableHeader>
                <StyledTableHeader>Category</StyledTableHeader>
                <StyledTableHeader></StyledTableHeader>
              </tr>
            </thead>
            <tbody>
              {filteredExpenses.map((expense) => (
                <tr key={expense.id}>
                  <StyledTableCell>{expense.description}</StyledTableCell>
                  <StyledTableCell>{expense.amount}</StyledTableCell>
                  <StyledTableCell>{expense.date}</StyledTableCell>
                  <StyledTableCell>{expense.category}</StyledTableCell>
                  <StyledTableCell>
                    <StyledButton
                      primary
                      onClick={() => handleEditExpense(expense)}
                    >
                      Edit
                    </StyledButton>
                  </StyledTableCell>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </StyledTableContainer>
      )}
    </StyledContainer>
  );
};

export default ExpenseEditPage; 