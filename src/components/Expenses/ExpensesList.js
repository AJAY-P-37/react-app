import React from "react";
import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
    }
    const deleteHandler = (expense) => {
        props.onDelete(expense);
    }

    return (
        <ul className='expenses-list'>
            {props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    expense={expense}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    onDelete={deleteHandler}
                />
            ))}
        </ul>
    );

}

export default ExpensesList;