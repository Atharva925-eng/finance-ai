import mockExpenses from "../../data/mockExpenses.js";
import "./ExpenseOverviewCard.css";

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

function ExpenseOverviewCard() {
  const { totalThisMonth, period, categories } = mockExpenses;

  return (
    <section className="expense-card">
      <div className="expense-card-header">
        <div>
          <p className="expense-card-label">Expense overview</p>
          <h2 className="expense-card-total">{currencyFormatter.format(totalThisMonth)}</h2>
        </div>
        <span className="expense-card-chip">{period}</span>
      </div>

      <div className="expense-card-list">
        {categories.map((category) => (
          <div className="expense-item" key={category.name}>
            <div className="expense-item-top">
              <span className="expense-item-name">{category.name}</span>
              <span className="expense-item-amount">
                {currencyFormatter.format(category.amount)}
              </span>
            </div>
            <div className="expense-bar">
              <div
                className="expense-bar-fill"
                style={{ width: `${category.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExpenseOverviewCard;
