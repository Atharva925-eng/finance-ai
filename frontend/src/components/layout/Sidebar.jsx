import {
  Sparkles,
  LayoutDashboard,
  Receipt,
  Wallet,
  Calculator,
  Newspaper,
  Lightbulb,
  MessageCircle,
  Settings,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/" },
  { label: "Expenses", icon: Receipt, path: "/expenses" },
  { label: "Budget", icon: Wallet, path: "/budget" },
  { label: "Tax Assistant", icon: Calculator, path: "/tax" },
  { label: "Market News", icon: Newspaper, path: "/news" },
  { label: "AI Advisor", icon: Lightbulb, path: "/advisor" },
  { label: "Chatbot", icon: MessageCircle, path: "/chatbot" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <Sparkles size={20} className="sidebar-logo-icon" />
        <span>Finance OS</span>
      </div>

      <nav className="sidebar-nav">
        {navItems.map(({ label, icon: Icon, path }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              `sidebar-item${isActive ? " active" : ""}`
            }
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <NavLink to="/settings" className="sidebar-item">
          <Settings size={18} />
          <span>Settings</span>
        </NavLink>
        <a href="#" className="sidebar-item">
          <LogOut size={18} />
          <span>Logout</span>
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
