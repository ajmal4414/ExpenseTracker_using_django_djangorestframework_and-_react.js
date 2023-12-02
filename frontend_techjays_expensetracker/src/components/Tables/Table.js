

import './Table.css'
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
