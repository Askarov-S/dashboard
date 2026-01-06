import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import StatCard from '../components/dashboard/StatCard';
import RevenueChart from '../components/dashboard/RevenueChart';
import UserGrowthChart from '../components/dashboard/UserGrowthChart';
import { statsData, revenueData, userGrowthData } from '../data/mockData';

const Dashboard = () => {
  const { setPageTitle } = useOutletContext();

  useEffect(() => {
    setPageTitle('Dashboard');
  }, [setPageTitle]);

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart data={revenueData} />
        <UserGrowthChart data={userGrowthData} />
      </div>
    </div>
  );
};

export default Dashboard;
