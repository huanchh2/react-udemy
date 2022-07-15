import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import {useState} from 'react';

const NewExpense = (props) => {

  const[isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {...enteredExpenseData, 
                        id: Math.random().toString()}
    
    console.log('in expanse form')
    console.log(expenseData)

    props.onAddExpanse(expenseData)
  }

   const startEdtingHandler = () => {
    setIsEditing(true);
   }

   const stopEditingHandler = () => {
    setIsEditing(false)
   }

  return (
    //we can pass in property from parent into child as a way for child ==> parent communication
    //in JS, && means the condition after that is printed
    <div className="new-expense">
      {!isEditing && <button onClick={startEdtingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
