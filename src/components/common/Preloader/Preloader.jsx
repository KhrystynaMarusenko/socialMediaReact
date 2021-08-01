import React from 'react'
import loader from "../../../assets/images/loading-buffering.gif";
import classes from './Preloader.module.css';

let Preloader = () => {
    return <div className={classes.preloaderHolder}>
        <img src={loader} alt='preloader'/>
    </div>
}

export default Preloader