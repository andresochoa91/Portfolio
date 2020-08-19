import React, { createContext } from 'react';

export const PortfolioContext = createContext<any>({});

export const Provider = (props: any) => {
  return (
    <PortfolioContext.Provider value={{}}>
      { props.children }
    </PortfolioContext.Provider>
  );
}