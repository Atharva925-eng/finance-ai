// frontend/src/components/tax/TaxReportPreview.jsx

import "./TaxReportPreview.css";
import mockTax, { deductionSuggestions } from "../../data/mockTax";
import { Download } from "lucide-react";

export default function TaxReportPreview() {
  const totalDeductions = deductionSuggestions.reduce(
    (total, item) => total + item.potentialSavings,
    0
  );

  const netPayable = Math.max(
    0,
    mockTax.estimatedLiability - totalDeductions
  );

  const handleDownload = () => {
    alert("Report download will be available soon.");
  };

  return (
    <div className="tax-report-card">
      <div className="tax-report-header">
        <div>
          <h3>Tax report — FY 2025-26</h3>
          <p>Summary of your estimated tax details</p>
        </div>

        <span className="tax-report-chip">Preview</span>
      </div>

      <div className="tax-report-details">
        <div className="tax-report-row">
          <span>Estimated Tax</span>
          <strong>
            ₹
            {mockTax.estimatedLiability.toLocaleString("en-IN")}
          </strong>
        </div>

        <div className="tax-report-row">
          <span>Total Deductions Found</span>
          <strong>
            ₹
            {totalDeductions.toLocaleString("en-IN")}
          </strong>
        </div>

        <div className="tax-report-row total">
          <span>Net Payable</span>
          <strong>
            ₹
            {netPayable.toLocaleString("en-IN")}
          </strong>
        </div>
      </div>

      <button
        className="download-report-btn"
        onClick={handleDownload}
      >
        <Download size={18} />
        Download Report
      </button>
    </div>
  );
}