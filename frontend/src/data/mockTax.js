// frontend/src/data/mockTax.js

const mockTax = {
  estimatedLiability: 24500,
  deductionSuggestions: 5,
  period: "FY 2025-26",
};

export const annualIncome = 1200000;

export const incomeTaxSlabs = [
  {
    min: 0,
    max: 400000,
    rate: 0,
  },
  {
    min: 400000,
    max: 800000,
    rate: 0.05,
  },
  {
    min: 800000,
    max: 1200000,
    rate: 0.1,
  },
  {
    min: 1200000,
    max: 1600000,
    rate: 0.15,
  },
  {
    min: 1600000,
    max: 2000000,
    rate: 0.2,
  },
  {
    min: 2000000,
    max: 2400000,
    rate: 0.25,
  },
  {
    min: 2400000,
    max: Infinity,
    rate: 0.3,
  },
];

export const deductionSuggestions = [
  {
    name: "Employee Provident Fund (EPF)",
    section: "80C",
    potentialSavings: 150000,
  },
  {
    name: "Public Provident Fund (PPF)",
    section: "80C",
    potentialSavings: 50000,
  },
  {
    name: "Health Insurance Premium",
    section: "80D",
    potentialSavings: 25000,
  },
  {
    name: "Home Loan Interest",
    section: "24(b)",
    potentialSavings: 200000,
  },
  {
    name: "National Pension System (NPS)",
    section: "80CCD(1B)",
    potentialSavings: 50000,
  },
];

export default mockTax;