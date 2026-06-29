import { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./Topbar.jsx";
import "./AppShell.css";

function AppShell({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen((current) => !current);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <div className="dashboard">
      <Sidebar isMobileOpen={isDrawerOpen} onClose={closeDrawer} />
      <div className="dashboard-main">
        <Topbar onHamburgerClick={toggleDrawer} />
        {children}
      </div>
    </div>
  );
}

export default AppShell;
