import { forwardRef } from "react";

// Input component using forwardRef to expose the input reference
const Input = forwardRef(({ label, textarea, ...props }, ref) => {
  // Common classes for styling the input field
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    // Container for the input field with label
    <p className="flex flex-col gap-1 my-4">
      {/* Label for the input field */}
      <label className="text-sm font-bold uppercase  text-stone-500">
        {label}
      </label>

      {/* Render either input or textarea based on the 'textarea' prop */}
      {textarea ? (
        // Textarea element
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        // Regular input element
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});

export default Input;
