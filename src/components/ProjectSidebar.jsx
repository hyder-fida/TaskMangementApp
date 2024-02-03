import Button from "./Button.jsx";

// ProjectSidebar component responsible for rendering project information in a sidebar
export const ProjectSidebar = ({
  onStartAddProject,    // Function to handle starting the addition of a new project
  projects,             // List of projects
  onSelectProject,      // Function to handle selecting a project
  selectedProjectId,    // Id of the currently selected project
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-sm">
      {/* Sidebar title */}
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>

      {/* Button to start adding a new project */}
      <div>
        <Button onClick={onStartAddProject}>+ Add Projects</Button>
      </div>

      {/* List of projects */}
      <ul className="mt-6 ">
        {projects.map((project) => {
          // CSS classes based on project selection
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-100 text-xl";

          if (project.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-800";
          } else {
            cssClasses += " text-stone-400";
          }

          return (
            <li key={project.id}>
              {/* Button to select a project */}
              <button
                onClick={() => onSelectProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
