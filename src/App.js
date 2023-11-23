import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import React from "react";
import "./App.css";
const defaultTodos = [
  {
    text: "Cortar Cebolla",
    completed: true,
  },
  {
    text: "Cortar Cebolla 2",
    completed: true,
  },
  {
    text: "tomar el curso",
    completed: false,
  },
  {
    text: "tomar el curso2",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter((todo) => !!todo.completed).length;  // la doble !! negacion me permite mostrar a el programador que este revisando mi codigo que estoy treabajando con booleanos
  //en la linea anterior filtramos el valor del estado (todos). es un array que se forma con filter y contiene los elementos que sean completed=true y con la propiedad del array para saber el tamaño sacamos el total de las tareas completadas, osea que tienen el valor true
  const totalTodos = todos.length; // aca el estado (todos) contiene el total de tareas  y es un array  al que aprovechamos para usar la propiedad para saber el tamaño 

  const searchedTodos = todos.filter((todo) => { // componente searchTodos
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLocaleLowerCase();

    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);

    newTodos[todoIndex].completed = true; //aca doy un nuevo valor al props.completed = true
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);

    newTodos.splice(todoIndex, 1); // aca quito el elemento con splice que tiene como parametro el indice del elemento a borrar y la cantidad de elementos a borrar desde ese indice especificado
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} /> {/* aca envio los props completedTodos y totalTodos*/}
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} /> {/*aca envio los props al archivo TodoSearch hijo, el componente pader seria App. En el archivo todoSearch debemos asegurarno de recibir las props y desestructurarla. por ser fragmento de React debo usar {} que encierren el /** y dentro de los asteriscos coloco el comentario*/}

      <TodoList>
         {searchedTodos.map((todo) => (  //esta funcion es para usar el buscador para filtrar las tareas segun lo que se escriba en el buscador

          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
             onComplete={() => completeTodo(todo.text)}
               onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
