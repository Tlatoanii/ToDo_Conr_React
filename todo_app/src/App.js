import React from 'react';
import { TodoCounter } from './Componets/TodoCounter';
import { TodoSearch } from './Componets/TodoSearch';
import { TodoList } from './Componets/TodoList';
import { TodoItem } from './Componets/TodoItem';
import { CreateTodoButton } from './Componets/CreateTodoButton';

const defaultTodos = [
  { text : 'Cortar Cebolla', completed: false},
  { text : 'Curson Introducción React.js', completed: false},
  { text : 'Llorar con la Llorona', completed: true},
  { text : 'Descansar en cama', completed: false},
  { text : 'Relizar Tarea de Platzi', completed: false},
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter 
        completed={16} 
        total={25} 
      />

      <TodoSearch />

      <TodoList >
        {/* <TodoItem />  */} {/* Todas las etiquetas que lleven <> dentro de un componente se convertira en una propiedad children */}
        { defaultTodos.map(todo => (
            <TodoItem 
            key={ todo.text }
            text= { todo.text}
            completed= {todo.completed}
            />
        )) }
        
      </TodoList>      

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
