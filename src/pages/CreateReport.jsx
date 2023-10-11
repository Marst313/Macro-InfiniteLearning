import React, { useState } from 'react';

import { Map } from '../partials/laporansaya';

const CreateReport = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Handle the selected image, for example, you can display it or upload it to a server.
      setSelectedImage(file);
    }
  };

  return (
    <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto mt-3">
        <div className="container w-full border-4 border-bg-primary h-96 rounded-lg overflow-hidden ">
          <Map />
        </div>

        <h1 className="my-5 text-3xl font-semibold text-bg-primary">Kirim Laporan Anda</h1>

        <form className="flex justify-between ">
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
