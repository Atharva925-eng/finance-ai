import AppShell from "../components/layout/AppShell.jsx";
import NewsBanner from "../components/news/NewsBanner.jsx";
import ExpenseOverviewCard from "../components/dashboard/ExpenseOverviewCard.jsx";
import BudgetStatusCard from "../components/dashboard/BudgetStatusCard.jsx";
import TaxSnapshotCard from "../components/dashboard/TaxSnapshotCard.jsx";
import "./DashboardLayout.css";

function DashboardLayout() {
  return (
    <AppShell>
      <NewsBanner />

        <div className="dashboard-grid">
          <ExpenseOverviewCard />
          <BudgetStatusCard />
          <TaxSnapshotCard />
        </div>
      </AppShell>
  );
}

export default DashboardLayout;
