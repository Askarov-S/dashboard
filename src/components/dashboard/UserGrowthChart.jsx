import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';

const UserGrowthChart = ({ data }) => {
  const { theme } = useTheme();

  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Foydalanuvchilar O'sishi
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke={theme === 'dark' ? '#374151' : '#e5e7eb'}
          />
          <XAxis 
            dataKey="month" 
            stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'}
          />
          <YAxis 
            stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
              border: `1px solid ${theme === 'dark' ? '#374151' : '#e5e7eb'}`,
              borderRadius: '8px'
            }}
            labelStyle={{ color: theme === 'dark' ? '#f3f4f6' : '#1f2937' }}
          />
          <Bar 
            dataKey="users" 
            fill="#10b981"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserGrowthChart;
