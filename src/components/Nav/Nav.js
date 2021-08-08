import React from 'react'
import classes from './Nav.module.css'
import {NavLink} from "react-router-dom";
import Logo from "../Logo/Logo";
const Nav = (props) =>{
    return (
        <nav className={classes.nav}>
            {/*<Logo/>*/}

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
            <div className={classes.item}>
                {props.isAuth ? props.login
                    : <NavLink to='/login' className={classes.links}>Login</NavLink>
                }
            </div>

        </nav>
    )

}

export default Nav;