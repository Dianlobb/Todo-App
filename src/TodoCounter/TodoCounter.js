import React,{Fragment} from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {totalTodos,completedTodos} = React.useContext(TodoContext)
  const porcentComplete= totalTodos>0?(completedTodos/totalTodos*100).toFixed(1) +'%':0
  const style ={
  width: porcentComplete
    
  }
  return (
    <Fragment>
      <div className='progressBar'>
      <div className='progressBar progress' style={style}>
        <p>{porcentComplete}</p>
      </div>
    </div>
       <h4 className="TodoCounter">You're Completed {completedTodos} Of {totalTodos} TODOs</h4>
    
    </Fragment>
   
  );
}

export { TodoCounter };