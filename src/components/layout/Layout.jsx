import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import { useState } from 'react';

const Layout = () => {
  const [pageTitle, setPageTitle] = useState('Dashboard');

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header title={pageTitle} />
        <main className="flex-1 p-6 overflow-auto">
          <Outlet context={{ setPageTitle }} />
        </main>
      </div>
    </div>
  );
};

export default Layout;
