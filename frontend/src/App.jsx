import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./pages/DashboardLayout.jsx";
import ExpensesPage from "./pages/ExpensesPage.jsx";
import BudgetPage from "./pages/BudgetPage.jsx";
import TaxAssistantPage from "./pages/TaxAssistantPage.jsx";
import MarketNewsPage from "./pages/MarketNewsPage.jsx";
import AIAdvisorPage from "./pages/AIAdvisorPage.jsx";
import ChatbotPage from "./pages/ChatbotPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />} />
      <Route path="/expenses" element={<ExpensesPage />} />
      <Route path="/budget" element={<BudgetPage />} />
      <Route path="/tax" element={<TaxAssistantPage />} />
      <Route path="/news" element={<MarketNewsPage />} />
      <Route path="/advisor" element={<AIAdvisorPage />} />
      <Route path="/chatbot" element={<ChatbotPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
}

export default App;
