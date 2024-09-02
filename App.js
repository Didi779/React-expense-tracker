// App.js
import React from 'react';
import Header from './Header';
import ExpenseList from './ExpenseList';
import ExpenseForm from './ExpenseForm';

function App() {
  return (
    <div>
      <Header />
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
}

export default App;
