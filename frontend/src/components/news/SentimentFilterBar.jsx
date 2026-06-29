import "./SentimentFilterBar.css";

const labels = ["All", "Bullish", "Bearish", "Neutral"];

function SentimentFilterBar({ active, onChange }) {
  return (
    <div className="sentiment-filter-bar">
      {labels.map((label) => (
        <button
          key={label}
          type="button"
          className={`sentiment-filter-chip${active === label ? " active" : ""}`}
          onClick={() => onChange(label)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default SentimentFilterBar;
