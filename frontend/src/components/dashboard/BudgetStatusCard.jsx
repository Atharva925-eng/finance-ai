import mockBudget from "../../data/mockBudget.js";
import "./BudgetStatusCard.css";

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

function BudgetStatusCard() {
  const { totalBudget, usedBudget, period } = mockBudget;
  const percentUsed = Math.min(100, Math.round((usedBudget / totalBudget) * 100));
  const isOverspent = percentUsed > 90;

  return (
    <section className="budget-card">
      <div className="budget-card-header">
        <div>
          <p className="budget-card-label">Budget status</p>
          <h2 className="budget-card-amount">
            {currencyFormatter.format(usedBudget)} / {currencyFormatter.format(totalBudget)}
          </h2>
        </div>
        {isOverspent && <span className="budget-card-badge">Overspending</span>}
      </div>

      <p className="budget-card-period">{period}</p>

      <div className="budget-progress">
        <div className="budget-progress-fill" style={{ width: `${percentUsed}%` }} />
      </div>

      <div className="budget-card-footer">
        <span>{percentUsed}% used</span>
        <span>{currencyFormatter.format(totalBudget - usedBudget)} left</span>
      </div>
    </section>
  );
}

export default BudgetStatusCard;
