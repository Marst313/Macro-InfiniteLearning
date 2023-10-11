import React from 'react';

const LaporanTerkini = () => {
  return (
    <div className="flex flex-col gap-5 justify-center  align-middle mt-10 px-10 max-[1300px]:mt-0">

          <div className="h-[44px]  flex flex-row gap-2 w-full align-middle ">
            <div className="basis-full"><h1 className='font-bold align-middle p-2  text-[24px]'>laporan terkini</h1></div>
            
            <div className="basis-1/3"> 
            <label className="relative block h-full">   
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg className=" w-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
                  </svg>
              </span>
              <input className="w-[449px] h-full placeholder:italic placeholder:text-[#0057FF] block bg-transparent  border border-[#0057FF] rounded-md py-2 pl-9 pr-3 shadow-sm text-[12px] focus:ring-1 sm:text-sm" placeholder="Search Laporan" type="text" name="search"/>
            </label>
             </div>


            <div className="basis-1/2 relative h-full">
              <button type="button" className="h-full w-full border-solid border-2 rounded-md border-[#059669] text-[#059669]  bg-transparent  inline-flex items-center justify-center   ">
              Export In Excel
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </button>
            </div>

          </div>

      <div className="grid grid-cols-3 max-[800px]:grid-cols-1 max-[1300px]:grid-cols-2 gap-5 ">
          
        <div className="justify-center bottom-2 border-solid border-2  border-sky-500 w-auto rounded-xl p-2 ">
              <img className="w-full h-80 mb-3 rounded-lg " src="https://picsum.photos/360/240" alt="" /> 
              <h1 className="text-[20px] bold align-middle font-bold flex items-center ">jalannya sampai sini </h1>
                <div className="  flex flex-col items-center  ">
                  <div className="flex flex-row w-full ">
                    <div className=" basis-full">
                    <p className="text-xs/[28px] font-bold">Rusak Berat</p>
                    </div>
                    <div className="basis-0">
                    <svg className=" w-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
                    </svg>
                    </div>
                    <div className="basis-1/3">
                    <p className="h-full text-xs/[28px] text-right w-full ">09-09-2019</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className="text-[#78778B] text-xs/[28px]">Lorem ipsum dolor sit,Lorem ipsum dolor sit, 
                    amet consectetur adipisicing elit. Laudantium, similique!
                  </p>
                </div>
        </div>

        <div className="justify-center bottom-2 border-solid border-2  border-sky-500 w-auto rounded-xl p-2 ">
              <img className="w-full h-80 mb-3 rounded-lg " src="https://picsum.photos/360/240" alt="" /> 
              <h1 className="text-[20px] bold align-middle font-bold flex items-center ">jalannya sampai sini </h1>
                <div className="  flex flex-col items-center  ">
                  <div className="flex flex-row w-full ">
                    <div className=" basis-full">
                    <p className="text-xs/[28px] font-bold">Rusak Berat</p>
                    </div>
                    <div className="basis-0">
                    <svg className=" w-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
                    </svg>
                    </div>
                    <div className="basis-1/3">
                    <p className="h-full text-xs/[28px] text-right w-full ">09-09-2019</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className="text-[#78778B] text-xs/[28px]">Lorem ipsum dolor sit,Lorem ipsum dolor sit, 
                    amet consectetur adipisicing elit. Laudantium, similique!
                  </p>
                </div>
        </div>

        <div className="justify-center bottom-2 border-solid border-2  border-sky-500 w-auto rounded-xl p-2 ">
              <img className="w-full h-80 mb-3 rounded-lg " src="https://picsum.photos/360/240" alt="" /> 
              <h1 className="text-[20px] bold align-middle font-bold flex items-center ">jalannya sampai sini </h1>
                <div className="  flex flex-col items-center  ">
                  <div className="flex flex-row w-full ">
                    <div className=" basis-full">
                    <p className="text-xs/[28px] font-bold">Rusak Berat</p>
                    </div>
                    <div className="basis-0">
                    <svg className=" w-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
                    </svg>
                    </div>
                    <div className="basis-1/3">
                    <p className="h-full text-xs/[28px] text-right w-full ">09-09-2019</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className="text-[#78778B] text-xs/[28px]">Lorem ipsum dolor sit,Lorem ipsum dolor sit, 
                    amet consectetur adipisicing elit. Laudantium, similique!
                  </p>
                </div>
        </div>

        <div className="justify-center bottom-2 border-solid border-2  border-sky-500 w-auto rounded-xl p-2 ">
              <img className="w-full h-80 mb-3 rounded-lg " src="https://picsum.photos/360/240" alt="" /> 
              <h1 className="text-[20px] bold align-middle font-bold flex items-center ">jalannya sampai sini </h1>
                <div className="  flex flex-col items-center  ">
                  <div className="flex flex-row w-full ">
                    <div className=" basis-full">
                    <p className="text-xs/[28px] font-bold">Rusak Berat</p>
                    </div>
                    <div className="basis-0">
                    <svg className=" w-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
                    </svg>
                    </div>
                    <div className="basis-1/3">
                    <p className="h-full text-xs/[28px] text-right w-full ">09-09-2019</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className="text-[#78778B] text-xs/[28px]">Lorem ipsum dolor sit,Lorem ipsum dolor sit, 
                    amet consectetur adipisicing elit. Laudantium, similique!
                  </p>
                </div>
        </div>

        <div className="justify-center bottom-2 border-solid border-2  border-sky-500 w-auto rounded-xl p-2 ">
              <img className="w-full h-80 mb-3 rounded-lg " src="https://picsum.photos/360/240" alt="" /> 
              <h1 className="text-[20px] bold align-middle font-bold flex items-center ">jalannya sampai sini </h1>
                <div className="  flex flex-col items-center  ">
                  <div className="flex flex-row w-full ">
                    <div className=" basis-full">
                    <p className="text-xs/[28px] font-bold">Rusak Berat</p>
                    </div>
                    <div className="basis-0">
                    <svg className=" w-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
                    </svg>
                    </div>
                    <div className="basis-1/3">
                    <p className="h-full text-xs/[28px] text-right w-full ">09-09-2019</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className="text-[#78778B] text-xs/[28px]">Lorem ipsum dolor sit,Lorem ipsum dolor sit, 
                    amet consectetur adipisicing elit. Laudantium, similique!
                  </p>
                </div>
        </div>


      </div>
   </div>
  );
};

export default LaporanTerkini;