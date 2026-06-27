import Sidebar from "../components/layout/Sidebar.jsx";
import Topbar from "../components/layout/Topbar.jsx";
import "./DashboardLayout.css";

function AIAdvisorPage() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main">
        <Topbar />
        <div
          style={{
            minHeight: "calc(100vh - 4rem)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <h1 style={{ color: "var(--color-text-secondary)", margin: 0 }}>
            AI advisor — coming soon
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AIAdvisorPage;
