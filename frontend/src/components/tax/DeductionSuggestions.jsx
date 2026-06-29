// frontend/src/components/tax/DeductionSuggestions.jsx

import "./DeductionSuggestions.css";
import { deductionSuggestions } from "../../data/mockTax";

export default function DeductionSuggestions() {
  return (
    <div className="deduction-suggestions">
      <div className="deduction-header">
        <h3>Deduction Suggestions</h3>
        <p>Reduce your taxable income with eligible deductions.</p>
      </div>

      <div className="deduction-list">
        {deductionSuggestions.map((item) => (
          <div
            className="deduction-card"
            key={`${item.section}-${item.name}`}
          >
            <div className="deduction-info">
              <h4>{item.name}</h4>
              <span>Section {item.section}</span>
            </div>

            <div className="deduction-saving">
              ₹{item.potentialSavings.toLocaleString("en-IN")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}