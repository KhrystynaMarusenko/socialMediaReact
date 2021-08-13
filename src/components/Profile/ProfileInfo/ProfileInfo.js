import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png"
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) =>{
    if(!props.profile){
        return <Preloader/>
    }
    return (
            <div className={`${classes.profileInfoHolder}`}>
                <div className={`${classes.item}`}>
                    <div className={`${classes.imgHolder} `}>
                        <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto} alt={"Photo"}/>
                    </div>
                </div>
                <div className={`${classes.profileName} ${classes.item}`}>
                    <h2>{props.profile.fullName}</h2>
                    <p>{props.profile.aboutMe}</p>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>

            </div>
    )
}

export default ProfileInfo