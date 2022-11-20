import React, { useState } from "react";
import data from "./data.json";





function ToDoForm() {

    let allTasks = []

    const addToDo = (ev) => {
        ev.preventDefault();
        let task = {
            task: document.getElementById("input").value,
            complete: false,
        };
        allTasks.push(task);

        console.log(allTasks);

        localStorage.setItem("Inventory", JSON.stringify(allTasks));
      };
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("button").addEventListener("click", addToDo)});
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("button").addEventListener("click", document.forms[0].reset())
      });



    return (
        <form>
            <input
            name="task"
            id="input"
            type="text"
            onChange={addToDo}
            ></input>
            <button
            type="submit"
            id="button"></button>
        </form>
    );
 };
  
 export default ToDoForm;