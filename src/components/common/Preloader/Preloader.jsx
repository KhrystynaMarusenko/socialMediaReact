import React from 'react'
import loader from "../../../assets/images/6d391369321565.5b7d0d570e829.gif";
import classes from './Preloader.module.css';

let Preloader = () => {
    return <div className={classes.preloaderHolder}>
        <img src={loader} alt='preloader'/>
    </div>
}

export default Preloader