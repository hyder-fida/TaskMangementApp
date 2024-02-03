import { NewTask } from "./NewTask";

// Tasks component responsible for rendering tasks
export const Tasks = ({ tasks, onAdd, onDelete }) => {
  return (
    <section>
      {/* Section title */}
      <h2 className="text-2xl font-bold text-stone-700 mb-4">NEW TASK</h2>

      {/* NewTask component for adding new tasks */}
      <NewTask onAdd={onAdd} />

      {/* Display message when there are no tasks */}
      {tasks.length === 0 && (
        <p className="text-stone-800 mb-4">
          This project does not have any tasks yet.
        </p>
      )}

      {/* Display tasks if there are any */}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {/* Map through tasks and render each task */}
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              {/* Display task text */}
              <span>{task.text}</span>

              <div className=" space-x-5 ">
                {/* Button to Edit a task */}
                <button
                
                  className="text-stone-700 hover:text-yellow-500"
                  aria-label={`Edit task "${task.text}"`}
                >
                  Edit
                  
              {/* Button to delete a task */}
                </button>
                <button
                  onClick={() => onDelete(task.id)}
                  className="text-stone-700 hover:text-red-500"
                >
                  Clear
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
