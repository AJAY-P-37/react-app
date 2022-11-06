import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

let ID = 0;
const DUMMY_EXPENSES = [];


function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    ID++;
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }
  const deleteExpenseHandler = (expense) => {

    setExpenses((prevExpenses) => {
      prevExpenses.splice(prevExpenses.indexOf(expense), 1);
      return [...prevExpenses];
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} id={ID} />
      <Expenses items={expenses} onDeleteExpense={deleteExpenseHandler} />
    </div>
  );
}

export default App;
