import AppShell from "../components/layout/AppShell.jsx";
import TaxCalculatorForm from "../components/tax/TaxCalculatorForm.jsx";
import DeductionList from "../components/tax/DeductionList.jsx";
import TaxReportPreview from "../components/tax/TaxReportPreview.jsx";
import mockDeductions from "../data/mockDeductions.js";
import "./DashboardLayout.css";
import "../components/expenses/ExpensePageHeader.css";

function TaxAssistantPage() {
  return (
    <AppShell>
      <div className="expenses-page-header">
          <div>
            <h1 className="expenses-page-heading">Tax assistant</h1>
            <p className="expenses-page-subtitle">
              Estimate taxes and review deductible savings.
            </p>
          </div>
        </div>

        <TaxCalculatorForm />
        <DeductionList deductions={mockDeductions} />
        <TaxReportPreview />
      </AppShell>
  );
}

export default TaxAssistantPage;
