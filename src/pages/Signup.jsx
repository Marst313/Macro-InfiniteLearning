import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <section className="bg-bg-primary w-screen h-screen">
      <div className="bg-white flex-col justify-center flex py-5  px-5 lg:px-10 w-80 lg:w-96 mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  gap-3 rounded-lg h-[25rem]">
        <h1 className="text-4xl font-bold text-bg-primary text-center">Daftar</h1>

        <h3 className="text-center my-3 text-bg-primary ">
          Sudah punya akun ?
          <Link to="/signin" className="font-semibold leading-6 cursor-pointer hover:text-blue-800 ">
            {` `}Masuk
          </Link>
        </h3>

        <form className="flex flex-col justify-center gap-8">
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
    </section>
  );
};

export default Signup;
