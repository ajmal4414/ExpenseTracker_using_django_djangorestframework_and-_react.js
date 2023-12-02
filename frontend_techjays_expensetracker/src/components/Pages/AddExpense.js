import React, { useState } from 'react';
import axios from 'axios';

const AddExpensePage = () => {
  const [expenseName, setExpenseName] = useState('');
  const [amountSpent, setAmountSpent] = useState('');
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10)); // Default to current date
  const [category, setCategory] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleExpenseSubmit = async (e) => {
    e.preventDefault();
    // Validation
    if (!amountSpent || isNaN(parseFloat(amountSpent))) {
      setError('Please enter a valid amount.');
      return;
    }
    // Additional date validation could be added here



    
    setLoading(true);

    // If all validations pass, proceed to Axios POST request
    try {
      const response = await axios.post('http://127.0.0.1:8000/expense_tracker/expense-create/', {
        description: expenseName,
        amount: parseFloat(amountSpent),
        date: date,
        category: category
      });
      if (response.status === 201) {
        setConfirmationMessage('Expense added successfully!');
        // Clear form fields after successful submission
        setExpenseName('');
        setAmountSpent('');
        setDate(new Date().toISOString().substr(0, 10));
        setCategory('');
        setError('');
      } else {
        // Handle error response from API
        setError('Failed to add expense. Please try again.');
      }
    } catch (error) {
      // Handle Axios error
      if (error.response) {
        setError('Failed to add expense. Please check your data and try again.');
      } else if (error.request) {
        setError('Failed to connect to the server. Please try again later.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
      
    } finally {
      setLoading(false);
    


    }
  };

  return (
    <div className="mx-auto max-w-md p-6 bg-white rounded shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Add Expense</h1>
      <form onSubmit={handleExpenseSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Expense Name"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
          className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
        />
        <input
          type="text"
          placeholder="Amount Spent"
          value={amountSpent}
          onChange={(e) => setAmountSpent(e.target.value)}
          className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transportation">Transportation</option>
          <option value="Entertainment">Entertainment</option>
          {/* Add more categories as needed */}
        </select>
        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded"
        >
          Add Expense
        </button>
      </form>
      {confirmationMessage && <p className="text-green-500 mt-2">{confirmationMessage}</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default AddExpensePage;
