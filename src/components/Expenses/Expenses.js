import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

function Expenses(props) {
  console.log("expense called !! ");

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log("expenses js");
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  //store expenses that are filtered
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  //var can hold JSX
  let expenseJSX = <p>No expense found</p>;
  if (filteredExpenses.length > 0) {
    expenseJSX =
      filteredExpenses.length > 0 &&
      filteredExpenses.map((i, index) => (
        <ExpenseItem
          key={i.id}
          title={i.title}
          amount={i.amount}
          date={i.date}
        />
      ));
  }

  return (
    //&& is a JS trick where if first thing eval to true, second thing is printed out
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenseJSX}
      </Card>
    </div>
  );
}

export default Expenses;
