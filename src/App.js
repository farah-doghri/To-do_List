import './App.css';
import Form from "./Form";
import TableTasks from "./TableTasks";
import React, { useState } from 'react';

export default function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      titre: "ajouter une tâche",
      message: "Lier une description à la tâche"
    }
  ]);

  return (
    <div className="app">
      <h1>TO-DO List</h1>
      <Form setTasks={setTasks} />

      <h2>Tâches à Faire</h2>
      {tasks.map((task) => (
        <TableTasks titre={task.titre} message={task.message} key={task.id} id={task.id} />
      ))}

    </div>
    
  );
}
