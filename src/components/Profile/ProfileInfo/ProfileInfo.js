import React from "react";
import classes from "./ProfileInfo.module.css";
import photo from "../../../assets/images/photo_2021-07-09_11-52-45.jpg"
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) =>{
    if(!props.profile){
        return <Preloader/>
    }
    debugger
    return (
            <div className={`${classes.profileInfoHolder}`}>
                <div className={`${classes.item}`}>
                    <div className={`${classes.imgHolder} `}>
                        <img src={props.profile.photos.large} alt={"Photo"}/>
                    </div>
                </div>
                <div className={`${classes.profileName} ${classes.item}`}>
                    <h2>{props.profile.fullName}</h2>
                    <p>{props.profile.aboutMe}</p>
                </div>

            </div>
    )
}

export default ProfileInfo