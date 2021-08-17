import React from "react";

const Post = (props) =>{
    return (
            <div>{props.message}<span>{props.likesCount}</span></div>
    )
}

export default Post;