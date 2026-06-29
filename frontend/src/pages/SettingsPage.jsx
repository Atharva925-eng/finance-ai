import { useMemo } from "react";
import AppShell from "../components/layout/AppShell.jsx";
import ProfileSection from "../components/settings/ProfileSection.jsx";
import PreferencesSection from "../components/settings/PreferencesSection.jsx";
import NotificationsSection from "../components/settings/NotificationsSection.jsx";
import "./DashboardLayout.css";
import "./SettingsPage.css";
import "../components/expenses/ExpensePageHeader.css";

function SettingsPage() {
  const sections = useMemo(
    () => [
      <ProfileSection key="profile" />,
      <PreferencesSection key="preferences" />,
      <NotificationsSection key="notifications" />,
    ],
    []
  );

  return (
    <AppShell>
      <div className="expenses-page-header">
          <div>
            <h1 className="expenses-page-heading">Settings</h1>
            <p className="expenses-page-subtitle">
              Update your profile, theme preferences, and notification settings.
            </p>
          </div>
        </div>

        <div className="settings-grid">
          {sections}
        </div>
      </AppShell>
  );
}

export default SettingsPage;
