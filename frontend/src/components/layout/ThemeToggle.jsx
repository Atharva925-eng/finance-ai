import { Sun, Moon } from "lucide-react";
import { useAppState } from "../../context/AppStateContext.jsx";

function ThemeToggle() {
  const { theme, toggleTheme } = useAppState();

  return (
    <button
      className="topbar-icon-btn"
      aria-label="Toggle theme"
      onClick={toggleTheme}
    >
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}

export default ThemeToggle;
