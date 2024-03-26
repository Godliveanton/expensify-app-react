import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFillters from "./ExpenseListFilters";

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFillters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
