import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {...enteredExpenseData, 
                        id: Math.random().toString()}
    
    console.log('in expanse form')
    console.log(expenseData)

    props.onAddExpanse(expenseData)
  }

  return (
    //we can pass in property from parent into child as a way for child ==> parent communication
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
