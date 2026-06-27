import { useMemo, useState } from "react";
import Sidebar from "../components/layout/Sidebar.jsx";
import Topbar from "../components/layout/Topbar.jsx";
import ExpenseTable from "../components/expenses/ExpenseTable.jsx";
import AddExpenseModal from "../components/expenses/AddExpenseModal.jsx";
import MonthlySpendingChart from "../components/expenses/MonthlySpendingChart.jsx";
import mockExpenseList from "../data/mockExpenseList.js";
import "./DashboardLayout.css";
import "../components/expenses/ExpensePageHeader.css";

const categories = [
  "All",
  "Groceries",
  "Transport",
  "Dining",
  "Utilities",
  "Entertainment",
  "Health",
  "Subscription",
  "Fuel",
];

function ExpensesPage() {
  const [expenses, setExpenses] = useState(mockExpenseList);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredExpenses = useMemo(() => {
    if (activeCategory === "All") return expenses;
    return expenses.filter((item) => item.category === activeCategory);
  }, [activeCategory, expenses]);

  const handleAddExpense = (expense) => {
    setExpenses((current) => [expense, ...current]);
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main">
        <Topbar />

        <div className="expenses-page-header">
          <div>
            <h1 className="expenses-page-heading">Expenses</h1>
            <p className="expenses-page-subtitle">
              Track your recent spending and add new transactions.
            </p>
          </div>

          <div className="expenses-controls">
            <button
              type="button"
              className="expenses-add-button"
              onClick={() => setIsModalOpen(true)}
            >
              Add expense
            </button>

            <div className="expenses-category-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`expense-filter-chip${
                    activeCategory === category ? " active" : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <MonthlySpendingChart expenses={filteredExpenses} />
        <ExpenseTable items={filteredExpenses} />

        {isModalOpen && (
          <AddExpenseModal
            onClose={() => setIsModalOpen(false)}
            onAdd={handleAddExpense}
          />
        )}
      </div>
    </div>
  );
}

export default ExpensesPage;
