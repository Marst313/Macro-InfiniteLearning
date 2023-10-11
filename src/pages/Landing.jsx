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
      <div className='bg-bg-primary w-screen h-120 py-32 flex px-32'>
        {/* left side */}
        <div className="container text-white flex justify-center items-start flex-col">
          <div className='font-bold text-5xl'>Laporkan <br /> Masalahmu</div>
          <div className='text-md'>Sampaikan laporanmu langsung kepada <br /> instansi pemerintah yang berwenang</div>
          <div className='flex flex-row gap-5 items-center'>
          <div className='px-5 py-2 border-white border-2 rounded-lg mt-3 hover:bg-yellow-400'>About</div>
          <div className='px-5 py-2 mt-3 bg-yellow-400 rounded-lg'>Get Started →</div>
          </div>
        </div>
        {/* right side */}
        <div className='container flex justify-center items-end'>
          <img src="../img/people.png" alt="people" />
        </div>
      </div>

      {/* tentang perusahaan */}
      <div className='w-screen'>
      <div className='text-center text-blue-600 text-4xl font-bold mt-10'>Tentang Perusahaan</div>
      <div className='text-center text-md'>Kenali lebih lanjut tentang diperusahaan dan tim dibaliknya</div>
        <div className='flex flex-row'>
      <div className='bg-bg-primary w-5/12 h-96 mt-5 text-center text-white py-12 px-24 flex flex-col place-content-center rounded-r-lg'>
        <div className='font-bold text-4xl'>Cerita Kita</div>
        <div className='text-sm mt-5 text-justify'>Semuanya dimulai dengan visi bersama untuk menjadikan NTT tempat yang lebih baik untuk tinggal, bekerja, dan bepergian. Pada Tahun 2023, sekelompok individu yang penuh semangat berkumpul untuk mengatasi masalah mendesak mengenai masalah jalan dan infrastruktur di komunitas kita tercinta.</div>
      </div>
      <div className='w-5/12 h-96 mt-5 py-12 px-24 place-content-center justify-items-end'>
        <img src="../img/people.png" alt="Cerita" />
      </div>
      </div>
      </div>
    </div>
  );
};

export default Landing;
