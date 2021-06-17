import React, { ChangeEvent, useState } from 'react'
import { Todo } from './types'

interface Props {
  todo: Todo;
  removeTodo: (id: string) => void;
  toggleIsDone: (id: string) => void;
  updateTodo: (id: string, task: string) => void;
}

const Todolist: React.FC<Props> = ({ todo, removeTodo, toggleIsDone, updateTodo }) => {
  const [edit, setEdit] = useState<boolean>(todo.isEdit);
  const [newTask, setNewTask] = useState<string>(todo.task);
  return (
    <div style={{ width: '300px', margin: 'auto' }}>
      <span>
        <input type="checkbox" name="isDone" onChange={(e: React.ChangeEvent) => {
          toggleIsDone(todo.id);
        }} />
      </span>
      {edit
        ? <input type="text" name="newTask" value={ newTask } onChange={(e: ChangeEvent<HTMLInputElement>) => { setNewTask(e.target.value); }} />
        : <span style={ todo.isDone ? { textDecoration: 'line-through' } : { textDecoration: 'none' } } >{ todo.task }</span>
      }
      <div style={{ float: 'right', cursor: 'pointer' }}>
        <span onClick={(e: React.MouseEvent) => { 
          e.preventDefault(); 
          removeTodo(todo.id); 
        }}>[delete]</span>
        {edit
          ? <span onClick={() => { updateTodo(todo.id, newTask); setEdit(!edit) }}>[update]</span>
          : <span onClick={() => { setEdit(!edit) }}>[edit]</span>
        }
      </div>
    </div>
  )
}

export default Todolist