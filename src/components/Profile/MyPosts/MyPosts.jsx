import React from "react";

import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, Form} from "react-final-form";
import {required} from "../../../utils/validators/validations";
import errorStyles from "../../common/FormsConstrols/FormsControls.module.css";


const MyPosts = React.memo(props => {
        let postsElements = props.posts.map((item, index) => <Post key={index} message={item.message}
                                                                   likesCount={item.likesCount}/>)

        let onAddPost = (value) => {
            props.addPost(value.postMessage);
        }

        return (
            <div className={classes.myPosts}>
                <div className={classes.addPost}>
                    <h2>My posts</h2>
                    <AddNewPostForm onSubmit={onAddPost}/>
                </div>
                <div>
                    <h2>New posts</h2>
                    {postsElements}
                </div>
            </div>
        )
    }
)
const AddNewPostForm = (props) => {
    return (
        <Form
            onSubmit={props.onSubmit}
            render={({handleSubmit, submitting}) => {
                return <form onSubmit={handleSubmit}>
                    <Field name={'postMessage'} validate={required}>
                        {({input, meta}) => {
                            const hasError = meta.error && meta.touched;
                            return (
                                <div>
                                    <input {...input} type="text" placeholder="New post"
                                           className={`${classes.addPostInput} ${hasError && errorStyles.inputError}`}/>
                                    {hasError && <span className={errorStyles.span}>{meta.error}</span>}
                                </div>)
                        }}
                    </Field>

                    <div>
                        <button type="submit" disabled={submitting} className={classes.addPostBtn}>Add post</button>
                    </div>
                </form>
            }}
        />

    )
}


export default MyPosts;