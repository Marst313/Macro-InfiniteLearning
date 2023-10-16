import React from 'react';

import { Calender, Stats, WelcomeBanner } from '../partials/dashboard/';
import { useUserContext } from '../utils/userContext';
import { DashboardAdmin } from './';

function Dashboard() {
  const { user } = useUserContext();

  if (user === 'Admin') {
    return <DashboardAdmin />;
  }

  return (
    <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto mt-3">
        {/* Welcome banner */}
        <WelcomeBanner />

        {/* Cards */}
        <div className="grid grid-cols-12 gap-6">
          {/* Calender */}
          <Calender />
          {/* Statistik Laporan */}
          <Stats />
        </div>

        <div className="mt-10">
          <h1 className="text-bg-primary font-bold text-2xl">Laporan Yang Dibuat</h1>

          <div className="w-full mt-10 ">
            <ul>
              <li className="bg-bg-primary text-whiteSecondary grid grid-cols-5 px-5 rounded-md py-5 text-center ">
                <span>Nama Lengkap</span>
                <span>Tanggal</span>
                <span>Tipe Rusak</span>
                <span>Jalan Rusak</span>
                <span>Status</span>
              </li>

              <li className="px-5 text-blackSecondary py-5 grid grid-cols-5 text-center items-center">
                {/* Nama Lengkap */}
                <div className="flex items-center gap-2 justify-center">
                  <img src="" alt="Ganjer" className="w-5 h-5 rounded-full bg-slate-600" />
                  <div>
                    <h6 className="text-base text-blackSecondary">Ganjer</h6>
                    <p className="text-xs">3124127241</p>
                  </div>
                </div>
                {/* Tanggal */}
                <p>25-06-2023</p>
                {/* Tipe Rusak */}
                <p>Parah</p>
                {/* Jalan Rusak */}
                <p>Jalan Singodimejo</p>
                {/* Status */}
                <button className="bg-[#FAFF00] text-center flex justify-center items-center w-32 mx-auto rounded-sm py-3">Prosess</button>
              </li>

              <li className="px-5 text-blackSecondary py-5 grid grid-cols-5 text-center bg-[#EEE9FD] items-center">
                {/* Nama Lengkap */}
                <div className="flex items-center gap-2 justify-center">
                  <img src="" alt="Ganjer" className="w-5 h-5 rounded-full bg-slate-600" />
                  <div>
                    <h6 className="text-base text-blackSecondary">Ganjer</h6>
                    <p className="text-xs">3124127241</p>
                  </div>
                </div>
                {/* Tanggal */}
                <p>25-06-2023</p>
                {/* Tipe Rusak */}
                <p>Parah</p>
                {/* Jalan Rusak */}
                <p>Jalan Singodimejo</p>
                {/* Status */}
                <button className="bg-[#00FF0A] text-center flex justify-center items-center w-32 mx-auto rounded-sm py-3">Prosess</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
