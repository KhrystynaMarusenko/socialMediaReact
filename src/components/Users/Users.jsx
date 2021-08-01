import React from 'react'
import classes from "./Users.module.css";
import {NavLink} from "react-router-dom";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1)
    }


    return (
        <div className={classes.container}>
            <div className={classes.pagesHolder}>
                {pages.map(page => <span
                    onClick={() => props.onPageChanged(page)}
                    className={`${page === props.currentPage ? classes.currentPage : classes.notCurrentPage} ${classes.page}`}>{page}
                </span>)}
            </div>


            {
                props.users.map(user => <div className={classes.profilesHolder} key={user.id}>
                    <div className={classes.profilesHolderImg}>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small} className={classes.profileImg} alt='profile photo small'/>
                            <h4>{user.name}</h4>
                        </NavLink>
                        {user.isFollow
                            ? <button className={classes.followBtn} onClick={() => {
                                props.unFollow(user.id)
                            }}>UNFOLLOW</button>
                            : <button className={classes.followBtn} onClick={() => {
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