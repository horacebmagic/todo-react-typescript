import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Addtodo } from "./AddTodo";
import { Todo } from './types';
import Todolist from './TodoList';

const todos: Array<Todo> = []

const App: React.FC = () => {
  const [todo, setTodo] = useState(todos);

  const addTodo = (task: string): void => {
    console.log('add task successful');
    const newTodo: Todo = { id: uuid(), task: task, isDone: false, isEdit: false }
    setTodo([ ...todo, newTodo ]);
  }

  const removeTodo = (id: string): void => {
    console.log('remove task successful');
    const newTodo: Array<Todo> = todo.filter(t => t.id !== id );
    setTodo([ ...newTodo ]);
  }

  const toggleIsDone = (id: string): void => {
    console.log('task done trigger');
    const newTodo: Array<Todo> = todo.map(t => {
      if(t.id === id) return { ...t, isDone: !t.isDone } 
      return t
    })
    setTodo([ ...newTodo ]) 
  }

  const updateTodo = (id: string, newTask: string): void => {
    console.log('task successfuly updated', id, newTask);
    const newTodo: Array<Todo> = todo.map(t => {
      if(t.id === id) return { ...t, task: newTask }
      return t
    });
    console.log(newTodo);
    setTodo(newTodo);
  }
  
  return (
    <div className="App">
      {todos.length > -1 && todo.map(t => 
        <Todolist key={ t.id } todo={ t } removeTodo={ removeTodo } toggleIsDone={ toggleIsDone } updateTodo={ updateTodo } />
      )}
      <Addtodo addTodo={ addTodo } />
    </div>
  );
}

export default App;
