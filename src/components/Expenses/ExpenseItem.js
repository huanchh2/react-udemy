//a Component is just a function
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import {useState} from 'react';

function ExpenseItem(props) {

  //must be in function component, not nested, this means if title changes, the entire function rerenders 
  //first element is pointer to managed value, second element is a function used to update the value
  const [title, setTitle] = useState(props.title); 
  //each component has its OWN state, so triggers independently 
  //when this component initialized, React is smart enough not to reset the state, but use the state it currently has 

  const clickHandler = () => {
    setTitle('updated'); //this not only sets the value, but also triggers function to be re-rendered
    console.log('clicked')
  }

  return (
  //JSX, do not specify class, specify className
  //the Card componennt is nothing but a wrapper with class
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{Math.random()}</h2>
        <h2>{title}</h2>
        <h2 className="expense-item__price">${props.amount}</h2>
      </div>
      <button onClick={clickHandler}>change title</button>

    </Card>
      //example of showing state 
);
}

export default ExpenseItem;
