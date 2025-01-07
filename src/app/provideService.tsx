import React, { createContext, useContext } from 'react';

export interface Children {
  children: React.ReactElement
}

export function provideService<T>(serviceFactory: () => T) {
  const context = createContext<T>({} as T);
  return {
    useService() {
      return useContext(context);
    },
    ServiceProvider({ children }: Children) {
      const service = serviceFactory();
      return (
        <context.Provider value={service}>
          {children}
        </context.Provider>
      );
    }
  };

}