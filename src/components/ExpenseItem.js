//a Component is just a function
import './ExpenseItem.css'


function ExpenseItem(props) {
  //must have one root element per JSX
  //const expenseDate = new Date(2021, 2, 28)
  //const expenseTitle = 'Car Insurance'
  //const expenseAmount = 294.67

  const month = props.date.toLocaleString('en-US', { month: 'long'});
  const day = props.date.toLocaleString('en-US', { day: '2-digit'});
  const year = props.date.getFullYear();


  //JSX, do not specify class, specify className
  return (
    <div className="expense-item">
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
      <div className='expense-item__description'>
      <h2>{Math.random()}</h2>
      <h2>{props.tile}</h2>
      <h2 className='expense-item__price'>${props.amount}</h2>
      </div>
    </div>
  );
}

export default ExpenseItem;
