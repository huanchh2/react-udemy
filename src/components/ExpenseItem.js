//a Component is just a function
import './ExpenseItem.css'
import ExpenseDate  from './ExpenseDate';

function ExpenseItem(props) {
  //must have one root element per JSX
  //const expenseDate = new Date(2021, 2, 28)
  //const expenseTitle = 'Car Insurance'
  //const expenseAmount = 294.67

  

  //JSX, do not specify class, specify className
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
      <h2>{Math.random()}</h2>
      <h2>{props.tile}</h2>
      <h2 className='expense-item__price'>${props.amount}</h2>
      </div>
    </div>
  );
}

export default ExpenseItem;
