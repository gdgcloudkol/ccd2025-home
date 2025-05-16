import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '../ui/ThemeToggle';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[--white] dark:bg-[--black] py-4 fixed top-4 left-0 right-0 z-[999] w-11/12 xl:w-10/12 mx-auto rounded-full border dark:border-gray-700">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <div className="flex items-center xl:border-r pr-8 dark:border-gray-700">
              <Logo/>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { to: '/', label: 'Home' },
                { to: '/speakers', label: 'Speakers' },
                { to: '/schedule', label: 'Schedule' },
                { to: '/team', label: 'Team' },
              ].map(({ to, label }) => (
                <div key={to} className="flex flex-col items-center">
                  <Link
                    to={to}
                    className={`text-gray-500 font-extralight dark:text-[--white] hover:text-blue-500 transition-colors px-2`}
                  >
                    {label}
                  </Link>
                  {currentPath === to && (
                    <span className="absolute min-w-20 bottom-0 h-1.5 bg-blue-500 rounded-t-full rounded-b-none"></span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Login Button and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link
              to="/login"
              className="bg-[--black] text-[--white] dark:bg-[--white] dark:text-[--black] p-3 px-6 rounded-full font-light flex items-center"
            >
              Login Now
              <span className="ml-2 bg-[--white] text-[--black] dark:bg-[--black] dark:text-[--white] rounded-full h-6 w-6 flex items-center justify-center text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-in-icon lucide-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/></svg>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-[--black] dark:bg-[--white] p-3 rounded-full text-[--white] dark:text-[--black] focus:outline-none transition-transform duration-300 hover:scale-105"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>=
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute left-0 right-0 mt-2 bg-[--white] dark:bg-[--black] rounded-2xl shadow-lg border dark:border-gray-700 transform transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'opacity-100 translate-y-0 visible' 
              : 'opacity-0 -translate-y-2 invisible'
          }`}
        >
          <div className="p-6 space-y-6">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-[--black] dark:text-[--white] font-light hover:text-blue-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/speakers"
                className="text-[--black] dark:text-[--white] hover:text-blue-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Speakers
              </Link>
             
              <Link
                to="/schedule"
                className="text-[--black] dark:text-[--white] hover:text-blue-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule
              </Link>
              <Link
                to="/team"
                className="text-[--black] dark:text-[--white] hover:text-blue-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              <Link
                to="/login"
                className="bg-[--black] text-[--white] dark:bg-[--white] dark:text-[--black] px-6 py-3 rounded-full font-light inline-block text-center mt-4 hover:opacity-90 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                Login Now
              </Link>
              <div className="border-t dark:border-gray-700 mt-4 pt-4">
                <div className="flex items-center justify-between text-[--black] dark:text-[--white] py-2">
                  <span className="font-light">Theme</span>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
