import React from "react";
import {addPostActionCreator} from "../../../redux/prof-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) =>{
    return {
        posts:state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        addPost: (postMessage) =>{
            dispatch(addPostActionCreator(postMessage))
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;