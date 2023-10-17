import React from 'react';
import { dataLaporan } from '../utils/links/link';

const DataLaporan = () => {
  return (
    <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto mt-3">
        <div className="flex flex-col gap-5 justify-center  align-middle mt-10 px-10 max-[1300px]:mt-0">
          <div className="h-[44px]  flex flex-row gap-2 w-full align-middle ">
            <div className="basis-full">
              <h1 className="font-bold align-middle p-2  text-[24px]">Data Laporan</h1>
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

            <div className="basis-1/2 relative h-full">
              <button type="button" className="h-full w-full border-solid border-2 rounded-md border-[#059669] text-[#059669]  bg-transparent  inline-flex items-center justify-center   ">
                Export In Excel
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
                <svg className="w-7 h-7 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path fill="#4CAF50" d="M41,10H25v28h16c0.553,0,1-0.447,1-1V11C42,10.447,41.553,10,41,10z"></path>
                  <path fill="#FFF" d="M32 15H39V18H32zM32 25H39V28H32zM32 30H39V33H32zM32 20H39V23H32zM25 15H30V18H25zM25 25H30V28H25zM25 30H30V33H25zM25 20H30V23H25z"></path>
                  <path fill="#2E7D32" d="M27 42L6 38 6 10 27 6z"></path>
                  <path
                    fill="#FFF"
                    d="M19.129,31l-2.411-4.561c-0.092-0.171-0.186-0.483-0.284-0.938h-0.037c-0.046,0.215-0.154,0.541-0.324,0.979L13.652,31H9.895l4.462-7.001L10.274,17h3.837l2.001,4.196c0.156,0.331,0.296,0.725,0.42,1.179h0.04c0.078-0.271,0.224-0.68,0.439-1.22L19.237,17h3.515l-4.199,6.939l4.316,7.059h-3.74V31z"
                  ></path>
                </svg>
              </button>
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
      </div>
    </main>
  );
};

export default DataLaporan;
