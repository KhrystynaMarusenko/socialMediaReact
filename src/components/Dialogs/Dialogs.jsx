import React from 'react'
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map((item) => <DialogItem name={item.name} key={item.id} id={item.id}/>)
    let messagesElements = props.dialogsPage.messages.map(item => <Message message={item.message} key={item.id}/>)
    let newMessageBody = props.dialogsPage.newMessageBody;

    let onSendMessageClick = () =>{
        props.sendMessage();
    }
    let onNewMessageChange = (e) =>{
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messagesItems}>
                <div>{messagesElements}</div>
                <div>
                    <div><input onChange={onNewMessageChange} value={newMessageBody} placeholder='Enter your message' /></div>
                    <div><button onClick={onSendMessageClick}>SEND</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs