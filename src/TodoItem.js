import './TodoItem.css';
function TodoItem(props) {
   console.log("Props en TodoItem:", props);
  return (
    <li className='TodoItem'>
      <span
        className={`Icon Icon-check ${props.
          completed ? "Icon-check--active" : ""}`}
        
        onClick={props.onComplete} // desde aca hago el llamado a la funcion completeTodo(todo.text) y esta funcion se lleva 
      >
        V
      </span>
          <p className={`TodoItem-p ${props.completed ? "TodoItem-p--complete": ""}`} >{props.text}</p>
      <span className='Icon Icon-delete'
      onClick={props.onDelete}
      >
        X
      </span>
     </li>

  );
}

export { TodoItem };

