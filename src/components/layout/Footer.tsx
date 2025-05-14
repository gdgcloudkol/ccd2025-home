import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import SocialLinks from './SocialLinks';

const socialLinks = [
  {
    platform: 'Instagram',
    url: 'https://instagram.com/gdgcloudkol',
    username: '@gdgcloudkol',
    icon: '/images/socials/instagram.svg'
  },
  {
    platform: 'X',
    url: 'https://twitter.com/gdgcloudkol',
    username: '@gdgcloudkol',
    icon: '/images/socials/x.svg'
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/company/gdgcloudkol',
    username: '@gdgcloudkol',
    icon: '/images/socials/linkedin.svg'
  },
  {
    platform: 'Facebook',
    url: 'https://facebook.com/gdgcloudkol',
    username: '@gdgcloudkol',
    icon: '/images/socials/facebook.svg'
  }
];

const Footer: React.FC = () => {
  return (
    <footer className=" pt-16 pb-6 px-4">
      <div className="flex flex-col items-center">
        <img src="/images/elements/blue-cloud.png" alt="Cloud" className="h-16 w-auto mb-6" />
        <h2 className="text-3xl md:text-5xl font-extralight text-center mb-4 text-black dark:text-white">Follow Us For More Updates</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mb-2">Let's get connected so that we can reach out to each other via a simple notification. Stake out <a href="#" className="text-blue-500 hover:underline">#GCCDkolkata2024</a> for the updates and news.</p>
        <SocialLinks links={socialLinks} />
        <div className="w-10/12 mx-auto border-y border-gray-200 dark:border-gray-800 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl ">
          <div>
            <div className="flex items-start gap-2">
              <img src="/images/elements/about.svg" alt="About" className="h-5 w-5 mt-1" />
              <div className="flex flex-col">
              <span className="font-semibold text-black dark:text-white">About</span>
           
            <div className="flex flex-col text-gray-700 dark:text-gray-300 text-base space-y-3 mt-4">
              <Link to="/about/gdg" className="hover:text-blue-500 transition-colors">Google Developer Groups</Link>
              <Link to="/about/wtm" className="hover:text-blue-500 transition-colors">Women Techmakers</Link>
              <Link to="/about/goc" className="hover:text-blue-500 transition-colors">Google on campus</Link>
              <Link to="/about/gdg-cloud" className="hover:text-blue-500 transition-colors">GDG Cloud Kolkata</Link>
            </div>
            </div>
          </div>
          </div>
          <div>
            <div className="flex items-start gap-2">
              <img src="/images/elements/resources.svg" alt="Resources" className="h-5 w-5 mt-1" />
              <div className="flex flex-col">
                <span className="font-semibold text-black dark:text-white">Resources</span>
                <div className="flex flex-col text-gray-700 dark:text-gray-300 text-base space-y-3 mt-4">
                  <Link to="/resources/sponsorship" className="hover:text-blue-500 transition-colors">Sponsorship Brochure</Link>
                  <Link to="/resources/attendee" className="hover:text-blue-500 transition-colors">Attendee Brochure</Link>
                  <Link to="/resources/cfs" className="hover:text-blue-500 transition-colors">Call for Speakers</Link>
                  <Link to="/resources/events" className="hover:text-blue-500 transition-colors">GCCD Kolkata Extended Events</Link>
                  <Link to="/resources/faq" className="hover:text-blue-500 transition-colors">Frequently Asked Questions</Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2">
              <img src="/images/elements/legal.svg" alt="Legal" className="h-5 w-5 mt-1" />
              <div className="flex flex-col">
                <span className="font-semibold text-black dark:text-white">Legal</span>
                <div className="flex flex-col text-gray-700 dark:text-gray-300 text-base space-y-3 mt-4">
                  <Link to="/legal/code-of-conduct" className="hover:text-blue-500 transition-colors">Code of Conduct</Link>
                  <Link to="/legal/privacy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="flex flex-row justify-between items-center w-10/12 mx-auto py-8">
         
            <Logo />
          <span className="text-xs text-gray-600 dark:text-gray-400 text-center md:text-right w-full md:w-auto mt-2 md:mt-0">
            GCCD kolkata @2025
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
