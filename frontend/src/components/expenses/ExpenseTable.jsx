import "./ExpenseTable.css";

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

function ExpenseTable({ items }) {
  return (
    <section className="expense-table-card">
      <div className="expense-table-header">
        <h2>Recent expenses</h2>
      </div>

      <div className="expense-table-wrap">
        <table className="expense-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>
                  <span className="expense-chip">{item.category}</span>
                </td>
                <td>{item.description}</td>
                <td>{currencyFormatter.format(item.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ExpenseTable;
