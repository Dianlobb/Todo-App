import React from 'react';
import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck , faTrash, faSpinner} from "@fortawesome/free-solid-svg-icons";



function TodoItem(props) {


 
  return (
    <li className={`TodoItem  ${props.completed && 'TodoItem--complete'}`} >
          


      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={props.onComplete}>
       {props.completed && <FontAwesomeIcon icon={faCircleCheck} /> }
       {!props.completed && <FontAwesomeIcon icon={faSpinner} /> }

      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"  onClick={props.onDelete}>
      <FontAwesomeIcon icon={faTrash} />
      </span>
    </li>
  );
}

export { TodoItem };