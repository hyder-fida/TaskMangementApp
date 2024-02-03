// Button component with a consistent style
const Button = ({ children, ...props }) => {
  return (
    <button
      // Styling using Tailwind CSS classes
      className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      {...props}  // Spread any additional props provided
    >
      {/* Button content */}
      {children}
    </button>
  );
};

export default Button;
