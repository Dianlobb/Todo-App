import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'



function TodoForm() {
    const [newTodoValue, setnewTodoValue] = React.useState('')
    const { addTodo, setOpenModal } = React.useContext(TodoContext)
    const onChange=(event)=>{
        setnewTodoValue(event.target.value)
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    const onCancel=(event)=>{
        setOpenModal(false);
    }
    return(
        <form onSubmit={onSubmit} >
      <label>Write Your New ToDo</label>
      <textarea
        value = {newTodoValue}
        onChange = {onChange}
        placeholder = "Write the task"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick = {onCancel}
        >
               Cancel
        </button>

        <button
          className="TodoForm-button TodoForm-button-add"
          type= "submit"
        >
           Add
          </button>
      </div>
    </form>
    )
}

export {
  TodoForm
}