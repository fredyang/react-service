import { useState } from 'react';
import { provideService } from './provideService';

const service = provideService(() => {
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

export const CounterService = service.Service;
export const useCounterService = service.useService;