import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './css/style.css';

// Import pages

import { CreateReport, LaporanSaya, Dashboard, SharedLayout, LaporanTerkini, Profile, Signin, Signup, Landing, Datauser, DataLaporan, DetailLaporan, DataDetailLaporan } from './pages';
import {} from './partials/dashboard';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="report/laporansaya" element={<LaporanSaya />} />
          <Route path="report/laporansaya/laporanbaru" element={<CreateReport />} />
          <Route path="report/laporanterkini" element={<LaporanTerkini />} />
          <Route path="report/laporanterkini/detaillaporan" element={<DetailLaporan />} />
          <Route path="report/datauser" element={<Datauser />} />
          <Route path="report/datalaporan" element={<DataLaporan />} />
          <Route path="report/datalaporan/detaillaporan" element={<DataDetailLaporan />} />

          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="landing" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
