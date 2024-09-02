// Expense.js
import React from 'react';

function Expense({ expense }) {
  return (
    <li>
      <span>{expense.description}</span>
      <span>${expense.amount}</span>
      <button>Edit</button>
      <button>Delete</button>
    </li>
  );
}

export default Expense;
