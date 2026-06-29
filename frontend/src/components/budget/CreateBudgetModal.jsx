import { useState } from "react";
import Modal from "../shared/Modal.jsx";
import "./CreateBudgetModal.css";

function CreateBudgetModal({ onCreate, onClose }) {
  const [category, setCategory] = useState("");
  const [allocated, setAllocated] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!category.trim() || !allocated) return;

    onCreate({
      id: Date.now().toString(),
      category: category.trim(),
      allocated: Number(allocated),
      spent: 0,
    });

    setCategory("");
    setAllocated("");
    onClose();
  };

  return (
    <Modal title="Create budget" onClose={onClose}>
      <form className="create-budget-form" onSubmit={handleSubmit}>
          <label>
            Category name
            <input
              type="text"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              placeholder="Enter category"
            />
          </label>

          <label>
            Allocated amount
            <input
              type="number"
              min="0"
              value={allocated}
              onChange={(event) => setAllocated(event.target.value)}
              placeholder="0"
            />
          </label>

          <div className="create-budget-actions">
            <button
              type="button"
              className="create-budget-button cancel"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="create-budget-button primary">
              Create
            </button>
          </div>
        </form>
    </Modal>
  );
}

export default CreateBudgetModal;
