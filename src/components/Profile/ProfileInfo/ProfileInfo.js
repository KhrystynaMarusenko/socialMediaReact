import React from "react";
import classes from "./ProfileInfo.module.css";
import photo from "../../img/photo_2021-07-09_11-52-45.jpg"

const ProfileInfo = () =>{
    return (
            <div className={`${classes.profileInfoHolder}`}>
                <div className={`${classes.item}`}>
                    <div className={`${classes.imgHolder} `}>
                        <img src={photo} alt={"Photo"}/>
                    </div>
                </div>
                <div className={`${classes.profileName} ${classes.item}`}>
                    <h2>KHRYSTYNA MARUSENKO</h2>
                </div>
            </div>
    )
}

export default ProfileInfo