import '../Style/Counter.css';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/counterSlice';

const Counter = () => { 

    const counter = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();

  return (

    <div className="main">
    <div className="counter">

    <button id="decrease"
    onClick={()=>dispatch(decrement())}
    >-</button>

    <div className="count">{counter}</div>

    <button id="increase"
     onClick={()=>dispatch(increment())}
    >+</button>
    
  </div>
  </div>
  )
}

export default Counter
