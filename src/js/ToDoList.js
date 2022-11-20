import React from 'react';
import ToDo from './ToDo';
 
 
const ToDoList = () =>{
    const taskList = localStorage.getItem("allTasks")
   console.log(taskList)
   
       return(

             <div class="card-body myinventory">
               {taskList.task}
             </div>
           )
}

export default ToDoList;