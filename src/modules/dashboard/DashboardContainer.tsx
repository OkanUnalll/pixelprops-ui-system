import DashboardProvider from '@/modules/dashboard/DashboardProvider';
import DashboardView from '@/modules/dashboard/DashboardView';

function DashboardContainer() {
  return (
    <DashboardProvider>
      <DashboardView />  
    </DashboardProvider>
  );
}

export default DashboardContainer;