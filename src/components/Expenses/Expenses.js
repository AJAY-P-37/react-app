import React, { useState } from 'react';
import Card from "../UI/Card";
import './Expenses.css';
import ExpenseFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpenseList from './ExpensesList';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');

    const selectFilter = (selectedYear) => {
        setFilteredYear(selectedYear);

    }

    const deleteHandler = (expense) => {
        props.onDeleteExpense(expense);
    }

    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeFilter={selectFilter} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpenseList items={filteredExpenses} onDelete={deleteHandler} />
            </Card>
        </div>
    )
}

export default Expenses;