import React from 'react';
import { useLocalStorage } from './useLocalStorage';



//React.createContext   esta es una herramienta de react para manejo del React context
const TodoContext = React.createContext();


function TodoProvider({children}) {

const {
    item:todos, // sintaxis para renombrar las propiedades de un objeto son los : y en este caso se cambian porque en codigo anterior asi las habiamos llamados y nos evitamos hacer todos los cambios siguientes de las variables 
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter((todo) => !!todo.completed).length; // la doble !! negacion me permite mostrar a el programador que este revisando mi codigo que estoy treabajando con booleanos
  //en la linea anterior filtramos el valor del estado (todos). es un array que se forma con filter y contiene los elementos que sean completed=true y con la propiedad del array para saber el tamaño sacamos el total de las tareas completadas, osea que tienen el valor true
  const totalTodos = todos.length; // aca el estado (todos) contiene el total de tareas  y es un array  al que aprovechamos para usar la propiedad para saber el tamaño

  const searchedTodos = todos.filter((todo) => {
    // componente searchTodos
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLocaleLowerCase();

    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);

    newTodos[todoIndex].completed = true; //aca doy un nuevo valor al props.completed = true
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);

    newTodos.splice(todoIndex, 1); // aca quito el elemento con splice que tiene como parametro el indice del elemento a borrar y la cantidad de elementos a borrar desde ese indice especificado
    saveTodos(newTodos);
  };

    return (
        <TodoContext.Provider value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,


        }
        }>

            {children}

        </TodoContext.Provider>



    );


}

export { TodoContext, TodoProvider };