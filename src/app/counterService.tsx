import { createContext, useContext, useState } from 'react';

export interface CounterService {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CounterServiceContext = createContext({} as CounterService);

export const useCounterService = () => {
  return useContext(CounterServiceContext);
};

export const CounterServiceProvider = ({ value, children }: { value?: CounterService, children: React.ReactElement }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  const service = value || {
    count,
    increment,
    decrement,
  };

  return (
    <CounterServiceContext.Provider value={service}>
      {children}
    </CounterServiceContext.Provider>
  );
};
