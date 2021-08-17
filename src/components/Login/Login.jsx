import React from "react";
import {Form, Field} from 'react-final-form'
import styles from './loginForm.module.css'
import {required} from "../../utils/validators/validations";
import errorStyles from "../common/FormsConstrols/FormsControls.module.css";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";


const LoginForm = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if(props.isAuth){
        return <Redirect to={"/profile"}/>
    }

    return (

        <Form
            key={'login form'}
            onSubmit={onSubmit}
            render={({handleSubmit, form, submitting, pristine}) => {
                return <form onSubmit={handleSubmit} className={styles.form}>
                    <Field name={'email'} validate={required}>
                        {({input, meta}) => {
                            let hasError = meta.error && meta.touched;
                            return(
                            <div className={styles.inputHolder}>
                                <label className={styles.label}>Login</label>
                                <input {...input} type="text" placeholder="Login" className={`${hasError && errorStyles.inputError}`}/>
                                {hasError && <span className={errorStyles.span}>{meta.error}</span>}
                            </div>
                            )
                        }}
                    </Field>
                    <Field name={'password'} validate={required}>
                        {({input, meta}) => {
                            let hasError = meta.error && meta.touched;
                            return (
                            <div className={styles.inputHolder}>
                                <label className={styles.label}>Password</label>
                                <input {...input} type="password" placeholder="Password" className={`${hasError && errorStyles.inputError}`}/>
                                {meta.error && meta.touched && <span className={errorStyles.span}>{meta.error}</span>}
                            </div>
                            )
                        }}
                    </Field>
                    <div>
                        <label className={styles.label}>Remember me</label>
                        <Field name="rememberMe" component="input" type="checkbox" className={styles.checkbox}/>
                    </div>

                    {props.captchaUrl && <img src={props.captchaUrl} alt={'captcha'}/>}

                    {props.captchaUrl && <Field name={'captcha'} validate={required}>
                        {({input, meta}) => {
                            let hasError = meta.error && meta.touched;
                            return(
                                <div className={styles.inputHolder}>
                                    <input {...input} type="text" className={`${hasError && errorStyles.inputError}`}/>
                                    {hasError && <span className={errorStyles.span}>{meta.error}</span>}
                                </div>
                            )
                        }}
                    </Field>}

                    <div className={styles.buttonsHolder}>
                        <button type="submit" disabled={submitting} className={styles.button}>
                            Submit
                        </button>
                        <button
                            className={styles.button}
                            type="button"
                            onClick={form.reset}
                            disabled={submitting || pristine}
                        >
                            Reset
                        </button>
                    </div>
                </form>
            }}
        />
    )
}




const mapStateToProps = (state) => {
    return {
        isAuth : state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}


export default  connect(mapStateToProps, {login, logout})(LoginForm)