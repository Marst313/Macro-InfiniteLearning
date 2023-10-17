import React from 'react';
import { dataLaporan } from '../utils/links/link';

const LaporanTerkini = () => {
  return (
    <div className="flex flex-col gap-5 justify-center  align-middle mt-10 px-10 max-[1300px]:mt-0">
      <div className="h-[44px]  flex flex-row gap-2 w-full align-middle ">
        <div className="basis-full">
          <h1 className="font-bold align-middle p-2  text-[24px]">Laporan terkini</h1>
        </div>
        <div className="basis-1/3">
          <label className="relative block h-full ">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg className=" w-6 h-6 fill-current text-[#0057FF]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
              </svg>
            </span>
            <input
              className="w-[449px] h-full  placeholder:text-[#0057FF] block bg-transparent  border border-[#0057FF] rounded-md pt-1.5 pl-11 pr-0 shadow-sm text-[12px] focus:ring-1 sm:text-sm"
              placeholder="Search Laporan"
              type="text"
              name="search"
            />
          </label>
        </div>
      </div>

      <ul className="grid grid-cols-3 max-[800px]:grid-cols-1 max-[1300px]:grid-cols-2 gap-5 ">
        {dataLaporan.map((item) => {
          return (
            <li key={item.id} className="justify-center bottom-2 border-solid border-2  border-sky-500 w-auto rounded-xl p-2 ">
              <img className="w-full h-80 mb-3 rounded-lg " src="https://picsum.photos/360/240" alt={item.jalan} />
              <h1 className="text-[20px] bold align-middle font-bold flex items-center ">{item.jalan}</h1>
              <div className="  flex flex-col items-center  ">
                <div className="flex flex-row w-full h-7">
                  <div className=" basis-full ">
                    <p className="text-xs/[28px] font-bold">{item.tipeRusak}</p>
                  </div>
                  <div className="basis-0 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="calendar">
                      <g fill="none" fill-rule="evenodd" stroke="#200E32" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(3 2)">
                        <line x1=".093" x2="17.917" y1="7.404" y2="7.404"></line>
                        <line x1="13.442" x2="13.451" y1="11.31" y2="11.31"></line>
                        <line x1="9.005" x2="9.014" y1="11.31" y2="11.31"></line>
                        <line x1="4.558" x2="4.567" y1="11.31" y2="11.31"></line>
                        <line x1="13.442" x2="13.451" y1="15.196" y2="15.196"></line>
                        <line x1="9.005" x2="9.014" y1="15.196" y2="15.196"></line>
                        <line x1="4.558" x2="4.567" y1="15.196" y2="15.196"></line>
                        <line x1="13.044" x2="13.044" y2="3.291"></line>
                        <line x1="4.966" x2="4.966" y2="3.291"></line>
                        <path d="M13.2382655,1.57919622 L4.77096342,1.57919622 C1.83427331,1.57919622 0,3.21513002 0,6.22222222 L0,15.2718676 C0,18.3262411 1.83427331,20 4.77096342,20 L13.2290015,20 C16.1749556,20 18,18.3546099 18,15.3475177 L18,6.22222222 C18.0092289,3.21513002 16.1842196,1.57919622 13.2382655,1.57919622 Z"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="basis-1/3 ">
                    <p className="h-full text-xs/[28px] text-right w-full ">{item.tanggal}</p>
                  </div>
                </div>
              </div>
              <div className="h-10">
                <p className="text-[#78778B] text-xs/[28px]">{item.deskripsi.slice(0, 30)}...</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LaporanTerkini;
