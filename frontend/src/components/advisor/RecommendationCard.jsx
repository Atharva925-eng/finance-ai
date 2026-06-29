import "./RecommendationCard.css";

function RecommendationCard({ recommendation }) {
  const badgeClass = recommendation.type === "investment" ? "badge-teal" : "badge-purple";

  return (
    <article className="recommendation-card">
      <div className="recommendation-top">
        <span className={`recommendation-type ${badgeClass}`}>
          {recommendation.type === "investment" ? "Investment" : "Savings"}
        </span>
      </div>

      <h3 className="recommendation-title">{recommendation.title}</h3>
      <p className="recommendation-detail">{recommendation.detail}</p>
      <span className="recommendation-impact">{recommendation.impact}</span>
    </article>
  );
}

export default RecommendationCard;
