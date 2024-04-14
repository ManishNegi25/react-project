import { useState } from 'react'
import AddToDo from './components/AddTodo'
import DeleteToDo from './components/DeleteToDo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello from manish negi------</h1>
    <AddToDo/>
    <DeleteToDo/>
    </>
  )
}

export default App
