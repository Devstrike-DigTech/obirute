import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
const MainLayout = ({ children, emitSearchValue }) => {
  const location = window.location.pathname;
  const [hamburger, setHamburger] = useState(false);
  const [search, setSearchValue] = useState('');

  const submitSearch = (e) => {
    e.preventDefault();
    emitSearchValue(search);
  };

  const setMe = (e) => {
    setSearchValue(e.target.value);
    submitSearch(e);
  };

  const handleNav = () => setHamburger(!hamburger);
  return (
    <div className="grid">
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <a href="/" className="flex items-center py-4 px-2">
                <span>
                  <img
                    src="favicon.ico"
                    alt=""
                    className="object-cover w-fit h-10"
                  />
                </span>
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
              <a
                href="Mrs_Uzor_Brochure.pdf"
                target="_blank"
                className="py-4 px-2 text-gray-500 border-purple-500 font-semibold"
              >
                Brochure
              </a>
              <form onSubmit={submitSearch}>
                <div className="relative text-gray-600 focus-within:text-gray-400">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button
                      type="submit"
                      className="p-1 focus:outline-none focus:shadow-outline"
                    >
                      <i className="fa fa-search"></i>
                    </button>
                  </span>
                  <input
                    type="search"
                    value={search}
                    onChange={(e) => setMe(e)}
                    className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                    placeholder="Search..."
                    autoComplete="off"
                  />
                </div>
              </form>
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
            <li>
              <form onSubmit={submitSearch}>
                <div className="relative text-gray-600 focus-within:text-gray-400">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button
                      type="submit"
                      className="p-1 focus:outline-none focus:shadow-outline"
                    >
                      <i className="fa fa-search"></i>
                    </button>
                  </span>
                  <input
                    type="search"
                    value={search}
                    onChange={(e) => setMe(e)}
                    className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                    placeholder="Search..."
                    autoComplete="off"
                  />
                </div>
              </form>
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
                <div className="flex justify-between text-white">
                  <div className="flex space-x-7">
                    <a
                      href="mailto: devstrike.digtech@gmail.com?subject=Service request"
                      className="flex items-center py-4 px-2"
                    >
                      <span className="font-light text-lg">
                        &copy; 2022 <span className="italic">Designed by</span>
                      </span>
                      <span>
                        <img
                          src="./devstrike3.png"
                          alt=""
                          className="object-cover w-fit h-10"
                        />
                      </span>
                      <span className="font-semibold text-lg cursor-pointer">
                        Devstrike
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:flex-1 md:px-4 text-center md:text-right">
                <a
                  href="#/"
                  className="py-2 px-4 text-white inline-block hover:underline"
                >
                  Home
                </a>
                <a
                  href="/write"
                  className="py-2 px-4 text-white inline-block hover:underline"
                >
                  Write tribute
                </a>
                <a
                  href="mailto: devstrike.digtech@gmail.com?subject=Service request"
                  className="py-2 px-4 text-white inline-block hover:underline"
                >
                  Contact us
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
