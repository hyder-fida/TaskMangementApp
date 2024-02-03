import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

// NewProject component for adding a new project
const NewProject = ({ onAdd, onCancel }) => {
  // Refs for modal and input fields
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  // Function to handle saving a new project
  const handleSave = () => {
    // Get values from input fields
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // Validation...
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      // Open the validation modal
      modal.current.open();
      return;
    }

    // Call onAdd function with the entered project data
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      {/* Validation modal */}
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stine-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops... looks like you forgot to enter a value.{" "}
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>

      {/* New project form */}
      <div className="w-[35rem] mt-16">
        {/* Menu with Cancel and Save buttons */}
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            {/* Cancel button */}
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            {/* Save button */}
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>

        {/* Input fields for new project details */}
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;
