import "./HealthScoreCard.css";

function HealthScoreCard({ budgets }) {
  const overspendPercents = budgets.map((budget) => {
    const ratio = budget.allocated > 0 ? budget.spent / budget.allocated : 0;
    return Math.max(0, (ratio - 1) * 100);
  });

  const averageOverspend = budgets.length
    ? overspendPercents.reduce((sum, value) => sum + value, 0) / budgets.length
    : 0;

  const rawScore = 100 - averageOverspend;
  const score = Math.round(Math.max(0, Math.min(100, rawScore)));

  let statusLabel = "Excellent";
  let statusClass = "excellent";

  if (score < 60) {
    statusLabel = "Needs attention";
    statusClass = "attention";
  } else if (score < 80) {
    statusLabel = "Good";
    statusClass = "good";
  }

  return (
    <section className="health-score-card">
      <p className="health-score-card-label">Financial health</p>

      <div className="health-score-top">
        <h2 className="health-score-value">{score}</h2>
        <span className={`health-score-status ${statusClass}`}>{statusLabel}</span>
      </div>

      <p className="health-score-description">
        Based on average budget overspend across all tracked categories.
      </p>
    </section>
  );
}

export default HealthScoreCard;
