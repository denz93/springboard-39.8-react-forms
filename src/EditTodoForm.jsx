/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { useState } from "react"
import './EditTodoForm.css'

export default function EditTodoForm({text, onEdit}) {
  const [value, setValue] = useState(text)

  useEffect(() => setValue(text), [text])

  return <div className="edit-todo-form">
    <input
      type="text"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
    <button onClick={() => onEdit?.(value)}>Update</button>
  </div>
}