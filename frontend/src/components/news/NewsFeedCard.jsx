import "./NewsFeedCard.css";

function getRelativeTime(publishedAt) {
  const now = Date.now();
  const published = new Date(publishedAt).getTime();
  const diffSeconds = Math.floor((now - published) / 1000);

  if (diffSeconds < 60) return `${diffSeconds}s ago`;
  const diffMinutes = Math.floor(diffSeconds / 60);
  if (diffMinutes < 60) return `${diffMinutes}m ago`;
  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays}d ago`;
}

function NewsFeedCard({ item }) {
  const badgeClass =
    item.sentiment === "Bullish"
      ? "badge-teal"
      : item.sentiment === "Bearish"
      ? "badge-coral"
      : "badge-purple";

  return (
    <article className="news-feed-card">
      <div className="news-feed-top">
        <span className={`news-feed-badge ${badgeClass}`}>{item.sentiment}</span>
        <span className="news-feed-time">{getRelativeTime(item.publishedAt)}</span>
      </div>

      <h3 className="news-feed-title">{item.title}</h3>
      <p className="news-feed-source">{item.source}</p>
    </article>
  );
}

export default NewsFeedCard;
