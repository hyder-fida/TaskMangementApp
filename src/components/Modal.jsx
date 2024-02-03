import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

// Modal component using forwardRef to expose imperatively controlled methods
const Modal = forwardRef(({ children, buttonCaption }, ref) => {
  // Create a ref for the dialog element
  const dialog = useRef();

  // UseImperativeHandle to expose the 'open' method to the parent component
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  // Render the modal using createPortal to append it to a specific DOM element
  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {/* Modal content */}
      {children}
      
      {/* Modal form with a button */}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    // Portal target element
    document.getElementById("modal-root")
  );
});

export default Modal;
