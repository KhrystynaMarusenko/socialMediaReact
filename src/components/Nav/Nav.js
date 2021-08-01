import React from 'react'
import classes from './Nav.module.css'
import {NavLink} from "react-router-dom";
const Nav = () =>{
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile'className={classes.links}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users'className={classes.links}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs'className={classes.links}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news'className={classes.links}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music'className={classes.links}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings'className={classes.links}>Settings</NavLink>
            </div>

        </nav>
    )

}

export default Nav;