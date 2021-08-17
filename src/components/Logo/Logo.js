import React from 'react'
import logo from '../../assets/images/a0915beebd24448fac741dc9cc4c2ed7 (1).png'
import classes from './Logo.module.css';

const Logo = () => {
    return (
        <div className={classes.logoHolder}>
            <div className={classes.logo}>
                <img src={logo} alt={"logo"}/>
            </div>
        </div>
    )
}

export default Logo;