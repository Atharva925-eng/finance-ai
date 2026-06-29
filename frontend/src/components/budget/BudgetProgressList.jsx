import "./BudgetProgressList.css";

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

function BudgetProgressList({ budgets }) {
  return (
    <section className="budget-progress-card">
      <div className="budget-progress-card-header">
        <div>
          <p className="budget-progress-card-label">Budget progress</p>
          <h2 className="budget-progress-card-title">Monthly allocation</h2>
        </div>
      </div>

      <div className="budget-progress-list">
        {budgets.map((budget) => {
          const percent = Math.min(100, Math.round((budget.spent / budget.allocated) * 100));
          const isOverspending = budget.spent / budget.allocated > 0.9;

          return (
            <div className="budget-progress-row" key={budget.id}>
              <div className="budget-progress-row-top">
                <span className="budget-progress-category">{budget.category}</span>
                {isOverspending && <span className="budget-progress-badge">Overspending</span>}
              </div>

              <div className="budget-progress-bar">
                <div className="budget-progress-fill" style={{ width: `${percent}%` }} />
              </div>

              <div className="budget-progress-meta">
                <span className="budget-progress-values">
                  {currencyFormatter.format(budget.spent)} / {currencyFormatter.format(budget.allocated)}
                </span>
                <span className="budget-progress-percent">{percent}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default BudgetProgressList;
