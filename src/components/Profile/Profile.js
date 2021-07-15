import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/state";



const Profile = (props) =>{

    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state} dispatch={props.dispatch} />
        </div>
    )
}

export default Profile