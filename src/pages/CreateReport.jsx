import React, { useState } from 'react';

import { Map } from '../partials/laporansaya';
import { Link } from 'react-router-dom';

const CreateReport = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [newReport, setNewReport] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Handle the selected image, for example, you can display it or upload it to a server.
      setSelectedImage(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setNewReport(true);
  };

  return (
    <main>
      {newReport && (
        <div className="h-[80rem] w-screen bg-whiteSecondary bg-opacity-10 backdrop-blur-sm absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[999999] ">
          <div className={`flex items-center flex-col gap-5 w-80 py-7  p-5 text-bg-primary text-xl font-bold rounded-lg   bg-whiteSecondary absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
            <h3>Berhasil Lapor</h3>
            <p className="text-xs text-[#323238] text-opacity-70">Laporan Anda Sedang Diproses</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
            <button onClick={() => setNewReport(false)} className="text-base font-medium bg-bg-primary text-whiteSecondary w-full text-center rounded-md py-1 px-5">
              Ok
            </button>
          </div>
        </div>
      )}
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto mt-3">
        <div className="container w-full border-4 border-bg-primary h-96 rounded-lg overflow-hidden ">
          <Map />
        </div>

        <h1 className="my-5 text-3xl font-semibold text-bg-primary">Kirim Laporan Anda</h1>

        <form className="flex justify-between" onSubmit={handleSubmit}>
          <div className="w-4/6 capitalize flex flex-col gap-3 ">
            <div className="flex flex-col  gap-2">
              <label htmlFor="keterangan">Tuliskan laporan anda</label>
              <textarea placeholder="Jalan ini rasanya seperti naik kuda" name="keterangan" id="keterangan" rows="5" className="rounded-lg resize-none"></textarea>
            </div>

            <div className="flex flex-col  gap-2">
              <label htmlFor="lokasi">Lokasi jalan rusak</label>
              <input type="text" name="lokasi" placeholder="Dideket markas banteng" id="lokasi" className="rounded-lg" />
            </div>

            <div className="flex flex-col  gap-2">
              <label htmlFor="kondisi">Kondisi jalan</label>
              <select name="kondisi" className="rounded-lg">
                <option value="biasa">Biasa</option>
                <option value="sedang">Sedang</option>
                <option value="parah">Parah</option>
              </select>
            </div>
            <button type="submit" className="w-32 bg-bg-primary rounded-lg text-whiteSecondary px-3 py-2 font-semibold">
              Kirim
            </button>
          </div>

          <div className="flex flex-col  justify-center">
            {selectedImage && (
              <div>
                <img src={URL.createObjectURL(selectedImage)} alt="Selected" className="max-h-80 max-w-xs" />
              </div>
            )}
            <input type="file" id="imageUpload" accept="image/*" onChange={handleImageChange} className="mt-5" />
          </div>
        </form>
      </div>
    </main>
  );
};

export default CreateReport;
