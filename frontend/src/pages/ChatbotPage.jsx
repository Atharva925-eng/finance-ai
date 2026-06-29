import AppShell from "../components/layout/AppShell.jsx";
import ChatWindow from "../components/chatbot/ChatWindow.jsx";
import "./DashboardLayout.css";
import "../components/expenses/ExpensePageHeader.css";

function ChatbotPage() {
  return (
    <AppShell>
      <div className="expenses-page-header">
          <div>
            <h1 className="expenses-page-heading">Chatbot</h1>
            <p className="expenses-page-subtitle">
              Ask finance questions and get quick guidance.
            </p>
          </div>
        </div>

        <div style={{ margin: "0 1.5rem 1.5rem" }}>
          <ChatWindow />
        </div>
      </AppShell>
  );
}

export default ChatbotPage;
