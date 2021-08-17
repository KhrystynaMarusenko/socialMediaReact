import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png"
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) =>{
    if(!props.profile){
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            props.savePhoto(e.target.files[0])
        }
    }


    return (
            <div className={`${classes.profileInfoHolder}`}>
                <div className={`${classes.item}`}>
                    <div className={`${classes.imgHolder} `}>
                        <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto} alt={"Photo"}/>
                    </div>
                    {props.isOwner &&
                        <div>
                            <input type="file" id="profile_pic" onChange={onMainPhotoSelected} name="profile_pic"
                                   accept=".jpg, .jpeg, .png"/>
                        </div>
                   }
                </div>
                <div className={`${classes.profileName} ${classes.item}`}>
                    <h2>{props.profile.fullName}</h2>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>

            </div>
    )
}

export default ProfileInfo