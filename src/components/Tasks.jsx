import './Tasks.css'

export default function Tasks({ tareasState }) {
  const { tareas, setTareas } = tareasState

  const handleRemoveItems = (id) => () => {
    setTareas(prevItems => {
      return prevItems.filter(currentItem => currentItem.id !== id)
    })
  }

  return (
    <section className="section-tasks">
      {
        tareas && (
          tareas.map(({ id, titulo, descripcion, fecha }) => (
            <ul key={id}>
              <li >{titulo}</li>
              <li >{descripcion}</li>
              <li >{fecha}</li>
              <button type="button" onClick={handleRemoveItems(id)}>Eliminar</button>
            </ul>
          ))
        )
      }
    </section>
  )
}
