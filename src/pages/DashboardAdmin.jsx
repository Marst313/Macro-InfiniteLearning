import React from 'react';
import { Calender, Stats, WelcomeBanner } from '../partials/dashboard';

const DashboardAdmin = () => {
  return (
    <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto mt-3">
        <WelcomeBanner admin />

        <div className="grid grid-cols-12 gap-6">
          {/* Calender */}
          <Calender />
          {/* Statistik Laporan */}
          <Stats />
        </div>

        <h1 className="text-bg-primary font-bold text-2xl mt-5">Laporan Terbaru</h1>

        <div>
          <ul className="container mt-5 flex  justify-between gap-10 flex-wrap flex-col md:flex-row ">
            <li className="bg-bg-primary w-60 h-52 rounded-xl flex p-5 text-whiteSecondary cursor-pointer flex-col hover:bg-opacity-90 text-sm relative shadow-custom">
              <div className="flex items-center px-3 w-20 text-center h-8  bg-[#00FF0A] absolute top-0 right-0 -mt-5 -mr-5 text-blackSecondary">Selesai</div>

              <div className="flex flex-col items-end w-full text-xs text-whiteSecondary/70">
                <p>13-02-2023</p>
              </div>

              <h3 className="text-whiteSecondary/70">
                Reported by : <span>Ganjer </span>
              </h3>

              <article className="mt-3 flex flex-col gap-2">
                <img src="https://images.unsplash.com/photo-1541807360746-039080941306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="image" className="h-24 w-24" />

                <p>Jalan Megalitikum No 55, NTT </p>
              </article>
            </li>
            <li className="bg-bg-primary w-60 h-52 rounded-xl flex p-5 text-whiteSecondary cursor-pointer flex-col hover:bg-opacity-90 text-sm relative shadow-custom">
              <div className="flex items-center px-3 w-20 text-center h-8  bg-[#FAFF00] absolute top-0 right-0 -mt-5 -mr-5 text-blackSecondary">Prosses</div>

              <div className="flex flex-col items-end w-full text-xs text-whiteSecondary/70">
                <p>13-02-2023</p>
              </div>

              <h3 className="text-whiteSecondary/70">
                Reported by : <span>Ganjer </span>
              </h3>

              <article className="mt-3 flex flex-col gap-2">
                <img src="https://images.unsplash.com/photo-1541807360746-039080941306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="image" className="h-24 w-24" />

                <p>Jalan Megalitikum No 55, NTT </p>
              </article>
            </li>
            <li className="bg-bg-primary w-60 h-52 rounded-xl flex p-5 text-whiteSecondary cursor-pointer flex-col hover:bg-opacity-90 text-sm relative shadow-custom">
              <div className="flex items-center px-3 w-20 text-center h-8  bg-[#F9A319] absolute top-0 right-0 -mt-5 -mr-5 text-blackSecondary">Pending</div>

              <div className="flex flex-col items-end w-full text-xs text-whiteSecondary/70">
                <p>13-02-2023</p>
              </div>

              <h3 className="text-whiteSecondary/70">
                Reported by : <span>Ganjer </span>
              </h3>

              <article className="mt-3 flex flex-col gap-2">
                <img src="https://images.unsplash.com/photo-1541807360746-039080941306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="image" className="h-24 w-24" />

                <p>Jalan Megalitikum No 55, NTT </p>
              </article>
            </li>

            <li className="bg-bg-primary w-60 h-52 rounded-xl flex p-5 text-whiteSecondary cursor-pointer flex-col hover:bg-opacity-90 text-sm relative shadow-custom">
              <div className="flex items-center px-3 w-20 text-center h-8  bg-[#00FF0A] absolute top-0 right-0 -mt-5 -mr-5 text-blackSecondary">Selesai</div>

              <div className="flex flex-col items-end w-full text-xs text-whiteSecondary/70">
                <p>13-02-2023</p>
              </div>

              <h3 className="text-whiteSecondary/70">
                Reported by : <span>Ganjer </span>
              </h3>

              <article className="mt-3 flex flex-col gap-2">
                <img src="https://images.unsplash.com/photo-1541807360746-039080941306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="image" className="h-24 w-24" />

                <p>Jalan Megalitikum No 55, NTT </p>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default DashboardAdmin;
