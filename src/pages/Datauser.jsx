import React, { useState } from 'react';
import { dataPengguna } from '../utils/links/link';

const Datauser = () => {
  const [edit, setEdit] = useState(false);

  return (
    <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto mt-3">
        <div className="mt-10 flex justify-between p-1">
          <h2 className="text-blackSecondary font-semibold text-xl">Data Pengguna</h2>

          <div className="flex gap-5">
            <form className="relative">
              <svg className="w-4 h-4 absolute mt-3 ml-2 opacity-50" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-current text-bg-primary" d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                <path className="fill-current text-bg-primary" d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
              </svg>
              <input type="text" placeholder="Search Pengguna" className="px-5 py-2 rounded-lg w-96 border-bg-primary pl-7 placeholder:opacity-50 placeholder:text-bg-primary" />
            </form>
          </div>
        </div>

        <div className="w-full mt-10 ">
          <ul>
            <li className="bg-bg-primary text-whiteSecondary grid grid-cols-5 px-5 rounded-md py-5 text-center ">
              <span>Nama Lengkap</span>
              <span>Email</span>
              <span>No Hp</span>
              <span>Alamat</span>
              <span>Aksi</span>
            </li>

            {dataPengguna.map((pengguna) => {
              return (
                <li key={pengguna.id} className={`px-5 text-blackSecondary py-5 grid grid-cols-5 text-center items-center ${pengguna.id % 2 === 0 ? ' bg-[#cdbef9]  ' : ''}`}>
                  {/* Nama Lengkap */}
                  <div className="flex items-center gap-2 justify-center">
                    <img src={pengguna.img} alt={pengguna.nama} className="w-5 h-5 rounded-full bg-slate-600" />
                    <div>
                      <h6 className="text-base text-blackSecondary">{pengguna.nama}</h6>
                      <p className="text-xs w-20">{pengguna.nik}</p>
                    </div>
                  </div>
                  {/* Email */}
                  <p>{pengguna.email}</p>
                  {/* No Hp */}
                  <p>{pengguna.noHp}</p>
                  {/* Alamat */}
                  <p>{pengguna.alamat}</p>
                  {/* Aksi */}
                  <div className="flex gap-2 ">
                    <button className="bg-[#00FF0A] text-center flex justify-center items-center w-1/2 mx-auto rounded-lg py-3">Ubah</button>
                    <button className="bg-[#FF0000] text-center flex justify-center items-center w-1/2 mx-auto rounded-lg py-3 text-whiteSecondary">Hapus</button>
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

export default Datauser;
