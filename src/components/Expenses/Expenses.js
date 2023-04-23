import { Card } from "../UI/Card";
import { ExpenseItem } from "./ExpenseItem";
import "./Expenses.css";
import { ExpenseFilter } from "./ExpenseFilter";
import React, { useState } from "react";

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
        {filteredExpenses.length === 0 ? (
          <p>No EXPENSE FOR THE YEAR</p>
        ) : (
          filteredExpenses.map((e) => (
            <ExpenseItem
              key={e.id}
              title={e.title}
              price={e.amount}
              date={e.date}
            />
          ))
        )}
      </Card>
    </div>
  );
};
