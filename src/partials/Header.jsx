import React, { useState } from 'react';

import SearchModal from '../components/ModalSearch';
import Notifications from '../components/DropdownNotifications';
import UserMenu from '../components/DropdownProfile';

function Header({ sidebarOpen, setSidebarOpen }) {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <header className="sticky top-0  shadow-md bg-white z-[9999999]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
          </div>
          <button
            className={`w-full h-8 flex items-center gap-3 text-bg-primary justify-start pl-5 py-5 hover:bg-slate-200  border-2 border-[#BFDBFE]  rounded-full ml-3 text-sm ${searchModalOpen && 'bg-slate-200'}`}
            onClick={(e) => {
              e.stopPropagation();
              setSearchModalOpen(true);
            }}
            aria-controls="search-modal"
          >
            <span className="sr-only">Search</span>
            <svg className="w-4 h-4 " viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path className="fill-current text-bg-primary" d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
              <path className="fill-current text-bg-primary" d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
            </svg>
            <span>Search report...</span>
          </button>

          {/* Header: Right side */}
          <div className="flex items-center space-x-3">
            <div>
              <SearchModal id="search-modal" searchId="search" modalOpen={searchModalOpen} setModalOpen={setSearchModalOpen} />
            </div>
            <Notifications align="right" />
            {/*  Divider */}
            <hr className="w-px h-6 bg-slate-200 border-none" />
            <UserMenu align="right" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
