import React from 'react';
import Foto from '../img/people.png'
import Cerita from '../img/cerita.png'
import Layanan1 from '../img/layanan1.png'
import Layanan2 from '../img/layanan2.png'
import Layanan3 from '../img/layanan3.png'

const Landing = () => {
  return (
    <div>
      {/* Navbar */}
      <div className='bg-white w-screen h-14 flex flex-row items-center gap-x-6 justify-between px-32'>
        <div className='justify-items-start'>
          <img src="" alt="logo" />
        </div>
        <div className='justify-items-end flex flex-row'>
          <div className='px-5 py-2 text-blue-600 hover:text-yellow-400 cursor-pointer'>About</div>
          <div className='px-5 py-2 text-blue-600 hover:text-yellow-400 cursor-pointer'>User Guide</div>
          <div className='px-5 py-2 text-blue-600 hover:text-yellow-400 cursor-pointer'>News & Update</div>
          <div className='px-5 py-2 text-blue-600 hover:text-yellow-400 cursor-pointer'>Contact</div>
        <div className='bg-bg-primary px-4 py-2 rounded-lg text-white font-bold cursor-pointer hover:bg-yellow-400'>Sign In</div>
        </div>
      </div>

      {/* Welcome Page */}
      <div className='bg-bg-primary w-screen h-120 py-8 flex px-32'>
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
        <div className='container flex justify-center items-center'>
          <img src={Foto} alt="people"className='h-5/12' />
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
      <div className='w-5/12 px-24 place-content-center justify-items-end mt-8 ms-32'>
        <img src={Cerita} alt="Cerita" className='h-5/6 flex justify-center' />
      </div>
      </div>
      </div>

      {/* Layanan Kami */}
      <div className='w-screen'>
        <div className='text-center text-blue-600 text-4xl font-bold mt-10'>Layanan Kami</div>
        <div className='text-center text-md'>Kenali lebih lanjut tentang diperusahaan dan tim dibaliknya</div>
        <div>
        <div className='flex flex-row justify-center items-stretch gap-3'>
        {/* Card */}
        <div className='flex flex-row justify-around mt-5'>
          <div className='w-120 justify-center place-content-end px-4'>
          <img src={Layanan1} alt="layanan 1" className='w-80 mx-auto'/>
            <div className='text-center text-blue-600 font-semibold mt-5'>Laporkan Masalah Infrastruktur</div>
            <div className='text-center text-sm font-sm mt-5'>Kami menyediakan platform yang mudah digunakan di mana Anda dapat melaporkan berbagai masalah infrastruktur, mulai dari lubang dan trotoar yang rusak hingga lampu lalu lintas yang tidak berfungsi.</div>
          </div>
        </div>
        {/* Card */}
        <div className='flex flex-row justify-around mt-5'>
          <div className='w-120 justify-center place-content-end px-4'>
          <img src={Layanan2} alt="layanan 1" className='w-80 mx-auto'/>
            <div className='text-center text-blue-600 font-semibold mt-5'>Pemantauan Waktu Nyata</div>
            <div className='text-center text-sm font-sm mt-5'>Kami menggunakan teknologi tercanggih untuk memantau permasalahan yang dilaporkan secara real-time. Memastikan bahwa masalah ditangani secepat mungkin.</div>
          </div>
        </div>
        {/* Card */}
        <div className='flex flex-row justify-around mt-5'>
          <div className='w-120 justify-center place-content-end px-4'>
          <img src={Layanan3} alt="layanan 1" className='w-80 mx-auto'/>
            <div className='text-center text-blue-600 font-semibold mt-5'>Transparansi dan Akuntabilitas</div>
            <div className='text-center text-sm font-sm mt-5'>Kami berkomitmen terhadap transparansi dalam operasi kami. Anda dapat melacak perkembangan masalah yang dilaporkan dan melihat status perbaikan yang sedang berlangsung.</div>
          </div>
        </div>

        {/*  */}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
