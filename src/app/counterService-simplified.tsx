import { useState } from 'react';
import { provideService } from './provideService';

export const { ServiceProvider: CounterServiceProvider, useService: useCounterService } = provideService(() => {
  const [count, setCount] = useState(0);
  return {
    increment() {
      setCount(count + 1);
    },
    decrement() {
      setCount(count - 1);
    },
    count,
  };
});