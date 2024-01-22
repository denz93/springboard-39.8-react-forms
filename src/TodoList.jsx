import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./TodoList.css";
import useStorage from "./useStorage";

export default function TodoList() {
  const [todos, setTodos] = useStorage('todos', []);

  return <div className="todo-list-wrapper">
    <div className="form-container">
      <h2>New Todo Form</h2>
      <NewTodoForm onSubmit={(text) => setTodos([...todos, {text, isCompleted: false}])} />
    </div>
    <h2>List of Todos</h2>
    <ul className="todo-list">
      {todos.length === 0 && <li id={-1} style={{fontStyle: 'italic'}}>No todos yet</li>}
      {todos.map((todo, idx) => (
        <li key={idx} className="todo-item">
          <Todo 
            text={todo.text} 
            isCompleted={todo.isCompleted} 
            onStatusChanged={(isCompleted) => {
              const newTodos = [...todos]
              newTodos[idx].isCompleted = isCompleted
              setTodos(newTodos)
            }}
            onTextUpdated={(text) => {
              const newTodos = [...todos]
              newTodos[idx].text = text
              setTodos(newTodos)
            }}
            onRemoved={() => setTodos(todos.filter((_, i) => i !== idx))} 
          />
        </li>
      ))}
    </ul>
  </div>
}