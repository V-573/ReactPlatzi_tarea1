import React from 'react';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUi({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
     deleteTodo,


}) {



     return (
<React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} />{" "}
      {/* aca envio los props completedTodos y totalTodos*/}
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />{" "}
      {/*aca envio los props al archivo TodoSearch hijo, el componente pader seria App. En el archivo todoSearch debemos asegurarno de recibir las props y desestructurarla. por ser fragmento de React debo usar {} que encierren el /** y dentro de los asteriscos coloco el comentario*/}
      <TodoList>
        {searchedTodos.map(
          (
            todo //esta funcion es para usar el buscador para filtrar las tareas segun lo que se escriba en el buscador
          ) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )
        )}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
)
}
 
export { AppUi };



