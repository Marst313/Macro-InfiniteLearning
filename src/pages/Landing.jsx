import React from 'react';
import Foto from '../img/people.png';
import Cerita from '../img/cerita.png';
import logo from '../img/logo.svg';
import logobw from '../img/logobw.svg';
import layanan1 from '../img/layanan1.png';
import { Link } from 'react-router-dom';
import { beritaLanding, landingHelpers, layananLanding } from '../utils/links/link';

const Landing = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="bg-white w-screen h-14 flex flex-row items-center gap-x-6 justify-between px-32 py-8">
        <div className="justify-items-start">
          <div className="flex flex-row gap-5">
            <img src={logobw} alt="logo" />
            <div className="font-semibold text-3xl mt-1">Caretakers</div>
          </div>
        </div>

        <div className="justify-items-end flex flex-row">
          <a href="#about" className="px-5 py-2 text-blue-600 hover:text-yellow-400 cursor-pointer">
            About
          </a>
          <a href="#guide" className="px-5 py-2 text-blue-600 hover:text-yellow-400 cursor-pointer">
            User Guide
          </a>
          <a href="#laporanTerkini" className="px-5 py-2 text-blue-600 hover:text-yellow-400 cursor-pointer">
            News & Update
          </a>
          <a href="#kontak" className="px-5 py-2 text-blue-600 hover:text-yellow-400 cursor-pointer">
            Contact
          </a>
          <Link to="/signin" className="bg-bg-primary px-4 py-2 rounded-lg text-white font-bold cursor-pointer hover:bg-yellow-400">
            Sign In
          </Link>
        </div>
      </div>

      {/* Welcome Page */}
      <div className="bg-bg-primary w-screen h-120 py-8 flex px-32">
        {/* left side */}
        <div className="container text-white flex justify-center items-start flex-col gap-5">
          <div className="font-bold text-7xl">
            Laporkan <br /> Masalahmu
          </div>
          <div className="text-md">
            Sampaikan laporanmu langsung kepada <br /> instansi pemerintah yang berwenang
          </div>
          <div className="flex flex-row gap-5 items-center">
            <a href="#about" className="px-8 py-3 border-white border-2 rounded-xl mt-3 hover:bg-white hover:text-blue-600 hover:border-0">
              About
            </a>
            <Link to="/signup" className="px-8 py-3 mt-3 bg-white border-2 border-white text-blue-600 rounded-xl hover:bg-yellow-400 hover:text-white hover:border-0">
              Get Started →
            </Link>
          </div>
        </div>
        {/* right side */}
        <div className="container flex justify-center items-center">
          <img src={Foto} alt="people" className="h-5/6" />
        </div>
      </div>

      {/* tentang perusahaan */}
      <div id="about" className="w-screen">
        <div className="text-center text-blue-600 text-4xl font-bold mt-10">Tentang Perusahaan</div>
        <div className="text-center text-md">Kenali lebih lanjut tentang diperusahaan dan tim dibaliknya</div>
        <div className="flex flex-row">
          <div className="bg-bg-primary w-5/12 h-96 mt-5 text-center text-white py-12 px-24 flex flex-col place-content-center rounded-r-lg">
            <div className="font-bold text-4xl">Cerita Kita</div>
            <div className="text-sm mt-5 text-justify">
              Semuanya dimulai dengan visi bersama untuk menjadikan NTT tempat yang lebih baik untuk tinggal, bekerja, dan bepergian. Pada Tahun 2023, sekelompok individu yang penuh semangat berkumpul untuk mengatasi masalah mendesak
              mengenai masalah jalan dan infrastruktur di komunitas kita tercinta.
            </div>
          </div>
          <div className="w-5/12 px-24 place-content-center justify-items-end mt-8 ms-32">
            <img src={Cerita} alt="Cerita" className="h-5/6 flex justify-center" />
          </div>
        </div>
      </div>

      {/* Layanan Kami */}
      <div id="layananKami" className="w-screen px-10">
        <div className="text-center text-blue-600 text-4xl font-bold">Layanan Kami</div>
        <div className="text-center text-md">Kenali lebih lanjut tentang diperusahaan dan tim dibaliknya</div>
        <div className="flex flex-row justify-center gap-3">
          {/* Card */}
          <ul className="justify-center mt-5 flex flex-row gap-5">
            {layananLanding.map((item) => {
              return (
                <li className="w-[400px] justify-center text-center px-4" key={item.id}>
                  <div className='flex flex-col items-center justify-center'>
                    <img className='rounded-lg' src={layanan1} alt={item.judul} />
                    <div className='mt-5 mb-3 text-blue-600 font-bold text-lg'>{item.judul}</div>
                    <p className="text-center text-sm font-sm">{item.subjudul}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Cara Kerja Page */}
      <div id="caraKerja" className="w-screen py-10 px-32 relative">
        <div className="w-[75%] h-[2px] bg-[#66B3FF] absolute bottom-0 mb-28 -z-60 ml-16"></div>
        <div className="text-center text-blue-600 text-4xl font-bold mt-10">Bagaimana Situs Web Ini Dapat Membantu Anda?</div>
        <div className="text-center text-md">Kenali lebih lanjut tentang diperusahaan dan tim dibaliknya</div>
        <ul className="flex flex-row justify-between gap-12 mt-5  ">
          {landingHelpers.map((item) => {
            return (
              <li key={item.id} className="flex  flex-col items-center ">
                <div>{item.svg}</div>
                <h2>{item.title}</h2>
              </li>
            );
          })}
        </ul>
      </div>

      {/* User guide */}
      <div id="guide" className="w-screen p-16">
        <div className="bg-blue-600 w-100  mt-10 px-1 py-1 flex flex-row rounded-lg">
          {/* Text */}
          <div className="flex-col w-1/2 justify-start content-center text-white mx-16 my-28">
            <div className="font-bold text-4xl">
              Bagaimana Cara <br />
              Menggunakan Website Ini?
            </div>
            <div className="font-sm text-sm my-5">
              Bingung cara menggunakan website ini?
              <br />
              Yuk tonton tutorial berikut.
            </div>
            <div className="font-bold text-sm hover:text-yellow-400 cursor-pointer">Get Started →</div>
          </div>
          {/* video */}
          <div className='bg-whiteSecondary w-1/2 rounded-r-lg cursor-pointer'></div>
        </div>
      </div>

      {/* Laporan Terkini */}
      <div id="laporanTerkini" className="w-screen px-10">
        <div className="text-center text-blue-600 text-4xl font-bold">Laporan Terkini</div>
        <div className="text-center text-md">Temukan berita atau laporan terkini lainnya!</div>
        <div className="flex flex-row justify-center gap-3">
          {/* Card */}
          <div className="justify-around mt-5">
            <div className="w-120 justify-center flex flex-row">
              {beritaLanding.map((item) => {
                return(
                  <div className="mt-5 w-80 mx-5 justify-center text-center px-4" key={item.id}>
                    <div className='w-[300px] h-[350px] bg-blue-600 p-3 rounded-lg'>
                  <img className='rounded-lg items-center justify-center' src="" alt={item.judul} />
                    </div>
                <div className='mt-5 mb-3 text-blue-600 font-bold text-lg cursor-pointer'>{item.judul}</div>
                  <p>{item.subjudul}</p>
                </div>
              );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Kontak Kami */}
      <div id="kontak" className="p-12 w-screen justify-center">
        <div className="bg-whiteSecondary h-3/4 p-5 rounded-lg flex flex-row gap-10">
          {/* Left content */}
          <div className="bg-blue-600 w-1/2 rounded-lg flex-col py-20 px-20">
            <div className="text-white font-bold text-4xl">Kontak Kami</div>
            <div className="text-sm text-white mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>

            <div className="flex flex-row gap-5">
              <div className="mt-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                  <path
                    fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
              </div>
              <div className="text-white text-base mt-4">0274-1234423</div>
            </div>

            <div className="flex flex-row gap-5">
              <div className="mt-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                  <path
                    fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
              </div>
              <div className="text-white text-base mt-4">0274-1234423</div>
            </div>

            <div className="flex flex-row gap-5">
              <div className="mt-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                </svg>
              </div>
              <div className="text-white text-base mt-4">info@x.com</div>
            </div>

            <div className="text-sm text-white mt-5">Jalanin aja gatau sampe kapan no 69, Ohio.</div>
          </div>

          {/* Right content */}
          <form className="bg-white rounded-lg w-1/2 flex-col py-16 px-16 justify-end ml-auto">
            <div className="text-blue-600 font-bold text-2xl">Tulis Keluhan Anda</div>

            <div className="flex flex-row gap-5 justify-between">
              <div className="mt-5">
                <label for="Nama">Nama Lengkap</label>
                <input className="rounded-md mt-1 border-blue-600 w-[275px]" type="text" name="" id="Nama" />
              </div>

              <div className="mt-5">
                <label for="Email">Email</label>
                <input className="rounded-md mt-1 border-blue-600 w-[275px]" type="text" name="" id="Email" />
              </div>
            </div>

            <div className="mt-5">
              <label for="nohp">No Hp</label>
              <input className="rounded-md mt-1 border-blue-600 w-full" type="text" name="" id="nohp" />
            </div>

            <div className="mt-5">
              <label for="pesan">Pesan</label>
              <textarea className="rounded-md mt-1 border-blue-600 w-full" type="text" name="" id="pesan" />
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className=" w-screen bg-blue-600 p-16">
        <div className="flex flex-row items-center gap-x-6 justify-between text-white">
          <div className="justify-items-start">
            <div className="flex flex-row gap-5">
              <img src={logo} alt="logo" />
              <div className="font-semibold text-3xl mt-1">Caretakers</div>
            </div>
            <div className="text-sm mt-5">Copyright ©2023 Caretakers. All Right Reserved</div>
          </div>
          <div className="justify-items-end mt-12 items-end flex flex-row gap-8">
            <a href="#about" className="text-sm py-2 text-white hover:text-yellow-400 cursor-pointer">
              About
            </a>
            <a href="#guide" className="text-sm py-2 text-white hover:text-yellow-400 cursor-pointer">
              User Guide
            </a>
            <a href="#laporanTerkini" className="text-sm py-2 text-white hover:text-yellow-400 cursor-pointer">
              News & Update
            </a>
            <a href="#kontak" className="text-sm py-2 text-white hover:text-yellow-400 cursor-pointer">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
