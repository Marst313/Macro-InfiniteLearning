import React, { useState } from 'react';

const SingleUser = ({ id, email, img, nama, noHp, alamat, nik, handleDelete }) => {
  const [edit, setEdit] = useState(false);

  return (
    <li key={id} className={`px-5 text-blackSecondary py-5 grid grid-cols-5 text-center items-center ${id % 2 === 0 ? ' bg-[#cdbef9]  ' : ''}`}>
      {/* Nama Lengkap */}
      <div className="flex items-center gap-2 justify-center">
        <img src={img} alt={nama} className="w-5 h-5 rounded-full bg-slate-600" />
        <div>
          <h6 className="text-base text-blackSecondary" contentEditable={edit}>
            {nama}
          </h6>
          <p className="text-xs w-20" contentEditable={edit}>
            {nik}
          </p>
        </div>
      </div>
      {/* Email */}

      <p contentEditable={edit}>{email}</p>
      {/* No Hp */}
      <p contentEditable={edit}>{noHp}</p>
      {/* Alamat */}
      <p contentEditable={edit}>{alamat}</p>
      {/* Aksi */}
      <div className="flex gap-2 ">
        <button
          type="button"
          onClick={() => {
            setEdit(!edit);
          }}
          className="bg-[#00FF0A] text-center flex justify-center items-center w-1/2 mx-auto rounded-lg py-3"
        >{`${edit ? 'Simpan' : 'Ubah'} `}</button>
        <button type="button" className="bg-[#FF0000] text-center flex justify-center items-center w-1/2 mx-auto rounded-lg py-3 text-whiteSecondary" onClick={() => handleDelete(id)}>
          Hapus
        </button>
      </div>
    </li>
  );
};

export default SingleUser;
