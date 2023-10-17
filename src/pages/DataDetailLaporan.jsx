import React, { useState } from 'react';
import { Map } from '../partials/laporansaya';

const DataDetailLaporan = () => {
  const [ditutup, setDitutup] = useState(false);

  return (
    <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto mt-3">
        <h1 className="text-bg-primary font-bold text-2xl">Detail laporan</h1>

        <div className="container w-full border-4 border-bg-primary h-96 rounded-lg overflow-hidden ">
          <Map />
        </div>

        <form className="flex justify-between mt-5" onSubmit={(e) => e.preventDefault()}>
          <div className="w-4/6 capitalize flex flex-col gap-3 ">
            <div className="flex flex-col  gap-2">
              <label htmlFor="keterangan">Kode Laporan</label>
              <input type="text" name="kode laporan" className="rounded-lg" disabled value="312312321" />
            </div>

            <div className="flex gap-3">
              <div className="flex flex-col  gap-2 w-1/2">
                <label htmlFor="keterangan">NIK</label>
                <input type="text" name="nik" className="rounded-lg" disabled value="312312321" />
              </div>
              <div className="flex flex-col  gap-2 w-1/2">
                <label htmlFor="keterangan">Pengirim</label>
                <input type="text" name="pengirim" className="rounded-lg" disabled value="Ganjer" />
              </div>
            </div>

            <div className="flex flex-col  gap-2">
              <label htmlFor="keterangan">Deskripsi Laporan</label>
              <textarea value="Jalan ini rasanya seperti naik kuda" name="keterangan" id="keterangan" rows="5" className="rounded-lg resize-none" disabled></textarea>
            </div>

            <div className="flex flex-col  gap-2">
              <label htmlFor="lokasi">Lokasi jalan rusak</label>
              <input type="text" name="lokasi" value="Jalan Singodimejo" id="lokasi" className="rounded-lg" disabled />
            </div>

            <div className="flex flex-col  gap-2">
              <label htmlFor="kondisi">Kondisi jalan</label>
              <select name="kondisi" className="rounded-lg" disabled value="Parah">
                <option value="parah">Parah</option>
                <option value="biasa">Biasa</option>
                <option value="sedang">Sedang</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col  justify-center mr-20">
            {ditutup ? (
              <button onClick={() => setDitutup(true)} className="mb-5 font-semibold text-xl bg-[#9A99A8] rounded-lg text-whiteSecondary py-3 ">
                Laporan Ditutup
              </button>
            ) : (
              <button onClick={() => setDitutup(true)} className="mb-5 font-semibold text-xl bg-[#059669] rounded-lg text-whiteSecondary py-3 ">
                Tutup Laporan
              </button>
            )}

            <div>
              <img src="https://images.unsplash.com/photo-1480859634854-2acf7a955d43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cm9hZHxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Selected" className="max-h-80 max-w-xs" />
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default DataDetailLaporan;
