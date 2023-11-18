import DashboardProvider from '@/modules/dashboard/Dashboard.Provider';
import DashboardView from '@/modules/dashboard/Dashboard.View';

function DashboardContainer() {
  return (
    <DashboardProvider>
      <DashboardView />  
    </DashboardProvider>
  );
}

export default DashboardContainer;