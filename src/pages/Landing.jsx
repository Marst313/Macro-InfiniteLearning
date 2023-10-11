import React from 'react';

const Landing = () => {
  return (
    <div>
      {/* Navbar */}
      <div className='bg-white w-screen h-14 flex flex-row items-center gap-x-6 justify-between px-32'>
        <div className='justify-items-start'>
          <img src="" alt="logo" />
        </div>
        <div className='justify-items-end flex flex-row'>
          <div className='px-5 py-2 text-blue-800 hover:text-yellow-400 cursor-pointer'>About</div>
          <div className='px-5 py-2 text-blue-800 hover:text-yellow-400 cursor-pointer'>User Guide</div>
          <div className='px-5 py-2 text-blue-800 hover:text-yellow-400 cursor-pointer'>News & Update</div>
          <div className='px-5 py-2 text-blue-800 hover:text-yellow-400 cursor-pointer'>Contact</div>
        <div className='bg-bg-primary px-4 py-2 rounded-lg text-white font-bold cursor-pointer hover:bg-yellow-400'>Sign In</div>
        </div>
      </div>

      {/* Welcome Page */}
      <div className='bg-bg-primary w-screen h-100 py-32 flex px-32'>
        {/* left side */}
        <div className="container mx-auto text-white flex justify-center items-start flex-col">
          <div className='font-bold text-5xl'>Laporkan <br /> Masalahmu</div>
          <div className='text-md'>Sampaikan laporanmu langsung kepada <br /> instansi pemerintah yang berwenang</div>
          <div className='flex flex-row gap-5 items-center'>
          <div className='px-5 py-2 border-white border-2 rounded-lg mt-3 hover:bg-yellow-400'>About</div>
          <div className='px-5 py-2 mt-3 bg-yellow-400 rounded-lg'>Get Started →</div>
          </div>
        </div>
        {/* right side */}
        <div className='container mx-auto flex justify-center items-end'>
          <img src="../img/people.png" alt="people" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
