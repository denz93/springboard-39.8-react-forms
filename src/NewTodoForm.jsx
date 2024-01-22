/* eslint-disable react/prop-types */
import { useState } from "react";
import './NewTodoForm.css';

export default function NewTodoForm({onSubmit}) {
  const [text, setText] = useState('');

  return <form className="new-todo-form" onSubmit={(event) => {
    event.preventDefault()
    const isValid = event.currentTarget.reportValidity()
    if (!isValid) return
    onSubmit?.(text)
    setText('')
  }}>
    <input
      type="text"
      value={text}
      placeholder="Enter new todo..."
      required
      onChange={(event) => setText(event.target.value)}
    />
    <button type="submit">Add</button>
  </form>
}