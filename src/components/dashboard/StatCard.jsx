import { TrendingUp, TrendingDown } from 'lucide-react';

const StatCard = ({ stat }) => {
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
            {stat.title}
          </p>
          <p className="text-3xl font-bold text-gray-800 dark:text-white">
            {stat.value}
          </p>
        </div>
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center ${
            stat.trend === 'up'
              ? 'bg-green-100 dark:bg-green-900'
              : 'bg-red-100 dark:bg-red-900'
          }`}
        >
          {stat.trend === 'up' ? (
            <TrendingUp className="text-green-600 dark:text-green-400" size={24} />
          ) : (
            <TrendingDown className="text-red-600 dark:text-red-400" size={24} />
          )}
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <span
          className={`text-sm font-medium ${
            stat.trend === 'up'
              ? 'text-green-600 dark:text-green-400'
              : 'text-red-600 dark:text-red-400'
          }`}
        >
          {stat.change}
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
          o'tgan oyga nisbatan
        </span>
      </div>
    </div>
  );
};

export default StatCard;
