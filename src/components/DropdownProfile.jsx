import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Transition from '../utils/Transition';
import { useUserContext } from '../utils/userContext';

function DropdownProfile({ align }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { user, email } = useUserContext();

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative inline-flex bg-bg-primary text-whiteSecondary px-2 py-1 rounded-full">
      <button ref={trigger} className="inline-flex justify-center items-center group" aria-haspopup="true" onClick={() => setDropdownOpen(!dropdownOpen)} aria-expanded={dropdownOpen}>
        <svg className="group-hover:text-slate-800 rounded-full" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
        </svg>
        <div className="flex items-center truncate">
          <span className="truncate ml-2 text-sm font-light dark:text-slate-300 group-hover:text-slate-800 ">{user === 'Admin' ? 'Admin' : email || 'Ganjer'}</span>
        </div>
      </button>

      <Transition
        className={`origin-top-right z-10 absolute top-full min-w-44 bg-white dark:bg-slate-800 border border-slate-200  py-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === 'right' ? 'right-0' : 'left-0'}`}
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div ref={dropdown} onFocus={() => setDropdownOpen(true)} onBlur={() => setDropdownOpen(false)}>
          <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200 ">
            <div className="font-medium text-slate-800 ">{user === 'Admin' ? 'Admin' : email || 'Ganjer'}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 italic">{user}</div>
          </div>

          <Link className="font-medium text-sm text-bg-primary hover:bg-bg-primary hover:text-whiteSecondary dark:hover:text-indigo-400 flex items-center py-1 px-3" to="/signin" onClick={() => setDropdownOpen(!dropdownOpen)}>
            Sign Out
          </Link>
        </div>
      </Transition>
    </div>
  );
}

export default DropdownProfile;
