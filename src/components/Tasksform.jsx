import './Tasksform.css'

class newForm {
  constructor(titulo, descripcion, fecha) {
    this.id = crypto.randomUUID();
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fecha = fecha;
  }
}

export default function Tasksform({ changeForm }) {
  const handleSubmit = (event) => {
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)
    const dataJson = Object.fromEntries(formData.entries())

    const createTask = new newForm(dataJson.titulo, dataJson.descripcion, dataJson.fecha)
    changeForm(prevState => ([
      ...prevState, createTask
    ]))
    form.reset()
  }


  return (
    <section className="section-form">
      <form id='task-form' onSubmit={handleSubmit}>
        <label htmlFor='titulo'>
          Titulo
        </label>
        <input type="text" name="titulo" minLength="5" maxLength="50" placeholder='Titulo' required />

        <label htmlFor="descripcion">
          Descripción
        </label>
        <textarea name='descripcion' minLength="10" placeholder='Escribe tu tarea...' required></textarea>

        <label htmlFor="fecha">
          Fecha
        </label>
        <input type="date" name="fecha" required />
        <button type='submit'>Añadir</button>
      </form>
    </section>
  )
}
