import React from "react";

import classes from './MyPosts.module.css'
import Post from "./Post/Post";



const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let postsElements = props.posts.map(item => <Post message={item.message} likesCount={item.likesCount}/>)

    let onAddPost = () =>{
        props.addPost();
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={classes.myPosts}>
            <div className={classes.addPost}>
                <h2>My posts</h2>
                <div className={classes.addPostHolder}>
                    <div>
                        <input onChange={onPostChange} value={props.newPostText} className={classes.addPostInput} ref={newPostElement}/>
                    </div>
                    <div>
                        <button className={classes.addPostBtn} onClick={ onAddPost }>Add post</button>
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