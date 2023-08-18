import react from "react";
import "./ExpenseDate.css";
import Card from "../UI/Card";

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString("es-CO", { month: "long" });
  const day = date.toLocaleString("es-CO", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <Card className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </Card>
  );
};

export default ExpenseDate;
