import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (prop) => {
  function clickHandler() {}
  // const [title, setTitle] = useState(props.title);
  
  // const clickHandler = () => {
  //   setTitle('Updated!');
  //   console.log(title);
  // };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={prop.date} />
      <div className='expense-item__description'>
        <h2>{prop.title}</h2>
        <div className='expense-item__price'>${prop.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
