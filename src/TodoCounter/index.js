import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';

function TodoCounter() { // desestructuro los props con los {} y por dentro recibo los props
 
 
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);
 

  return (
      <h1 className='TodoCounter'>
          Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> ToDos {/*en este espacio reenderizo el contenido de mi html, este es un fragmento de react lo que retorno para reenderizar*/}
    </h1>

  );
}

export { TodoCounter }; // export nombrados:  esto es para evitar confuciones en los nombres cuando desde otro archivo los importamos. la estructura para importarlos seria: import { TodoCounter} from '.7 la ubicacion'.

