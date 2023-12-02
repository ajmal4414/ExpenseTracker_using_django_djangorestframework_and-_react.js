
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
