import React from 'react'
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
    /*let state = props.store.getState().dialogPage;*/

    let dialogsElements = props.state.dialogs.map((item) => <DialogItem name={item.name} id={item.id}/>)

    let messagesElements = props.state.messages.map(item => <Message message={item.message}/>)
    let newMessageBody = props.state.newMessageBody;

    let onSendMessageClick = () =>{
        props.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) =>{
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body));
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