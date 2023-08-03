import React, { useState } from 'react';
import './App.css';
import Expenses from "./components/expenses/Expenses";
import NewExpense from './components/NewExpenses/NewExpense';

const dummy_expense = [
  {
    title: 'Fees',
    amount: 400,
  },
  {
    title: 'Accessories',
    amount: 500,
  },
];

const App = () => {

  const [expenses, setExpense] = useState(dummy_expense);

  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpense(updatedExpense);
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;