import React from "react";
import { ExpenseItem } from "./ExpenseItem";
import "./ExpensesList.css";

export const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">NO DATA FOUND</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((e) => (
        <ExpenseItem
          key={e.id}
          title={e.title}
          price={e.amount}
          date={e.date}
        />
      ))}
    </ul>
  );
};
