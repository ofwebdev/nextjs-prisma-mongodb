// Modal.tsx
import React from "react";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  toggleTheme: (theme: string) => void;
  resetTheme: () => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  closeModal,
  toggleTheme,
  resetTheme,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <dialog className="modal">
      <div className="modal-box">
        <button
          className="btn btn-active btn-primary mb-3"
          onClick={() => toggleTheme("cyberpunk")}
        >
          Switch to Cyberpunk Theme
        </button>
        <br />
        <button
          className="btn btn-active btn-primary mb-3"
          onClick={() => toggleTheme("dark")}
        >
          Switch to Dark Theme
        </button>
        <br />
        <button
          className="btn btn-active btn-primary mb-3"
          onClick={() => toggleTheme("light")}
        >
          Switch to Light Theme
        </button>
        <br />
        <button
          className="btn btn-active btn-primary mb-3"
          onClick={resetTheme}
        >
          Reset Theme
        </button>
        <p className="py-4">Press ESC key or click outside to close</p>
      </div>
      <form method="dialog" className="modal-backdrop" onClick={closeModal}>
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Modal;
