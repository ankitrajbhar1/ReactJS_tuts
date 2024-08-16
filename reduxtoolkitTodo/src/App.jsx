import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import RemoveTodo from './components/RemoveTodo'

function App() {
  

  return (
    <>
      <h1>Redux Toolkit</h1>
      <AddTodo/>
      <RemoveTodo/>
    </>
  )
}

export default App
