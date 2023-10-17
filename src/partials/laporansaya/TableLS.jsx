import React, { useEffect, useState } from 'react';
import { laporanSaya } from '../../utils/links/link';

const TableLS = ({ search }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(laporanSaya);
  }, []);

  useEffect(() => {
    const searchData = data.filter((item) => {
      return item.jalan.toLowerCase().includes(search.toLowerCase());
    });

    setData(searchData);

    if (search === '') {
      setData(laporanSaya);
    }
  }, [search]);

  if (data.length === 0) {
    return <h1>Tidak ada laporan di jalan {search}</h1>;
  }

  return (
    <div className="w-full mt-10 ">
      <ul>
        <li className="bg-bg-primary text-whiteSecondary grid grid-cols-5 px-5 rounded-md py-5 text-center ">
          <span>Nama Lengkap</span>
          <span>Tanggal</span>
          <span>Tipe Rusak</span>
          <span>Jalan Rusak</span>
          <span>Status</span>
        </li>

        {data.map((item) => {
          return (
            <li key={item.id} className="px-5 text-blackSecondary py-5 grid grid-cols-5 text-center items-center">
              {/* Nama Lengkap */}
              <div className="flex items-center gap-2 justify-center">
                <img src="" alt="Ganjer" className="w-5 h-5 rounded-full bg-slate-600" />
                <div>
                  <h6 className="text-base text-blackSecondary">{item.name}</h6>
                  <p className="text-xs">3124127241</p>
                </div>
              </div>
              {/* Tanggal */}
              <p>{item.tanggal}</p>
              {/* Tipe Rusak */}
              <p>{item.tipeRusak}</p>
              {/* Jalan Rusak */}
              <p>{item.jalan}</p>
              {/* Status */}
              <button
                className={`${
                  item.status === 'Prosess' ? 'bg-[#FAFF00]' : item.status === 'Selesai' ? 'bg-[#00FF0A]' : item.status === 'Pending' ? 'bg-[#F9A319]' : ''
                }  text-center flex justify-center items-center w-32 mx-auto rounded-sm py-3`}
              >
                {item.status}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TableLS;
