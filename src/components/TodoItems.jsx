import React from 'react'

import check from '../assets/check.svg'
import circle from '../assets/circle.svg'
import delIcon from '../assets/delIcon.svg'

export const TodoItems = ({ no, display, text, setTodos }) => {

    const deleteTodos = (no) =>{
        let data = JSON.parse(localStorage.getItem('todos'));
        data = data.filter((todo) => todo.no!==no)
        setTodos(data);
    }

    const toggle = (no) => {
        let data = JSON.parse(localStorage.getItem('todos'));
        for (let i = 0; i < data.length; i++) {
            if (data[i].no === no) {
                if (data[i].display === "") {
                    data[i].display = "line-trough";
                   
                } else {
                    data[i].display = "";
                }
                break; 
            }
        }

        setTodos(data);
    }


    return (
        <div className="todoItems">
            <div className="todoItemsContainer" onClick={() => { toggle(no) }}>
                {display === "" ? <img src={circle} alt="circleImage" />:<img src={check} alt="checkImage" />}
                {display === "" ?<div className="todoItemText">{text}</div>:<div className="activity">{text}</div>}
            </div>
            <img src={delIcon} alt="delImage" onClick={()=> deleteTodos(no)}/>
        </div >
    )
}
