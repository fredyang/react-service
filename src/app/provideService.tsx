import React, { createContext, useContext } from 'react';

export function provideService<T>(serviceFactory: () => T) {
  const context = createContext<T>({} as T);
  return {
    /**
     * Custom hook to access the service context.
     *
     * This hook provides access to the context value for the service.
     * It uses the `useContext` hook to retrieve the context value.
     *
     * @returns The current context value for the service.
     */
    useService() {
      return useContext(context);
    },

    /**
     * A React component that provides a service to its children via context.
     *
     * @template T - The type of the service.
     * @param {Object} props - The properties object.
     * @param {T} [props.value] - An optional service instance to provide. If not provided, a new instance will be created using `serviceFactory`.
     * @param {React.ReactElement} props.children - The child elements that will have access to the provided service.
     * @returns {JSX.Element} A context provider component that supplies the service to its children.
     */
    Service({ value, children }: { value?: T, children: React.ReactElement }) {
      const service = value || serviceFactory();
      return (
        <context.Provider value={service}>
          {children}
        </context.Provider>
      );
    }
  };
}