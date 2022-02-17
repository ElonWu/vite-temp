import { Outlet } from 'react-router-dom';

import { DarkModeSwitch } from '@/components';

import logo from '@imgs/logo.png';

const Layout = () => {
  return (
    <div className="w-screen min-h-screen bg-back-4">
      <DarkModeSwitch />
      <main className="w-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
