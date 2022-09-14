import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
const MainLayout = ({ children }) => {
  const location = window.location.pathname;
  const [hamburger, setHamburger] = useState(false);

  const handleNav = () => setHamburger(!hamburger);
  return (
    <div className="grid">
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <a href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">
                  Memento Mori
                </span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a
                href="/"
                // className="py-4 px-2 text-gray-500 border-b-4 border-purple-500 font-semibold"
                className={
                  location === '/'
                    ? 'py-4 px-2 text-gray-500 border-b-4 border-purple-500 font-semibold'
                    : 'py-4 px-2 text-gray-500 border-purple-500 font-semibold'
                }
              >
                Home
              </a>
              <a
                href="/write"
                className={
                  location === '/write'
                    ? 'py-4 px-2 text-gray-500 border-b-4 border-purple-500 font-semibold'
                    : 'py-4 px-2 text-gray-500 border-purple-500 font-semibold'
                }
              >
                Write Tribute
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button
                className="outline-none menu-button"
                onClick={() => handleNav()}
              >
                <svg
                  className="w-6 h-6 text-gray-500"
                  x-show="! showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 00 24 24"
                  stroke="currentColor"
                >
                  <path d="m4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>

          <ul className={hamburger === false ? 'hidden' : 'text-sm mt-6 block'}>
            <li className="active">
              <a
                href="/"
                className={
                  location === '/'
                    ? 'block text-sm px-2 py-4 text-white bg-purple-500 font-semibold'
                    : 'block text-sm.px-2.py-4 hover:bg-purple-500 hover:text-white transition duration-300'
                }
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/write"
                className={
                  location === '/write'
                    ? 'block text-sm px-2 py-4 text-white bg-purple-500 font-semibold'
                    : 'block text-sm.px-2.py-4 hover:bg-purple-500 hover:text-white transition duration-300'
                }
              >
                Write Tribute
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
      <div className="footer-2 bg-gray-800 pt-6 md:pt-12 mt-12">
        <div className="border-t border-solid border-gray-900 mt-4 py-4">
          <div className="container px-4 mx-auto">
            <div className="md:flex md:-mx-4 md:items-center">
              <div className="md:flex-1 md:px-4 text-center md:text-left">
                <p className="text-white">
                  &copy; <strong>Devstrike</strong>
                </p>
              </div>
              <div className="md:flex-1 md:px-4 text-center md:text-right">
                <a
                  href="#/"
                  className="py-2 px-4 text-white inline-block hover:underline"
                >
                  Home
                </a>
                <a
                  href="#/"
                  className="py-2 px-4 text-white inline-block hover:underline"
                >
                  Write tribute
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
