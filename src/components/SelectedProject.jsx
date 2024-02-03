import { Tasks } from "./Tasks.jsx";

// SelectedProject component responsible for rendering selected project details and tasks
export const SelectedProject = ({
  project,        // Project details (title, description, dueDate)
  onDelete,       // Function to handle project deletion
  onAddTask,      // Function to handle adding a task to the project
  onDeleteTask,  // Function to handle task deletion
  tasks,          // List of tasks associated with the project
}) => {
  // Format the due date using the browser's locale
  const formattedDate = new Date(project.dueDate).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16">
      {/* Project header section */}
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          {/* Project title */}
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>

          {/* Delete button */}
          <button
            onClick={onDelete}
            className="text-stone-600 hover:text-stone-950"
          >
            Delete
          </button>
        </div>

        {/* Display formatted due date */}
        <p className="mb-4 text-stone-400 ">{formattedDate}</p>

        {/* Display project description */}
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>

      {/* Render the Tasks component to handle project tasks */}
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
};
