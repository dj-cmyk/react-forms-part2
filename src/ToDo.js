import React from "react";
import "./ToDo.css";



const ToDo = ({ id, item, removeToDo }) => {
    const handleRemoveToDo = () => {removeToDo(id)}

    return (
        <div className="ToDo">
            {item}
            <button onClick={handleRemoveToDo}> X </button>
        </div>
      )
}



export default ToDo;