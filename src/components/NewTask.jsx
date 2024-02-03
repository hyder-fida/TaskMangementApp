import { useState } from "react";

export const NewTask = ({ onAdd }) => {
  // State to manage the entered task value
  const [enteredTask, setEnteredTask] = useState("");

  // Event handler to update the entered task value on input change
  const handleChange = (event) => {
    setEnteredTask(event.target.value);
  };

  // Event handler to add the task and reset the entered task value
  const handleClick = () => {
    if (enteredTask.trim() === '') {
       return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  };

  // JSX code for the component
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        onClick={handleClick}
        className="text-stone-900 hover:bg-stone-500 bg-stone-300 rounded px-2"
      >
        Add Task
      </button>
    </div>
  );
};
