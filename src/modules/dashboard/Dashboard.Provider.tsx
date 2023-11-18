'use client';

import { createContext, useMemo, useContext } from 'react';

export const DashboardContext = createContext({});

function DashboardProvider({ children }: { readonly children: React.ReactNode }) {
  const data = 5;

  const contextData = useMemo(() => ({
    data,
  }), [data]);

  return (
    <DashboardContext.Provider value={contextData}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  
  return context;
}

export default DashboardProvider;