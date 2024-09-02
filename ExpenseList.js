// ExpenseList.js
import React from 'react';
import Expense from './Expense';

function ExpenseList() {
  const expenses = [
    { id: 1, description: 'Rent', amount: 1000 },
    { id: 2, description: 'Groceries', amount: 500 },
  ];

  return (
    <ul>
      {expenses.map((expense) => (
        <Expense key={expense.id} expense={expense} />
      ))}
    </ul>
  );
}

export default ExpenseList;
