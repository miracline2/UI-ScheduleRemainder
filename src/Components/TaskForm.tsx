import { useState } from 'react';

// Define a type for the task object
interface Task {
  id: number;
  title: string;
}

// Define the props for the TaskForm component
interface TaskFormProps {
  onAddTask: (task: Task) => void; // The onAddTask function expects a Task object
}

const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask({ id: Date.now(), title: task }); // Pass the task to the parent component
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="p-2 border rounded"
        placeholder="Enter new task"
      />
      <button
        type="submit"
        className="ml-4 p-2 bg-blue-500 text-white rounded"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
