import React, { useState } from "react";
import "./NewToDoForm.css";

const NewToDoForm = ({ addToDo }) => {
  const INITIAL_STATE = {
    item: ''
  }
  
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addToDo({ ...formData });
    setFormData(INITIAL_STATE)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="item">Item: </label>
      <input
        id="item"
        type="text"
        name="item"
        value={formData.item}
        onChange={handleChange}
        className="NewToDoForm-input"
      />
      <button>Add To Do Item</button>
    </form>
  )

}

export default NewToDoForm;


