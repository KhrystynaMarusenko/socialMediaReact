import React, {useState} from 'react'
import classes from "./PageCount.module.css";


let PageCount = ({totalItemCount, pageSize, onPageChanged = x => x, currentPage = 1, portionSize = 10}) => {
    debugger
    let pagesCount = Math.ceil(totalItemCount / pageSize);

    let pages = [];
    for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div className={classes.pagesHolder}>
        {portionNumber > 1 &&
        <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>PREV</button>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span className={`${p === currentPage ? classes.currentPage : classes.notCurrentPage} ${classes.page}`}
                             key={p}
                             onClick={() => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })}
        {portionCount > portionNumber &&
        <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>NEXT</button>}


    </div>
}

export default PageCount