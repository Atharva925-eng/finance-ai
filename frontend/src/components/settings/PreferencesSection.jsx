import { useEffect, useState } from "react";
import "./PreferencesSection.css";

function PreferencesSection() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <section className="preferences-section">
      <div className="section-header">
        <div>
          <h2>Preferences</h2>
          <p>Choose your display preferences.</p>
        </div>
      </div>

      <div className="preference-row">
        <div>
          <span className="preference-label">Dark mode</span>
          <p className="preference-description">
            Toggle between light and dark themes.
          </p>
        </div>

        <button
          type="button"
          className="preference-toggle"
          onClick={toggleTheme}
        >
          {theme === "light" ? "Switch to dark" : "Switch to light"}
        </button>
      </div>
    </section>
  );
}

export default PreferencesSection;
