import { Card } from "../UI/Card";
import "./Expenses.css";
import { ExpenseFilter } from "./ExpenseFilter";
import React, { useState } from "react";
import { ExpensesChart } from "./ExpensesChart";
import { ExpensesList } from "./ExpensesList";

export const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");
  const yearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((e) => {
    return e.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeYear={yearChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};
