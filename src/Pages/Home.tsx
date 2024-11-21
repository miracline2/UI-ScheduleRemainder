import { useState } from 'react';
import TaskForm from '../Components/TaskForm';

// Define the Task type
interface Task {
  id: number;
  title: string;
}

const Home = () => {
  // Specify the state type as an array of Task objects
  const [tasks, setTasks] = useState<Task[]>([]);

  // Function to add a task
  const addTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">My Tasks</h2>
      <TaskForm onAddTask={addTask} />
      {/* Render the task list */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
