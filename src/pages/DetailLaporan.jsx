import React from 'react';
import { Map } from '../partials/laporansaya';

const DetailLaporan = () => {
  return (
    <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto mt-3">
        <h1 className="text-bg-primary font-bold text-2xl">Detail laporan</h1>

        <div className="container w-full border-4 border-bg-primary h-96 rounded-lg overflow-hidden ">
          <Map />
        </div>

        <form className="flex justify-between mt-5">
          <div className="w-4/6 capitalize flex flex-col gap-3 ">
            <div className="flex flex-col  gap-2">
              <label htmlFor="keterangan">Pembuat Laporan</label>
              <input type="text" name="deskripsi laporan" className="rounded-lg" disabled value="Ganjer" />
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

          <div className="flex flex-col mr-20 justify-center">
            <div>
              <img src="https://images.unsplash.com/photo-1480859634854-2acf7a955d43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cm9hZHxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Selected" className="max-h-80 max-w-xs" />
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default DetailLaporan;
