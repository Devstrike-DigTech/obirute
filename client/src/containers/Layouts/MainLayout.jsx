import React from 'react';
import { Outlet } from 'react-router-dom';
const mainLayout = ({ children }) => {
  const location = window.location.pathname;
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
              <button className="outline-none menu-button">
                <svg
                  className="w-6 h-6 text-gray-500"
                  x-show="! showMenu"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 00 24 24"
                  stroke="currentColor"
                >
                  <path d="m4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>

            <div className="hidden mobile-menu">
              <ul className="">
                <li className="active">
                  <a
                    href="/"
                    className="block text-sm px-2 py-4 text-white bg-purple-500 font-semibold"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#About"
                    className="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#Contact Us"
                    className="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
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
                  &copy; <strong>Memento Mori</strong>
                </p>
              </div>
              <div className="md:flex-1 md:px-4 text-center md:text-right">
                <a
                  href="#/"
                  className="py-2 px-4 text-white inline-block hover:underline"
                >
                  Terms of Service
                </a>
                <a
                  href="#/"
                  className="py-2 px-4 text-white inline-block hover:underline"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default mainLayout;