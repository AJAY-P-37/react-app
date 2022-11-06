import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from './Modal.module.css';

const Modal = (props) => {

    return (
        <div>
            <div className={classes.backdrop} onClick={props.onConfirm}></div>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <main className={classes.content}>
                    <p>{props.message}</p>
                </main>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm} text={props.buttonText} />
                </footer >
            </Card>
        </div>
    );
};

export default Modal;