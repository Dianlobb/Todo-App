import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton=()=>{
    props.setOpenModal(prevStage=>!prevStage);
  }
  return (
    <button className="CreateTodoButton"
    onClick={onClickButton}
    >+</button>
  );
}

export { CreateTodoButton };