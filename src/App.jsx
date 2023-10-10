import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './css/style.css';

// Import pages
import { LaporanSaya, Dashboard, SharedLayout, LaporanTerkini, Profile, Signin } from './pages';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="report/laporansaya" element={<LaporanSaya />} />
          <Route path="report/laporanterkini" element={<LaporanTerkini />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="signin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;
