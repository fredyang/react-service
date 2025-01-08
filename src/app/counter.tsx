// switch between the two imports to see the difference between the two implementations 
// import { CounterServiceProvider, useCounterService } from './counterService';
import { useState } from 'react';
import { CounterServiceProvider, useCounterService } from './counterService-simplified';

function CounterControls() {
  const countService = useCounterService();
  return (
    <p>
      <button onClick={countService.increment}> Increment </button>
      <button onClick={countService.decrement}> Decrement </button>
    </p>
  );
}

function CounterDisplay() {
  const countService = useCounterService();
  return (
    <p>
      Count: {countService.count}
    </p>
  );
}


export function Counter() {
  return (
    <CounterServiceProvider>
      <div>
        <h2>Counter</h2>
        <CounterDisplay />
        <CounterControls />
      </div>
    </CounterServiceProvider>
  );
}

export function Counter2() {
  const [count, setCount] = useState(10);
  const service = {
    increment() {
      setCount(count + 2);
    },
    decrement() {
      setCount(count - 2);
    },
    count,
  };
  return (
    <CounterServiceProvider value={service}>
      <div>
        <h2>Counter 2</h2>
        <CounterDisplay />
        <CounterControls />
      </div>
    </CounterServiceProvider>
  );
}