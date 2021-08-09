import React from 'react'
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, Form} from "react-final-form";
import styles from "../Login/loginForm.module.css";


const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map((item) => <DialogItem name={item.name} key={item.id}
                                                                              id={item.id}/>)
    let messagesElements = props.dialogsPage.messages.map(item => <Message message={item.message} key={item.id}/>)
    if (!props.isAuth) return <Redirect to={'/login'}/>

    let onNewMessage = (value) => {
        props.sendMessage(value.message);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messagesItems}>
                <div>{messagesElements}</div>
                <AddMessageForm onSubmit={onNewMessage}/>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <Form
            onSubmit={props.onSubmit}
            render={({handleSubmit, form, submitting, pristine}) => {
                return <form onSubmit={handleSubmit}>
                    <Field name={'message'}>
                        {({input, meta}) => (
                            <div>
                            <input {...input} type="text" className={classes.sendInput} placeholder="Enter your message"/>
                        {meta.error && meta.touched && <span className={styles.span}>{meta.error}</span>}
                            </div>
                            )}
                    </Field>

                    <div >
                        <button type="submit" disabled={submitting} className={classes.sendBtn}>
                            Submit
                        </button>

                    </div>
                </form>
            }}
        />
    )
}

export default Dialogs