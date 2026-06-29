import { useEffect, useState } from "react";
import AppShell from "../components/layout/AppShell.jsx";
import BudgetProgressList from "../components/budget/BudgetProgressList.jsx";
import CreateBudgetModal from "../components/budget/CreateBudgetModal.jsx";
import HealthScoreCard from "../components/budget/HealthScoreCard.jsx";
import Skeleton from "../components/shared/Skeleton.jsx";
import mockBudgets from "../data/mockBudgets.js";
import "./DashboardLayout.css";
import "../components/expenses/ExpensePageHeader.css";

function BudgetPage() {
  const [budgets, setBudgets] = useState(mockBudgets);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleCreateBudget = (budget) => {
    setBudgets((current) => [budget, ...current]);
  };

  return (
    <AppShell>
      <div className="expenses-page-header">
          <div>
            <h1 className="expenses-page-heading">Budgets</h1>
            <p className="expenses-page-subtitle">
              Create and track your monthly budget categories.
            </p>
          </div>

          <div className="expenses-controls">
            <button
              type="button"
              className="expenses-add-button"
              onClick={() => setIsModalOpen(true)}
            >
              Create budget
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="dashboard-grid">
            <Skeleton />
            <Skeleton />
          </div>
        ) : (
          <>
            <HealthScoreCard budgets={budgets} />
            <BudgetProgressList budgets={budgets} />
          </>
        )}

        {isModalOpen && (
          <CreateBudgetModal
            onClose={() => setIsModalOpen(false)}
            onCreate={handleCreateBudget}
          />
        )}
      </AppShell>
  );
}

export default BudgetPage;
