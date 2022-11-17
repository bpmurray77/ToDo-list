//import react into the bundle
import React, { useState } from 'react';
import data from "./data.json";
import ReactDOM from "react-dom";
import ToDoList from "./ToDoList";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import ToDoForm from './ToDoForm';

//render your react application
function App() {
    const[toDoList, setToDoList] = useState(data);

    return (
      <div className="App">
        <Home />
        <ToDoList toDoList={toDoList}/>
        <ToDoForm/>
      </div>
    );
   }

export default App;

ReactDOM.render(<App />, document.querySelector("#app"));
