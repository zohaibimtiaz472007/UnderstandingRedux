import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount
} from './redux/features/counterSlice'
import './App.css'

const App = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)
  const [num, setNum] = useState(5)

  return (
    <div className="app-container">
      <h1>{count}</h1>
      <p className="subtitle">Redux Counter</p>

      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        className="amount-input"
      />

      <div className="btn-group">
        <button
          className="btn increment"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <button
          className="btn decrement"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          className="btn amount-inc"
          onClick={() => dispatch(incrementByAmount(Number(num)))}
        >
          Increment By Amount
        </button>

        <button
          className="btn amount-dec"
          onClick={() => dispatch(decrementByAmount(Number(num)))}
        >
          Decrement By Amount
        </button>
      </div>
    </div>
  )
}

export default App
