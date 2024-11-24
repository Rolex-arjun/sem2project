import React, { useEffect, useState } from 'react';
import API from '../utils/api';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const { data } = await API.get('/expenses');
      setExpenses(data);
    };

    fetchExpenses();
  }, []);

  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense._id}>
            <strong>{expense.title}</strong>: ${expense.amount} - {expense.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
