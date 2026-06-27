import { Search, Mail, Bell } from "lucide-react";
import ThemeToggle from "./ThemeToggle.jsx";
import "./Topbar.css";

function Topbar({ userName = "Aarav Shah" }) {
  const initials = userName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <header className="topbar">
      <div className="topbar-search">
        <Search size={16} />
        <input type="text" placeholder="Search transactions, reports, news..." />
      </div>

      <div className="topbar-actions">
        <button className="topbar-icon-btn" aria-label="Mail">
          <Mail size={18} />
        </button>
        <button className="topbar-icon-btn" aria-label="Notifications">
          <Bell size={18} />
        </button>
        <ThemeToggle />

        <div className="topbar-divider" />

        <div className="topbar-profile">
          <div className="topbar-avatar">{initials}</div>
          <span className="topbar-username">{userName}</span>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
