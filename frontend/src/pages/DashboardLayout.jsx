import Sidebar from "../components/layout/Sidebar.jsx";
import Topbar from "../components/layout/Topbar.jsx";
import NewsBanner from "../components/news/NewsBanner.jsx";
import ExpenseOverviewCard from "../components/dashboard/ExpenseOverviewCard.jsx";
import BudgetStatusCard from "../components/dashboard/BudgetStatusCard.jsx";
import TaxSnapshotCard from "../components/dashboard/TaxSnapshotCard.jsx";
import "./DashboardLayout.css";

function DashboardLayout() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-main">
        <Topbar />
        <NewsBanner />

        <div className="dashboard-grid">
          <ExpenseOverviewCard />
          <BudgetStatusCard />
          <TaxSnapshotCard />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
