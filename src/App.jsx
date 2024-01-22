import './App.css'
import ColorBoxMaker from './ColorBoxMaker'
import TodoList from './TodoList'

function App() {
  return (
    <>
      <h1 style={{textAlign: 'center'}}>Color Box Maker</h1>
      <ColorBoxMaker />

      <h1 style={{textAlign: 'center'}}>Todo App</h1>
      <TodoList />
    </>
  )
}

export default App
