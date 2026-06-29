import AppShell from "../components/layout/AppShell.jsx";
import RecommendationCard from "../components/advisor/RecommendationCard.jsx";
import GoalCard from "../components/advisor/GoalCard.jsx";
import mockRecommendations from "../data/mockRecommendations.js";
import mockGoals from "../data/mockGoals.js";
import "./DashboardLayout.css";
import "./AIAdvisorPage.css";
import "../components/expenses/ExpensePageHeader.css";

function AIAdvisorPage() {
  return (
    <AppShell>
      <div className="expenses-page-header">
          <div>
            <h1 className="expenses-page-heading">AI advisor</h1>
            <p className="expenses-page-subtitle">
              Personalized financial recommendations and goal tracking.
            </p>
          </div>
        </div>

        <section className="advisor-section">
          <div className="advisor-section-header">
            <h2>Recommendations</h2>
            <p>Actionable savings and investment ideas for your portfolio.</p>
          </div>

          <div className="advisor-card-grid">
            {mockRecommendations.map((item) => (
              <RecommendationCard key={item.id} recommendation={item} />
            ))}
          </div>
        </section>

        <section className="advisor-section">
          <div className="advisor-section-header">
            <h2>Your goals</h2>
            <p>Track progress toward your financial targets.</p>
          </div>

          <div className="advisor-card-grid">
            {mockGoals.map((goal) => (
              <GoalCard key={goal.id} goal={goal} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default AIAdvisorPage;
