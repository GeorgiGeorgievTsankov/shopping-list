import React, { useRef, useState } from 'react'
import './css/Todo.css';





export const Todo = () => {

    const [todos,,setTodos] = useState([]);
    const inputRef = useRef(null);

    const add = (todos) =>{
         setTodos([...todos,{no:count++,teccxt:inputRef.current.value,display:""}]);
         inputRef.current.value = "";
    }

    return (
        <div className='todo'>
            <div className='todoHeader'>MY LIST</div>
            <div className="todoAdd">
                <input ref={inputRef} type="text" placeholder='Add Your Task' className='todoInput'/>
                <div onClick={()=>{add()}} className="addButton">Add</div>
                <div className="todoList"></div>
            </div>
        </div>
    )
}

