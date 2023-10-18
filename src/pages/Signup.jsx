import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [signup, setSignup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSignup(true);
  };
  return (
    <section className="bg-bg-primary w-screen h-screen">
      {signup ? (
        <div className={`${signup ? 'flex' : 'hidden'} bg-whiteSecondary items-center flex-col gap-5 absolute w-80 py-7 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 text-bg-primary text-xl font-bold rounded-lg `}>
          <h3>Berhasil Sign Up</h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
          <Link to="/signin" className="text-base font-medium bg-bg-primary text-whiteSecondary w-full text-center rounded-md py-1 px-5">
            Sign In
          </Link>
        </div>
      ) : (
        <div className="bg-white flex-col justify-center flex py-5  px-5 lg:px-10 w-80 lg:w-96 mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  gap-3 rounded-lg h-[25rem]">
          <h1 className="text-4xl font-bold text-bg-primary text-center">Daftar</h1>

          <h3 className="text-center my-3 text-bg-primary ">
            Sudah punya akun ?
            <Link to="/signin" className="font-semibold leading-6 cursor-pointer hover:text-blue-800 ">
              {` `}Masuk
            </Link>
          </h3>

          <form className="flex flex-col justify-center gap-8" onSubmit={handleSubmit}>
            <input
              id="name"
              name="name"
              placeholder="Full Name"
              type="name"
              autocomplate="name"
              required
              className="block w-full rounded-md  py-1.5 text-blue-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-bg-primary sm:text-sm sm:leading-6 border-[1px] border-bg-primary pl-3 focus:outline-bg-primary"
            />

            <input
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              autocomplate="email"
              required
              className="block w-full rounded-md  py-1.5 text-blue-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-bg-primary sm:text-sm sm:leading-6 border-[1px] border-bg-primary"
            />

            <input
              id="password"
              name="password"
              placeholder="Kata Sandi"
              type="password"
              autocomplate="password"
              required
              className="block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-bg-primary    sm:text-sm sm:leading-6 border-[1px] border-bg-primary"
            />

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default Signup;
