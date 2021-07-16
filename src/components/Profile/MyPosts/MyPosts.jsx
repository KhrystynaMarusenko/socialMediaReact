import React from "react";

import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/prof-reducer";



const MyPosts = (props) => {

    let postsElements = props.state.posts.map(item => <Post message={item.message} likesCount={item.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () =>{
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={classes.myPosts}>
            <div className={classes.addPost}>
                <h2>My posts</h2>
                <div className={classes.addPostHolder}>
                    <div>
                        <input onChange={onPostChange} value={props.state.newPostText} className={classes.addPostInput} ref={newPostElement}></input>
                    </div>
                    <div>
                        <button className={classes.addPostBtn} onClick={ addPost }>Add post</button>
                    </div>
                </div>

            </div>
            <div>
                <h2>New posts</h2>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;