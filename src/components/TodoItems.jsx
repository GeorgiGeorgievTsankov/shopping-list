import React from 'react'

import check from '../assets/check.svg'
import circle from '../assets/circle.svg'
import delIcon from '../assets/delIcon.svg'

export const TodoItems = ({no,display,text}) => {
    return (

        <div className="todoItems">
            <div className="todoItemsContainer">
                { display === 'none' ?<img src={check} alt="checkImage" />:<img src={circle} alt="circleImage" />}  
                <div className="todoItemText">{text}</div>
            </div>
            <img src={delIcon} alt="delImage"/>

        </div >
    )
}

