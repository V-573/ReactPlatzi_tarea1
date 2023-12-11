import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";

import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoContext } from "../TodoContext";
import { TodoForm } from "../TodoForm";

function AppUi() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      {/* aca envio los props completedTodos y totalTodos*/}
      <TodoSearch />
      {/*aca envio los props al archivo TodoSearch hijo, el componente pader seria App. En el archivo todoSearch debemos asegurarno de recibir las props y desestructurarla. por ser fragmento de React debo usar {} que encierren el /** y dentro de los asteriscos coloco el comentario*/}

      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}

        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <EmptyTodos />}

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

      <CreateTodoButton
      setOpenModal={setOpenModal}
      />
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </React.Fragment>
  );
}

export { AppUi };
