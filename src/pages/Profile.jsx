import React, { useState } from 'react';
import { InputProfile } from '../components';

const Profile = () => {
  const [editable, setEditable] = useState(true);

  const [profile, setProfile] = useState({
    nama: 'Ganjer',
    nik: 3121313212,
    lahir: '1996-02-19',
    noHp: '0811232345',
    email: 'ganjer@gmail.com',
    password: 'user12345',
  });

  const handleOnchange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    setProfile({ name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setEditable(true);
  };

  return (
    <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto mt-3">
        <h1 className="text-3xl font-semibold text-blackSecondary">Informasi Akun</h1>
        <h3 className="text-[#78778B]">Perbarui informasi akun anda</h3>

        <div className="flex justify-between text-xl font-semibold  mt-5 w-9/12 ">
          <h5>Informasi Pribadi</h5>

          {editable && (
            <button onClick={() => setEditable(false)} type="button" className="text-bg-primary flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
              </svg>
              <span>Edit</span>
            </button>
          )}
        </div>
        <form onSubmit={handleSubmit} className="container w-9/12 flex justify-between  flex-wrap">
          <InputProfile type="number" onChange={handleOnchange} value={profile.nik} name="nik" disabled={editable} width={'[48%]'} />

          <InputProfile type="name" onChange={handleOnchange} value={profile.nama} name="nama" disabled={editable} width={'[48%]'} />

          <InputProfile type="date" onChange={handleOnchange} value={profile.lahir} name="lahir" disabled={editable} width={'[48%]'} />

          <InputProfile type="number" onChange={handleOnchange} value={profile.noHp} name="no" disabled={editable} width={'[48%]'} />

          <InputProfile type="email" onChange={handleOnchange} value={profile.email} name="email" disabled={editable} width={'full'} />

          <InputProfile type="password" onChange={handleOnchange} value={profile.password} name="password" disabled={editable} width={'full'} />

          {!editable && (
            <button type="submit" className="py-2 px-10 bg-bg-primary mt-4 text-whiteSecondary rounded-lg">
              Update
            </button>
          )}
        </form>
      </div>
    </main>
  );
};

export default Profile;
