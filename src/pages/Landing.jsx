import React from 'react';
import Foto from '../img/people.png'
import Cerita from '../img/cerita.png'
import Layanan1 from '../img/layanan1.png'
import Layanan2 from '../img/layanan2.png'
import Layanan3 from '../img/layanan3.png'
import logo from '../img/logo.svg' 
import logobw from '../img/logobw.svg' 

const Landing = () => {
  return (
    <div>
      {/* Navbar */}
      <div className='bg-white w-screen h-14 flex flex-row items-center gap-x-6 justify-between px-32 py-8'>
        <div className='justify-items-start'>
          <div className='flex flex-row gap-5'>
              <img src={logobw} alt="logo" />
              <div className='font-semibold text-3xl mt-1'>Caretakers</div>
            </div>
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
        <div className="container text-white flex justify-center items-start flex-col gap-5">
          <div className='font-bold text-7xl'>Laporkan <br /> Masalahmu</div>
          <div className='text-md'>Sampaikan laporanmu langsung kepada <br /> instansi pemerintah yang berwenang</div>
          <div className='flex flex-row gap-5 items-center'>
          <div className='px-8 py-3 border-white border-2 rounded-xl mt-3 hover:bg-yellow-400'>About</div>
          <div className='px-8 py-3 mt-3 bg-yellow-400 rounded-xl'>Get Started →</div>
          </div>
        </div>
        {/* right side */}
        <div className='container flex justify-center items-center'>
          <img src={Foto} alt="people"className='h-5/6' />
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
      <div className='w-screen p-10'>
        <div className='text-center text-blue-600 text-4xl font-bold'>Layanan Kami</div>
        <div className='text-center text-md'>Kenali lebih lanjut tentang diperusahaan dan tim dibaliknya</div>
        <div className='flex flex-row justify-center gap-3'>
        {/* Card */}
        <div className='justify-around mt-5'>
          <div className='w-120 justify-center place-content-end px-4'>
          <img src={Layanan1} alt="layanan 1" className='w-80 mx-auto'/>
            <div className='text-center text-blue-600 font-semibold mt-5'>Laporkan Masalah Infrastruktur</div>
            <div className='text-center text-sm font-sm mt-5'>Kami menyediakan platform yang mudah digunakan di mana Anda dapat melaporkan berbagai masalah infrastruktur, mulai dari lubang dan trotoar yang rusak hingga lampu lalu lintas yang tidak berfungsi.</div>
          </div>
        </div>
        {/* Card */}
        <div className='justify-around mt-5'>
          <div className='w-120 justify-center place-content-end px-4'>
          <img src={Layanan2} alt="layanan 2" className='w-80 mx-auto'/>
            <div className='text-center text-blue-600 font-semibold mt-5'>Pemantauan Waktu Nyata</div>
            <div className='text-center text-sm font-sm mt-5'>Kami menggunakan teknologi tercanggih untuk memantau permasalahan yang dilaporkan secara real-time. Memastikan bahwa masalah ditangani secepat mungkin.</div>
          </div>
        </div>
        {/* Card */}
        <div className='justify-around mt-5'>
          <div className='w-120 justify-center place-content-end px-4'>
          <img src={Layanan3} alt="layanan 3" className='w-80 mx-auto'/>
            <div className='text-center text-blue-600 font-semibold mt-5'>Transparansi dan Akuntabilitas</div>
            <div className='text-center text-sm font-sm mt-5'>Kami berkomitmen terhadap transparansi dalam operasi kami. Anda dapat melacak perkembangan masalah yang dilaporkan dan melihat status perbaikan yang sedang berlangsung.</div>
          </div>
        </div>
        </div>
        </div>

        {/* Cara Kerja Page */}
      <div className='w-screen'>
      <div className='text-center text-blue-600 text-4xl font-bold mt-10'>Bagaimana Situs Web Ini Dapat Membantu Anda?</div>
      <div className='text-center text-md'>Kenali lebih lanjut tentang diperusahaan dan tim dibaliknya</div>
        <div className='flex flex-row justify-center gap-12 mt-5'>
          <div className='flex-col'>
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="100" fill="#0057FF" class="bi bi-file-earmark-plus-fill" viewBox="0 0 16 16">
              <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM8.5 7v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 1 0z"/>
            </svg>
            <div className=''>Buat Laporan</div>
          </div>
          <div className='flex-col'>
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="100" fill="#0057FF" class="bi bi-file-earmark-check-fill" viewBox="0 0 16 16">
              <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm1.354 4.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
          </svg>
            <div className=''>Verifikasi Laporan</div>
          </div>
          <div className='flex-col'>
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="100" viewBox="0 0 24 24" fill="#0057FF" ><path d="M12 2h-1v9H2v1a10 10 0 0 0 17.07 7.07A10 10 0 0 0 12 2z"></path></svg>
            <div className=''>Tindak Lanjut Laporan</div>
          </div>
          <div className='flex-col'>
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="100" fill="#0057FF" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
            <div className=''>Selesai</div>
          </div>
        </div>
      </div>

      {/* Tutorial */}
      <div className='p-16'>
      <div className='bg-blue-600 w-100  mt-10 px-1 py-1 flex flex-row rounded-lg'>
        {/* Text */}
        <div className='flex-col w-1/2 justify-start content-center text-white mx-16 my-28'>
          <div className='font-bold text-4xl'>Bagaimana Cara <br />Menggunakan Website Ini?</div>
          <div className='font-sm text-sm my-5'>Bingung cara menggunakan website ini?<br />Yuk tonton tutorial berikut.</div>
          <div className='font-bold text-sm hover:text-yellow-400'>Get Started →</div>
        </div>
        {/* Video */}
        <div class='bg-whiteSecondary w-1/2 flex items-center justify-center rounded-lg'>
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#0057FF" class="bi bi-play-fill" viewBox="0 0 16 16">
    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
  </svg>
</div>

      </div>
      </div>

      {/* Laporan Terkini */}
      <div className='w-screen px-10'>
        <div className='text-center text-blue-600 text-4xl font-bold'>Laporan Terkini</div>
        <div className='text-center text-md'>Temukan berita atau laporan terkini lainnya!</div>
        <div className='flex flex-row justify-center gap-3'>
        {/* Card */}
        <div className='justify-around mt-5'>
          <div className='w-120 justify-center place-content-end px-4'>
          <img src={Layanan1} alt="Berita 1" className='w-80 mx-auto'/>
            <div className='text-center text-blue-600 font-semibold mt-5'>Berita 1</div>
            <div className='text-center text-sm font-sm mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur expedita dignissimos, ab ad aliquid corporis asperiores dicta aut enim. Quidem.</div>
          </div>
        </div>
        {/* Card */}
        <div className='justify-around mt-5'>
          <div className='w-120 justify-center place-content-end px-4'>
          <img src={Layanan1} alt="Berita 2" className='w-80 mx-auto'/>
            <div className='text-center text-blue-600 font-semibold mt-5'>Berita 2</div>
            <div className='text-center text-sm font-sm mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur expedita dignissimos, ab ad aliquid corporis asperiores dicta aut enim. Quidem.</div>
          </div>
        </div>
        {/* Card */}
        <div className='justify-around mt-5'>
          <div className='w-120 justify-center place-content-end px-4'>
          <img src={Layanan1} alt="Berita 3" className='w-80 mx-auto'/>
            <div className='text-center text-blue-600 font-semibold mt-5'>Berita 3</div>
            <div className='text-center text-sm font-sm mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur expedita dignissimos, ab ad aliquid corporis asperiores dicta aut enim. Quidem.</div>
          </div>
        </div>
        {/* Card */}
        <div className='justify-around mt-5'>
          <div className='w-120 justify-center place-content-end px-4'>
          <img src={Layanan1} alt="Berita 4" className='w-80 mx-auto'/>
            <div className='text-center text-blue-600 font-semibold mt-5'>Berita 4</div>
            <div className='text-center text-sm font-sm mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur expedita dignissimos, ab ad aliquid corporis asperiores dicta aut enim. Quidem.</div>
          </div>
        </div>
        
        </div>
        </div>

      {/* Kontak Kami */}
      <div className='p-12 w-screen justify-center'>
        <div className='bg-whiteSecondary h-3/4 p-5 rounded-lg flex flex-row gap-10'>
            {/* Left content */}
          <div className='bg-blue-600 w-1/2 rounded-lg flex-col py-20 px-20'>
            <div className='text-white font-bold text-4xl'>Kontak Kami</div>
            <div className='text-sm text-white mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

            <div className='flex flex-row gap-5'>
              <div className='mt-5'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>
              </div>
              <div className='text-white text-base mt-4'>0274-1234423</div>
            </div>

            <div className='flex flex-row gap-5'>
              <div className='mt-5'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
              </svg>
              </div>
              <div className='text-white text-base mt-4'>info@x.com</div>
            </div>

            <div className='text-sm text-white mt-5'>Jalanin aja gatau sampe kapan no 69, Ohio.</div>

          </div>

            {/* Right content */}
            <div className='bg-white rounded-lg w-1/2 flex-col py-16 px-16 justify-end ml-auto'>
            <div className='text-blue-600 font-bold text-2xl'>Tulis Keluhan Anda</div>

            <div className='flex flex-row gap-5 justify-between'>

              <div className='mt-5'>
                <div for="Nama">Nama Lengkap</div>
                <input className='rounded-md mt-1 border-blue-600' type="text" name="" id="Nama" />
              </div>

              <div className='mt-5'>
                <div for="Email">Email</div>
                <input className='rounded-md mt-1 border-blue-600' type="text" name="" id="Email" />
              </div>

            </div>

              <div className='mt-5'>
                <div for="nohp">No Hp</div>
                <input className='rounded-md mt-1 border-blue-600 w-full' type="text" name="" id="nohp" />
              </div>

              <div className='mt-5'>
                <div for="pesan">Pesan</div>
                <textarea className='rounded-md mt-1 border-blue-600 w-full' type="text" name="" id="pesan" />
              </div>

          </div>

        </div>

      </div>

      {/* Footer */}
<div className='w-screen bg-blue-600 p-16'>
          <div className='flex flex-row items-center gap-x-6 justify-between text-white'>
        <div className='justify-items-start'>
          <div className='flex flex-row gap-5'>
              <img src={logo} alt="logo" />
              <div className='font-semibold text-3xl mt-1'>Caretakers</div>
            </div>
            <div className='text-sm mt-5'>Copyright ©2023 Caretakers. All Right Reserved</div>
        </div>
        <div className='justify-items-end mt-12 items-end flex flex-row gap-8'>
          <div className='text-sm hover:text-yellow-400 cursor-pointer'>About</div>
          <div className='text-sm hover:text-yellow-400 cursor-pointer'>User Guide</div>
          <div className='text-sm hover:text-yellow-400 cursor-pointer'>News & Update</div>
          <div className='text-sm hover:text-yellow-400 cursor-pointer'>Contact</div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Landing;
