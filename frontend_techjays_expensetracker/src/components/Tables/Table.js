
// import React from "react";
import './Table.css'
// function Table() {
//   return (
//     <div>
//       <h1>Daily Expence</h1>
//       <h2>
//         Total:<i class="fa-solid fa-dollar-sign icon"></i>
//       </h2>
//       <table class="table">
//         <thead>
//           <th>si no</th>
//           <th>Date Of Payment</th>
//           <th>Method of Payment</th>
//           <th> Paid to</th>
//           <th>Description</th>
//           <th>Amount paid</th>
//           <th>Running Total</th>
//           <th>Balance</th>
//         </thead>
//         <tbody>
//           <tr>
//             <td>1</td>
//             <td>21/2/23</td>
//             <td>upi</td>
//             <td>ashik</td>
//             <td>jnja</td>
//             <td>2000</td>
//             <td>1000000</td>
//             <td>1111</td>
//           </tr>
//           <tr>
//             <td>1</td>
//             <td>21/2/23</td>
//             <td>upi</td>
//             <td>ashik</td>
//             <td>jnja</td>
//             <td>2000</td>
//             <td>1000000</td>
//             <td>1111</td>
//           </tr>
//           <tr>
//             <td>1</td>
//             <td>21/2/23</td>
//             <td>upi</td>
//             <td>ashik</td>
//             <td>jnja</td>
//             <td>2000</td>
//             <td>1000000</td>
//             <td>1111</td>
//           </tr>
//           <tr>
//             <td>1</td>
//             <td>21/2/23</td>
//             <td>upi</td>
//             <td>ashik</td>
//             <td>jnja</td>
//             <td>2000</td>
//             <td>1000000</td>
//             <td>1111</td>
//           </tr>
//           <tr>
//             <td>1</td>
//             <td>21/2/23</td>
//             <td>upi</td>
//             <td>ashik</td>
//             <td>jnja</td>
//             <td>2000</td>
//             <td>1000000</td>
//             <td>1111</td>
//           </tr>
//           <tr>
//             <td>1</td>
//             <td>21/2/23</td>
//             <td>upi</td>
//             <td>ashik</td>
//             <td>jnja</td>
//             <td>2000</td>
//             <td>1000000</td>
//             <td>1111</td>
//           </tr>
//           <tr>
//             <td>1</td>
//             <td>21/2/23</td>
//             <td>upi</td>
//             <td>ashik</td>
//             <td>jnja</td>
//             <td>2000</td>
//             <td>1000000</td>
//             <td>1111</td>
//           </tr>
//           <tr>
//             <td>1</td>
//             <td>21/2/23</td>
//             <td>upi</td>
//             <td>ashik</td>
//             <td>jnja</td>
//             <td>2000</td>
//             <td>1000000</td>
//             <td>1111</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default Table;










// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import { Table } from '@mui/material';

// const Table = () => {
//     const [expenses, setExpenses] = useState([]);

//     useEffect(() => {
//         const fetchExpenses = async () => {
//             try {
//                 const response = await axios.get('http://127.0.0.1:8000/expense_tracker/expense-create/');
//                 setExpenses(response.data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchExpenses();
//     }, []);

//     return (
//         <div>
//             <h2>Daily Expenses</h2>
//             <ul>
//                 {expenses.map((expense) => (
//                     <li key={expense.id}>
//                         <strong>{expense.description}</strong> - ${expense.amount} ({expense.category}) - {expense.date}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Table;








import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

const ExpenseTable = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/expense_tracker/expense-create/');
                setExpenses(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchExpenses();
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Description</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {expenses.map((expense) => (
                        <TableRow key={expense.id}>
                            <TableCell>{expense.description}</TableCell>
                            <TableCell>${expense.amount}</TableCell>
                            <TableCell>{expense.category}</TableCell>
                            <TableCell>{expense.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ExpenseTable;