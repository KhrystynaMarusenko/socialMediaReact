import React from "react";
import classes from './Post.module.css'

const Post = (props) =>{
    return (
            <div>{props.message}<span>{props.likesCount}</span></div>
    )
}


export default Post;