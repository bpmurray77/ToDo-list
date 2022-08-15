//import react into the bundle
import React, { useState } from 'react';
import data from "./data.json";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
function Todo() {
    const[toDoList, setToDoList] = useState(data);
    
    return (
      <div className="App">
        <Home />
      </div>
    );
   }

export default Todo;
