import mockTax from "../../data/mockTax.js";
import "./TaxSnapshotCard.css";

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

function TaxSnapshotCard() {
  const { estimatedLiability, deductionSuggestions, period } = mockTax;

  return (
    <section className="tax-card">
      <div className="tax-card-header">
        <div>
          <p className="tax-card-label">Tax snapshot</p>
          <h2 className="tax-card-liability">
            {currencyFormatter.format(estimatedLiability)}
          </h2>
        </div>
        <span className="tax-card-badge">{period}</span>
      </div>

      <p className="tax-card-details">
        {deductionSuggestions} deduction suggestions found
      </p>

      <a className="tax-card-link" href="#">
        View full report
      </a>
    </section>
  );
}

export default TaxSnapshotCard;
