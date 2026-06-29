import "./EmptyState.css";

function EmptyState({ icon: Icon, title, description }) {
  return (
    <div className="empty-state-card">
      {Icon && <Icon size={40} className="empty-state-icon" />}
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default EmptyState;
