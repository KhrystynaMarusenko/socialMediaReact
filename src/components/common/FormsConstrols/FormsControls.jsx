import React from 'react'
import errorStyles from "./FormsControls.module.css";

export const Input = (props) =>{
    debugger
    let hasError = props.error && props.touched;
    return (
        <div>
            <input {...props} type="password" placeholder="Password" className={`${hasError && errorStyles.inputError}`}/>
            {props.error && props.touched && <span className={errorStyles.span}>{props.error}</span>}
        </div>

    )
}