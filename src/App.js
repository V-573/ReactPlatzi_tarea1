import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
import './App.css';
const defaultTodos = [
  {
    text: 'Cortar Cebolla', completed: true
  },
  {
    text: 'Cortar Cebolla 2', completed: true
  },
  {
    text: 'tomar el curso', completed: false
  },
   {
    text: 'tomar el curso2', completed: false
  },
];

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={3 } total={10} />
      <TodoSearch />

    <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
          ))}
    </TodoList>

      <CreateTodoButton/>

    </React.Fragment>
  );
}

export default App;
