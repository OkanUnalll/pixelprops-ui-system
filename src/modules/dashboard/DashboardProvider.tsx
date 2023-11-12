'use client';

import { createContext, useMemo } from 'react';

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

export default DashboardProvider;