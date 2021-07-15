import React from 'react'
import logo from '../img/a0915beebd24448fac741dc9cc4c2ed7 (1).png'
import classes from './Logo.module.css';

const Logo = () => {
    return (
        <div className={classes.logoHolder}>
            <div className={classes.logo}>
                {/*<img src='https://dewey.tailorbrands.com/production/brand_version_mockup_image/198/5616062198_cdb5eeec-d428-4a37-8d18-9868238fdabc.png?cb=1625816742'/>*/}
                <img src={logo}/>
            </div>
        </div>
    )
}

export default Logo;