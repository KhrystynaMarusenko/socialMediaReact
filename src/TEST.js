// import React from "react";
// import styles from "./OtherFinalForumField.module.scss";
// import { Form, Field } from "react-final-form";
//
// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
//
// const onSubmit = async (values) => {
//     await sleep(300);
//     window.alert(JSON.stringify(values, 0, 2));
// };
//
// const required = (value) => (value ? undefined : "Required");
// const mustBeNumber = (value) => (isNaN(value) ? "Must be a number" : undefined);
// const minValue = (min) => (value) =>
//     isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
// const composeValidators = (...validators) => (value) =>
//     validators.reduce((error, validator) => error || validator(value), undefined);
//
// export default (props) => {
//     let formData = {
//
//     };
//
//     return (
//         <div className={styles.wrapper}>
//             <h1 className={styles.title}>React Final Form Example</h1>
//             <h2 className={styles.subTitle}>Synchronous Field-Level Validation</h2>
//             <a
//                 href="https://final-form.org/react"
//                 target="_blank"
//                 rel="noopener noreferrer"
//             >
//                 Read Docs
//             </a>
//             <Form
//                 onSubmit={onSubmit}
//                 initialValues={formData}
//                 render={({ handleSubmit, form, submitting, pristine, values }) => (
//                     <form onSubmit={handleSubmit}>
//                         <Field name="firstName" validate={required}>
//                             {({ input, meta }) => (
//                                 <div>
//                                     <label>First Name</label>
//                                     <input {...input} type="text" placeholder="First Name" />
//                                     {meta.error && meta.touched && <span>{meta.error}</span>}
//                                 </div>
//                             )}
//                         </Field>
//                         <Field name="lastName" validate={required}>
//                             {({ input, meta }) => (
//                                 <div>
//                                     <label>Last Name</label>
//                                     <input {...input} type="text" placeholder="Last Name" />
//                                     {meta.error && meta.touched && <span>{meta.error}</span>}
//                                 </div>
//                             )}
//                         </Field>
//                         <Field
//                             name="age"
//                             validate={composeValidators(required, mustBeNumber, minValue(18))}
//                         >
//                             {({ input, meta }) => (
//                                 <div>
//                                     <label>Age</label>
//                                     <input {...input} type="text" placeholder="Age" />
//                                     {meta.error && meta.touched && <span>{meta.error}</span>}
//                                 </div>
//                             )}
//                         </Field>
//                         <div className={styles.buttons}>
//                             <button type="submit" disabled={submitting}>
//                                 Submit
//                             </button>
//                             <button
//                                 type="button"
//                                 onClick={form.reset}
//                                 disabled={submitting || pristine}
//                             >
//                                 Reset
//                             </button>
//                         </div>
//                         <pre>{JSON.stringify(values, 0, 2)}</pre>
//                     </form>
//                 )}
//             />
//         </div>
//     );
// };


import React from 'react'
import { render } from 'react-dom'
import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import { FORM_ERROR } from 'final-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    if (values.username !== 'erikras') {
        return { username: 'Unknown username' }
    }
    if (values.password !== 'finalformrocks') {
        return { [FORM_ERROR]: 'Login Failed' }
    }
    window.alert('LOGIN SUCCESS!')
}

const App = () => (
    <Styles>
        <h1>React Final Form Example</h1>
        <h2>Submission Errors</h2>
        <a
            href="https://final-form.org/react"
            target="_blank"
            rel="noopener noreferrer"
        >
            Read Docs
        </a>
        <div>
            Only successful credentials are <code>erikras</code> and{' '}
            <code>finalformrocks</code>.
        </div>
        <Form
            onSubmit={onSubmit}
            validate={values => {
                const errors = {}
                if (!values.username) {
                    errors.username = 'Required'
                }
                if (!values.password) {
                    errors.password = 'Required'
                }
                return errors
            }}
            render={({
                         submitError,
                         handleSubmit,
                         form,
                         submitting,
                         pristine,
                         values
                     }) => (
                <form onSubmit={handleSubmit}>
                    <Field name="username">
                        {({ input, meta }) => (
                            <div>
                                <label>Username</label>
                                <input {...input} type="text" placeholder="Username" />
                                {(meta.error || meta.submitError) && meta.touched && (
                                    <span>{meta.error || meta.submitError}</span>
                                )}
                            </div>
                        )}
                    </Field>
                    <Field name="password">
                        {({ input, meta }) => (
                            <div>
                                <label>Password</label>
                                <input {...input} type="password" placeholder="Password" />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    {submitError && <div className="error">{submitError}</div>}
                    <div className="buttons">
                        <button type="submit" disabled={submitting}>
                            Log In
                        </button>
                        <button
                            type="button"
                            onClick={form.reset}
                            disabled={submitting || pristine}
                        >
                            Reset
                        </button>
                    </div>
                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                </form>
            )}
        />
    </Styles>
)

render(<App />, document.getElementById('root'))
