import React from 'react';

// Define the Task type (make sure this is consistent with the Task type used elsewhere)
interface Task {
  id: number;
  title: string;
}

// Define the props for the TaskList component
interface TaskListProps {
  tasks: Task[]; // The 'tasks' prop will be an array of Task objects
}

const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li key={task.id} className="p-2 bg-gray-100 rounded shadow">
          {task.title}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
