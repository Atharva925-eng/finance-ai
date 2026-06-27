import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown, Minus, MapPin } from "lucide-react";
import mockNews from "../../data/mockNews.js";
import "./NewsBanner.css";

const sentimentConfig = {
  Bullish: { className: "badge-teal", Icon: TrendingUp },
  Bearish: { className: "badge-coral", Icon: TrendingDown },
  Neutral: { className: "badge-purple", Icon: Minus },
};

function NewsBanner() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % mockNews.length);
        setVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const item = mockNews[index];
  const { className, Icon } = sentimentConfig[item.sentiment];

  return (
    <section className="news-banner">
      <div className={`news-banner-content ${visible ? "fade-in" : "fade-out"}`}>
        <div className="news-banner-top">
          <span className={`news-badge ${className}`}>
            <Icon size={14} />
            {item.sentiment}
          </span>
          <span className="news-live">
            <span className="live-dot" />
            Live, updates every 3s
          </span>
        </div>

        <div className="news-banner-body">
          <p className="news-source">
            <MapPin size={12} />
            {item.source}
          </p>
          <h2 className="news-title">{item.title}</h2>
        </div>
      </div>

      <div className="news-dots">
        {mockNews.map((_, i) => (
          <button
            key={i}
            className={`news-dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Show news item ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default NewsBanner;
