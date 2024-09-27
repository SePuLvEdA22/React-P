import { useState } from "react";
import "./App.css";

function App() {

  // tasks: Un array que almacenará la lista de tareas.
  const [tasks, setTask] = useState([]);

  //newTask: Una cadena de texto que guarda temporalmente el valor de la nueva tarea que el usuario va a ingresar.
  const [newTask, setNewTask] = useState("");

  /*
  Esta función se ejecuta cada vez que el usuario escribe en el campo de texto (input). event.target.value obtiene el valor actual del campo, y con setNewTask actualizamos el estado newTask con ese valor.
  */
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };


  /*
  Aquí verificamos que newTask no esté vacío o compuesto solo de espacios. Si es válido, usamos el operador spread (...) para tomar las tareas actuales (tasks) y añadir la nueva tarea al final. Después de agregarla, limpiamos el input (setNewTask('')).
  */
  const addTask = () => {
    if (newTask.trim()) {
      setTask([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <div className="App">
      <h2>Lista de tareas</h2>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Nueva tarea"
      /><br/>
      <button onClick={addTask}>Agregar</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
