import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementMultiplier,
  decrementMultiplier,
} from '../redux/slice/counterSlice';
import { useState } from 'react';
export default function Counter() {
  const count = useSelector((state) => state.counterStore.count);
  const dispatch = useDispatch();
  const [multiplier, setMultiplier] = useState(10);
  return (
    <div>
      <h3>Counter : {count}</h3>
      <button onClick={() => dispatch(increment())}>add</button> &nbsp;
      <button onClick={() => dispatch(decrement())}>remove</button>
      <br /> <br />
      <input
        type="text"
        value={multiplier}
        onChange={(e) => setMultiplier(e.target.value)}
      />
      <br />
      <button onClick={() => dispatch(incrementMultiplier(multiplier))}>
        add
      </button>{' '}
      &nbsp;
      <button onClick={() => dispatch(decrementMultiplier(multiplier))}>
        remove
      </button>
    </div>
  );
}
