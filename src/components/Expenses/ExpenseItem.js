import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import Button from '../UI/Button';
import './ExpenseItem.css';

function ExpenseItem(props) {

    const deleteHandler = (event) => {
        props.onDelete(props.expense);
    }

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2 >{props.title}</h2>
                    <div className='expense-item__price'>{props.amount}</div>
                    <Button onClick={deleteHandler} text={'Delete'}></Button>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem; 
