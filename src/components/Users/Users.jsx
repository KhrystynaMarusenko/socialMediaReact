import React from 'react'
import classes from "./Users.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/user.png"
import PageCount from "../common/PageCount/PageCount";


let Users = (props) => {
    return (
        <div className={classes.container}>
            <PageCount totalItemCount={props.totalUsersCount} pageSize={props.pageSize}
                       onPageChanged={props.onPageChanged} currentPage={props.currentPage} />


            {
                props.users.map(user => <div className={classes.profilesHolder} key={user.id}>
                    <div className={classes.profilesHolderImg}>
                        <NavLink className={classes.link} to={'/profile/' + user.id}>
                            <img src={user.photos.small ? user.photos.small : userPhoto} className={classes.profileImg}
                                 alt='profile photo small'/>
                            <h4>{user.name}</h4>
                        </NavLink>

                        {user.isFollow
                            ? <button disabled={props.isFollowingInProgress.some(id => id === user.id)}
                                      className={classes.followBtn} onClick={() => {
                                props.unFollow(user.id)
                            }}>UNFOLLOW</button>

                            : <button disabled={props.isFollowingInProgress.some(id => id === user.id)}
                                      className={classes.followBtn} onClick={() => {
                                props.follow(user.id)
                            }}>FOLLOW</button>}

                    </div>
                    <div>
                        <div>
                            <ul>
                                <li>{user.status}</li>
                                <li>Country</li>
                                <li>City</li>
                            </ul>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users