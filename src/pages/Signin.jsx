import React from 'react';

const Signin = () => {
  return (
    <section className="bg-bg-primary w-screen h-screen">
      <div className="bg-white flex-col justify-center flex w-2/12 h-80 mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"> 
      <div class="flex flex-col justify-center">
        <span class="mb-3 text-4xl font-bold text-blue">Sign In</span>

      </div>
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
        <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Tidak punya akun? Daftar disini</a>
        </div>

        <div class="mt-20 sm:mx-auto sm:w-full sm:max-w-sm">
        <label for="Email" class="block text-sm font-medium leading-6 text-gray-900"></label>
        <div class="mt-2">
          <input id="email" name="email" placeholder="Email" type="email" autocomplate="email" required class="block w-full rounded-md border-0 py-1.5 text-blue-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
        </div>
        </div> 
        
        <div class="mt-20 sm:mx-auto sm:w-full sm:max-w-sm">
        <label for="Password" class="block text-sm font-medium leading-6 text-gray-900"></label>
        <div class="mt-2">
          <input id="password" name="password" placeholder="Kata Sandi" type="password" autocomplate="password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
        </div>
        </div> 
        <div class="text-blue-600 text-base font-normal font-['Inter'] leading-relaxed">Ingat Saya</div>
        <div class="text-right text-blue-600 text-base font-semibold font-['Inter'] leading-relaxed">Lupa Kata Sandi</div>
        

      <div class="mt-20 sm:mx-auto sm:w-full sm:max-w-sm">
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
        

      </div>

    </section>
  );
};

export default Signin;
