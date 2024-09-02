// ExpenseForm.js
import React, { useState } from 'react';

function ExpenseForm() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add new expense to the list
    // For now, we'll just console.log the new expense
    console.log(`New expense: ${description} - ${amount}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Description:
        <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
      </label>
      <br />
      <label>
        Amount:
        <input type="number" value={amount} onChange={(event) => setAmount(event.target.value)} />
      </label>
      <br />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
