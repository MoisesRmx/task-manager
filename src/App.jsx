import './App.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import Tasksform from './components/Tasksform'
import { useState } from 'react'

function App() {
  const tareasData = [
  ]
  const [tareas, setTareas] = useState(tareasData)

  return (
    <main>
      <Header title="Task Manager" />
      <Tasksform changeForm={setTareas} />
      <Tasks tareasState={{ tareas, setTareas}} />
    </main>
  )
}

export default App
