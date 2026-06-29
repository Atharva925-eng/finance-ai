import { useMemo, useState } from "react";
import AppShell from "../components/layout/AppShell.jsx";
import NewsBanner from "../components/news/NewsBanner.jsx";
import SentimentFilterBar from "../components/news/SentimentFilterBar.jsx";
import NewsFeedCard from "../components/news/NewsFeedCard.jsx";
import mockNewsFeed from "../data/mockNewsFeed.js";
import "./DashboardLayout.css";
import "./MarketNewsPage.css";
import "../components/expenses/ExpensePageHeader.css";

function MarketNewsPage() {
  const [activeSentiment, setActiveSentiment] = useState("All");

  const filteredNews = useMemo(() => {
    if (activeSentiment === "All") return mockNewsFeed;
    return mockNewsFeed.filter((item) => item.sentiment === activeSentiment);
  }, [activeSentiment]);

  return (
    <AppShell>
      <div className="expenses-page-header">
          <div>
            <h1 className="expenses-page-heading">Market news</h1>
            <p className="expenses-page-subtitle">
              Filter market headlines by sentiment and stay updated.
            </p>
          </div>
        </div>

        <NewsBanner />

        <main className="market-news-main">
          <SentimentFilterBar
            active={activeSentiment}
            onChange={setActiveSentiment}
          <div className="news-feed-list">
            {filteredNews.map((item) => (
              <NewsFeedCard key={item.id} item={item} />
            ))}
          </div>
        </main>
      </AppShell>
  );
}

export default MarketNewsPage;
