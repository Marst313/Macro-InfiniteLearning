import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

const SharedLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayout;
