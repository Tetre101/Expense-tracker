import "./ExpenseDate.css";

export const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const Day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{Day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};
