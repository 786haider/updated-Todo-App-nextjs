
"use client"
import { useState } from "react";

export default function TodoApp() {
  interface Todo {
    title: string;
    description: string;
    completed: boolean; 
  }

  // State for the current task and the list of tasks
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState<Todo[]>([]);
  const [description, setDescription] = useState("");

  // Function to add a task
  const handleAddTask = () => {
    if (title.trim() === "" || description.trim() === "") return; // Prevent empty tasks
    setTasks([...tasks, { title, description, completed: false }]); // Set completed to false by default
    setTitle(""); 
    setDescription("");
  };

  // Function to delete a task with confirmation
  const handleDeleteTask = (index: number) => {
    const confirmDelete = window.confirm("Would you like to delete your todo?");
    if (confirmDelete) {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    }
  };

  // Function to mark a task as completed
  const handleCompleteTask = (index: number) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className=" mt-10 flex flex-col items-center justify-center p-4">
      <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-500 hover:bg-gradient-to-br hover:from-blue-500 hover:via-green-500 hover:to-red-500 transition-transform transform hover:scale-105 shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center"><b><i>My ToDo App</i></b></h1>
        
      
        <div className="flex items-center mb-4 flex-col">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg p-3 px-8 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter task title"
          />
          <br />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg p-3 px-8 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter task description"
          />
          <br />
          <button
            onClick={handleAddTask}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>
        <ul className="list-none">
          
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex items-center justify-between p-3 rounded-lg mb-2 shadow-sm ${task.completed ? 'bg-green-100' : 'bg-gray-100'}`} // Change background if completed
            >
              <div className="flex flex-col">
                <span className={`font-bold ${task.completed ? 'line-through' : ''}`}>{task.title}</span>
                <span className={`text-sm text-gray-600 ${task.completed ? 'line-through' : ''}`}>{task.description}</span>
              </div>
              <div>
                <button
                  onClick={() => handleCompleteTask(index)}
                  className={`text-green-500 hover:text-green-700 mr-2 ${task.completed ? 'hidden' : ''}`} // Hide complete button if already completed
                >
                  Complete
                </button>
                <button
                  onClick={() => handleDeleteTask(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>


</div>
  )}