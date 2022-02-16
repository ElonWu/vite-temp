import { Outlet } from 'react-router-dom';

import { DarkModeSwitch } from '@/components';

import logo from '@imgs/logo.png';

const Layout = () => {
  return (
    <div>
      <DarkModeSwitch />

      <img src={logo} />
      <main className="w-screen h-screen bg-primary-200">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
