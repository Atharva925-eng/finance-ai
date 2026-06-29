import { useEffect, useRef } from "react";
import "./Modal.css";

function Modal({ title, onClose, children }) {
  const overlayRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previousFocus = document.activeElement;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [onClose]);

  const handleOverlayClick = (event) => {
    if (event.target === overlayRef.current) {
      onClose();
    }
  };

  return (
    <div
      className="shared-modal-overlay"
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="shared-modal">
        <div className="shared-modal-header">
          <h2 id="modal-title">{title}</h2>
          <button
            type="button"
            className="shared-modal-close"
            onClick={onClose}
            aria-label="Close modal"
            ref={closeButtonRef}
          >
            ×
          </button>
        </div>
        <div className="shared-modal-body">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
