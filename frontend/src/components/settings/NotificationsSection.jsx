import { useState } from "react";
import "./NotificationsSection.css";

function NotificationsSection() {
  const [settings, setSettings] = useState({
    budgetAlerts: true,
    weeklySummary: false,
    goalReminders: true,
    marketUpdates: false,
  });

  const toggleSetting = (key) => {
    setSettings((current) => ({
      ...current,
      [key]: !current[key],
    }));
  };

  return (
    <section className="notifications-section">
      <div className="section-header">
        <div>
          <h2>Notifications</h2>
          <p>Manage your notification preferences.</p>
        </div>
      </div>

      <div className="notification-list">
        <label className="notification-row">
          <span>Budget alerts</span>
          <input
            type="checkbox"
            checked={settings.budgetAlerts}
            onChange={() => toggleSetting("budgetAlerts")}
          />
        </label>

        <label className="notification-row">
          <span>Weekly summary</span>
          <input
            type="checkbox"
            checked={settings.weeklySummary}
            onChange={() => toggleSetting("weeklySummary")}
          />
        </label>

        <label className="notification-row">
          <span>Goal reminders</span>
          <input
            type="checkbox"
            checked={settings.goalReminders}
            onChange={() => toggleSetting("goalReminders")}
          />
        </label>

        <label className="notification-row">
          <span>Market updates</span>
          <input
            type="checkbox"
            checked={settings.marketUpdates}
            onChange={() => toggleSetting("marketUpdates")}
          />
        </label>
      </div>
    </section>
  );
}

export default NotificationsSection;
