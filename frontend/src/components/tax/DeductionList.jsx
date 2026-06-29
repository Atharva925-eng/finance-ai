import "./DeductionList.css";

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

function DeductionList({ deductions }) {
  return (
    <section className="deduction-list-card">
      <div className="deduction-list-header">
        <div>
          <p className="deduction-list-label">Tax deductions</p>
          <h2 className="deduction-list-title">Suggested deductions</h2>
        </div>
      </div>

      <div className="deduction-items">
        {deductions.map((deduction) => (
          <div className="deduction-item" key={deduction.id}>
            <div>
              <span className="deduction-item-name">{deduction.name}</span>
              <span className="deduction-item-section">Section {deduction.section}</span>
            </div>
            <span className="deduction-item-savings">
              {currencyFormatter.format(deduction.potentialSavings)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DeductionList;
