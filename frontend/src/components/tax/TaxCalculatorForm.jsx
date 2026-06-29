// frontend/src/components/tax/TaxCalculatorForm.jsx

import { useState } from "react";
import "./TaxCalculatorForm.css";
import { annualIncome } from "../../data/mockTax";
import { getTaxSlabs } from "../../data/mockTaxSlabs";

function calculateIncomeTax(income, slabs) {
  let tax = 0;

  slabs.forEach((slab) => {
    if (income > slab.min) {
      const taxableIncome = Math.min(income, slab.max) - slab.min;
      tax += taxableIncome * slab.rate;
    }
  });

  return Math.max(0, tax);
}

export default function TaxCalculatorForm() {
  const [country, setCountry] = useState("IN");
  const [income, setIncome] = useState(annualIncome);
  const [tax, setTax] = useState(null);

  const handleCalculate = () => {
    const value = Number(income);

    if (Number.isNaN(value) || value < 0) {
      setTax(null);
      return;
    }

    const slabs = getTaxSlabs(country);
    setTax(calculateIncomeTax(value, slabs));
  };

  return (
    <div className="tax-calculator-card">
      <div className="tax-calculator-header">
        <h3>Income Tax Calculator</h3>
        <p>Estimate your annual income tax.</p>
      </div>

      <div className="tax-form-group">
        <label htmlFor="country">Country</label>
        <select
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="IN">India</option>
          <option value="US">United States</option>
          <option value="UK">United Kingdom</option>
        </select>
      </div>

      <div className="tax-form-group">
        <label htmlFor="annualIncome">Annual Income</label>

        <input
          id="annualIncome"
          type="number"
          min="0"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          placeholder="Enter annual income"
        />
      </div>

      <button
        className="calculate-tax-btn"
        onClick={handleCalculate}
      >
        Calculate
      </button>

      {tax !== null && (
        <div className="tax-result-box">
          <span>Estimated Tax</span>
          <strong>
            ₹{tax.toLocaleString("en-IN", {
              maximumFractionDigits: 0,
            })}
          </strong>
        </div>
      )}
    </div>
  );
}