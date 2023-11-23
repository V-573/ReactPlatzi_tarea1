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

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();

      return todoText.includes(searchText);
    }
  );

  const completeTodo =
    
    () => {
      const newTodos = [...todos]
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text == text
      );
     
      newTodos[todoIndex].completed = true;
        setTodos(newTodos);  
    };

   
  console.log("los usuarios buscan " + searchValue);


  return (
    <React.Fragment>

      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue = {setSearchValue}
      
      
      />

    <TodoList>
        { searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onConplete={completeTodo(todo.text)}
          />
          ))}
    </TodoList>

      <CreateTodoButton/>

    </React.Fragment>
  );
}

export default App;
