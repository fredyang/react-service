// switch between the two imports to see the difference between the two implementations 
// import { CounterServiceProvider, useCounterService } from './counterService';
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


export default function Counter() {
  return (
    <CounterServiceProvider>
      <div>
        <CounterDisplay />
        <CounterControls />
      </div>
    </CounterServiceProvider>
  );
}