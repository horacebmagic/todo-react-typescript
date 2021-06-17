import React, { useState } from 'react';

interface FuncProps {
  addTodo: (task: string) => void;
}

export const Addtodo: React.FC<FuncProps> = ({ addTodo }) => {
  const [task, setTask] = useState<string>('');

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>): void => {
    const { key } = (e as React.KeyboardEvent<HTMLInputElement>);
    const { target } = (e as React.ChangeEvent<HTMLInputElement>);
    if (key === 'Enter') {
      addTodo(task);
      setTask('');
      target.value = '';
    }
  }
  
  return (
    <div style={{ width: '300px', margin: 'auto' }}>
      <input style={{ float: 'right' }} type="text" name="task" 
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          setTask(e.target.value);
        }} 
        onKeyDown={ handleEnter } />  
    </div>
  )
}
