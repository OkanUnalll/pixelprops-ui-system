import { useContext } from 'react';
import { DashboardContext } from '@/modules/dashboard/DashboardProvider';

function useDashboard() {
  const context = useContext(DashboardContext);
  
  return context;
}

export default useDashboard;