import React, { useRef, useState } from 'react'
import './css/Todo.css';
import { useEffect } from 'react';
import { TodoItems } from './TodoItems';




let count = 0;

export const Todo = () => {

    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null);

    const add = () => {
        setTodos([...todos, { no: count++, text: inputRef.current.value, display: "" }]);
        inputRef.current.value = "";
        localStorage.setItem("todosCount", count);
    }

    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem('todos')));
        count = localStorage.getItem('todosCount');
    },[])


    useEffect(() => {
        setTimeout(() => {
            console.log(todos);
            localStorage.setItem("todos", JSON.stringify(todos));

        }, 100);
    }, [todos]);

    return (
        <div className='todo'>
            <div className='todoHeader'>MY LIST</div>
            <div className="todoAdd">
                <input ref={inputRef} type="text" placeholder='Add Your Task' className='todoInput' />
                <div onClick={() => { add() }} className="addButton">Add</div>
                <div className="todoList">
                    {todos.map((items, index) => {
                        return <TodoItems key={index} no={items.no} display={items.display} text={items.text} />
                    })}
                </div>

            </div>
        </div>
    )
}


