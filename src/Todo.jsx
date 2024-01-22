/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from 'react';
import './Todo.css';
import EditTodoForm from './EditTodoForm';

export default function Todo({text='', isCompleted=false, onStatusChanged, onRemoved, onTextUpdated}) {
  const [isEditing, setIsEditing] = useState(false);

  return <div className="todo">
    {isEditing && <EditTodoForm text={text} onEdit={(text) => {setIsEditing(false); onTextUpdated?.(text)} }/>}
    {!isEditing && <>
      <span className={`todo-text ${isCompleted ? 'completed' : ''}`}>{text}</span>
      <div className="todo-actions">
        <button className="edit" onClick={() => setIsEditing(true)}>Edit</button>
        <button 
          onClick={() => onStatusChanged?.(!isCompleted)}
          className={`mark ${isCompleted ? 'completed' : ''}`}
          >{!isCompleted ? "Mark" : "Unmark"}</button>
        <button className="delete" onClick={() => onRemoved?.()}>Delete</button>
      </div>
    </>}
  </div>
}