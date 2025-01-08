import React, { createContext, useContext } from 'react';

export function provideService<T>(serviceFactory: () => T) {
  const context = createContext<T>({} as T);
  return {
    useService() {
      return useContext(context);
    },
    ServiceProvider({ value, children }: { value?: T, children: React.ReactElement }) {
      const service = value || serviceFactory();
      return (
        <context.Provider value={service}>
          {children}
        </context.Provider>
      );
    }
  };
}