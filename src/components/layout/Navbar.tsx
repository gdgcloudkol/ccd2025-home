import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../ui/ThemeToggle';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-black py-4 fixed top-4 left-0 right-0 z-[999] w-10/12 mx-auto rounded-full border dark:border-gray-700">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-8">
          <div className="flex items-center xl:border-r pr-8 dark:border-gray-700">
           <Logo/>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-500 font-extralight dark:text-white border-b-2 border-blue-500">
              Home
            </Link>
            <Link to="/speakers" className="text-gray-500 font-extralight dark:text-white hover:text-blue-500 transition-colors">
              Speakers
            </Link>
            <Link to="/schedule" className="text-gray-500 font-extralight dark:text-white hover:text-blue-500 transition-colors">
              Schedule
            </Link>
            <Link to="/team" className="text-gray-500 font-extralight dark:text-white hover:text-blue-500 transition-colors">
              Team
            </Link>
          </div>
          </div>
          {/* Login Button and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link
              to="/login"
              className="bg-black text-white dark:bg-[--white] dark:text-black p-3 px-6 rounded-full font-light flex items-center"
            >
              Login Now
              <span className="ml-2 bg-[--white] text-black dark:bg-black dark:text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-in-icon lucide-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/></svg>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-black dark:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-[--white] dark:bg-[--gray80] rounded-lg shadow-lg p-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-black dark:text-white font-light"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/speakers"
                className="text-black dark:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Speakers
              </Link>
              <Link
                to="/events"
                className="text-black dark:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Extended Events
              </Link>
              <Link
                to="/schedule"
                className="text-black dark:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule
              </Link>
              <Link
                to="/team"
                className="text-black dark:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              <Link
                to="/login"
                className="bg-black text-white dark:bg-[--white] dark:text-black px-4 py-2 rounded-full font-light inline-block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Login Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
