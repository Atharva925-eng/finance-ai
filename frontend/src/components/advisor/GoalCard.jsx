import "./GoalCard.css";

function GoalCard({ goal }) {
  const percent = Math.min(100, Math.round((goal.savedAmount / goal.targetAmount) * 100));

  return (
    <article className="goal-card">
      <div className="goal-card-top">
        <h3>{goal.name}</h3>
        <span className="goal-deadline">Due {new Date(goal.deadline).toLocaleDateString("en-GB")}</span>
      </div>

      <div className="goal-progress-bar">
        <div className="goal-progress-fill" style={{ width: `${percent}%` }} />
      </div>

      <div className="goal-meta">
        <span>{percent}% saved</span>
        <span>
          ₹{goal.savedAmount.toLocaleString("en-IN")} / ₹{goal.targetAmount.toLocaleString("en-IN")}
        </span>
      </div>
    </article>
  );
}

export default GoalCard;
