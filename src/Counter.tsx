import { useState } from 'react';

import './App.css';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count => count + 1)}>+</button>
      <button onClick={() => setCount(count => count - 1)}>-</button>
      <p>count is {count}</p>
    </>
  );
}

export default Counter;
