import React, { useState } from "react";
import data from "./data.json";





function ToDoForm() {
    const [ToDo, setToDo] = useState({
        id:"",
        task:"",
        completed: false
    });

    function handleInput(e){
        setToDo({...ToDo, task: e.target.value})
    }

    return (
        <form>
            <input
            name="task"
            type="text"
            value={ToDo.task}
            onChange={handleInput}
            ></input>
            <button
            type="submit"></button>
        </form>
    );
 };
  
 export default ToDoForm;