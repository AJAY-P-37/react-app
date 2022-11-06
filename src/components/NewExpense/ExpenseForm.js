import React, { useState } from "react";
import Modal from "../UI/Modal";
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState(null);


    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (title.trim() === '' || amount.trim() === '' || date.trim() === '') {
            setError(
                {
                    title: 'Invalid Input',
                    message: 'All fields are mandatory',
                    buttonText: 'Okay'
                });
            return
        };

        if (+amount < 1) {
            setError({
                title: 'Invalid Input',
                message: 'Amount should b greater than 1',
                buttonText: 'Okay'

            });
            return
        };

        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date)
        };

        props.onSaveExpenseData(expenseData);

        setTitle('');
        setAmount('');
        setDate('');

    }

    const onConfirmHandler = (event) => {
        setError(null)
    }


    return (
        <div>

            {error && <Modal title={error.title} message={error.message} buttonText={error.buttonText} onConfirm={onConfirmHandler} />}

            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type='text' value={title} onChange={titleChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type='number' value={amount} min='1' span='1' onChange={amountChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type='date' value={date} onChange={dateChangeHandler} />
                    </div>

                </div>
                <div className="new-expense__actions">

                    <button type="button" onClick={props.onCancel}>Cancel</button>
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm;