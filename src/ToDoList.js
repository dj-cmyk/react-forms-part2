import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import ToDo from "./ToDo";
import NewToDoForm from "./NewToDoForm";
import "./ToDoList.css"


const ToDoList = () => {
    const INITIAL_STATE = []
    const [toDos, setToDos] = useState(INITIAL_STATE);
      
    const addToDo = (newToDo) => {
        setToDos(toDos => [...toDos, { ...newToDo, id: uuid() }])
      }


    const removeToDo = (id) => {
          setToDos(toDos => toDos.filter(toDo => toDo.id !== id))
      }

      return (
        <div className="ToDoList">
          <h3 className="ToDoList-header">To Do List</h3>
          <div className="ToDoList-form">
            <NewToDoForm addToDo={addToDo} />
          </div>
          <div className="ToDoList-item">
            {toDos.map(({ id, item }) => <ToDo key={id} id={id} item={item} removeToDo={removeToDo} />)}
          </div>
    
        </div>
      )
}



export default ToDoList;
