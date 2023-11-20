import './TodoCounter.css'

function TodoCounter({ completed, total }) {
  return (
      <h1 className='TodoCounter'>
          Has completado <span>{completed}</span> de <span>{total}</span> ToDos
    </h1>

  );
}

export { TodoCounter }; // export nombrados:  esto es para evitar confuciones en los nombres cuando desde otro archivo los importamos. la estructura para importarlos seria: import { TodoCounter} from '.7 la ubicacion'.

