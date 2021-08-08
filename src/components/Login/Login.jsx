import React from "react";
import {Form, Field} from 'react-final-form'
import styles from './loginForm.module.css'

const required = (value) => (value ? undefined : "Required");


const LoginForm = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <Form
            onSubmit={onSubmit}
            render={({handleSubmit, form, submitting, pristine}) => {
                return <form onSubmit={handleSubmit} className={styles.form}>
                    <Field name={'login'} validate={required}>
                        {({input, meta}) => (
                            <div className={styles.inputHolder}>
                                <label className={styles.label}>Login</label>
                                <input {...input} type="text" placeholder="Login"/>
                                {meta.error && meta.touched && <span className={styles.span}>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    <Field name={'password'} validate={required}>
                        {({input, meta}) => (
                            <div className={styles.inputHolder}>
                                <label className={styles.label}>Password</label>
                                <input {...input} type="password" placeholder="Password"/>
                                {meta.error && meta.touched && <span className={styles.span}>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    <div>
                        <label className={styles.label}>Remember me</label>
                        <Field name="rememberMe" component="input" type="checkbox" className={styles.checkbox}/>
                    </div>

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
        /*  <Form
              onSubmit={(formData) => {
              console.log(formData)
          }}
          >
              {({handleSubmit}) => (
                  <form onSubmit={handleSubmit}>
                      <div>
                          <Field placeholder={'Login'} name={'login'} component={'input'}/>
                      </div>
                      <div>
                          <Field placeholder={'Password'} name={'password'} component={'input'}/>
                      </div>
                      <div>
                          <Field  component={'input'} name={'rememberMe'} type={'checkbox'}/>Remember me
                      </div>
                      <div>
                          <button>Login</button>
                      </div>
                  </form>
              )}
          </Form>*/
    )
}


const Login = (props) => {
    return <div>
        <h2 className={styles.title}>LOGIN</h2>
        <LoginForm/>
    </div>
}

export default Login