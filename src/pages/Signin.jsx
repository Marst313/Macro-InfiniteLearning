import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../utils/userContext';

const Signin = () => {
  const { email, setEmail, setUser } = useUserContext();
  const passRef = useRef(null);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'admin@gmail.com' && passRef.current.value === 'admin123') {
      setUser('Admin');
    } else {
      setUser('User');
    }

    navigate('/');
  };

  return (
    <section className="bg-bg-primary w-screen h-screen">
      <div className="bg-white flex-col justify-center flex py-5 px-5 lg:px-10 w-80 lg:w-96 mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  gap-3 rounded-lg h-[25rem]">
        <h1 className="text-4xl font-bold text-bg-primary text-center">Masuk</h1>

        <h3 className="text-center my-3 text-bg-primary ">
          Tidak punya akun?
          <Link to="/signup" className="font-semibold leading-6 cursor-pointer hover:text-blue-800 ">
            {` `}Daftar disini
          </Link>
        </h3>

        <form className="flex flex-col justify-center gap-8" onSubmit={handleLogin}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            autocomplate="email"
            required
            className="block w-full rounded-md  py-1.5 text-blue-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-bg-primary    sm:text-sm sm:leading-6 border-[1px] border-bg-primary"
          />

          <input
            id="password"
            name="password"
            placeholder="Kata Sandi"
            type="password"
            autocomplate="password"
            ref={passRef}
            required
            className="block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-bg-primary    sm:text-sm sm:leading-6 border-[1px] border-bg-primary"
          />

          <div className="text-blue-600 text-sm font-normal font-['Inter'] leading-relaxed flex justify-between">
            <div className="flex items-center gap-3 ">
              <input type="checkbox" name="" id="ingatsaya" className="rounded-full focus:ring-0 cursor-pointer" />
              <label for="ingatsaya" className="cursor-pointer">
                Ingat Saya
              </label>
            </div>

            <a href="" className="text-right  text-sm font-semibold font-['Inter'] leading-relaxed">
              Lupa Kata Sandi ?
            </a>
          </div>

          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signin;
