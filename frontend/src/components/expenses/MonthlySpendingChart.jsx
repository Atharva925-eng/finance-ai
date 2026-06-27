import { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import "./MonthlySpendingChart.css";

function MonthlySpendingChart({ expenses }) {
  const data = useMemo(() => {
    const groups = expenses.reduce((acc, expense) => {
      acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
      return acc;
    }, {});

    return Object.entries(groups).map(([category, total]) => ({
      category,
      total,
    }));
  }, [expenses]);

  return (
    <section className="spending-chart-card">
      <div className="spending-chart-header">
        <h3>Spending by category</h3>
      </div>
      <div className="spending-chart-wrapper">
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={data} margin={{ top: 16, right: 12, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
            <XAxis dataKey="category" tick={{ fill: "var(--color-text-secondary)", fontSize: 12 }} />
            <YAxis tick={{ fill: "var(--color-text-secondary)", fontSize: 12 }} />
            <Tooltip formatter={(value) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value)} />
            <Bar dataKey="total" fill="var(--color-primary)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default MonthlySpendingChart;
