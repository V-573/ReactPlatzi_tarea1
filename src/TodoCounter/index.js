import './TodoCounter.css'

function TodoCounter({ completed, total }) { // desestructuro los props con los {} y por dentro recibo los props
  return (
      <h1 className='TodoCounter'>
          Has completado <span>{completed}</span> de <span>{total}</span> ToDos {/*en este espacio reenderizo el contenido de mi html, este es un fragmento de react lo que retorno para reenderizar*/}
    </h1>

  );
}

export { TodoCounter }; // export nombrados:  esto es para evitar confuciones en los nombres cuando desde otro archivo los importamos. la estructura para importarlos seria: import { TodoCounter} from '.7 la ubicacion'.

