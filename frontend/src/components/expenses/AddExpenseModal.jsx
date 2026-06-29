import { useState } from "react";
import Modal from "../shared/Modal.jsx";
import "./AddExpenseModal.css";

const categories = [
  "Groceries",
  "Transport",
  "Dining",
  "Utilities",
  "Entertainment",
  "Health",
  "Subscription",
  "Fuel",
];

function AddExpenseModal({ onAdd, onClose }) {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!date || !description || !amount) return;

    onAdd({
      id: Date.now().toString(),
      date,
      category,
      description,
      amount: Number(amount),
    });

    setDate("");
    setCategory(categories[0]);
    setDescription("");
    setAmount("");
    onClose();
  };

  return (
    <Modal title="Add expense" onClose={onClose}>
      <form className="add-expense-form" onSubmit={handleSubmit}>
          <label>
            Date
            <input
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </label>

          <label>
            Category
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
              {categories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label>
            Description
            <input
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Enter expense description"
            />
          </label>

          <label>
            Amount
            <input
              type="number"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              placeholder="0"
            />
          </label>

          <div className="add-expense-actions">
            <button type="button" className="add-expense-button cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="add-expense-button primary">
              Add
            </button>
          </div>
        </form>
    </Modal>
  );
}

export default AddExpenseModal;
