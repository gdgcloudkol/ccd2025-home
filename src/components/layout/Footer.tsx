import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import SocialLinks from './SocialLinks';
import footerData from '../../../public/content/footer.json';

const Footer: React.FC = () => {
  return (
    <footer className="pt-12 sm:pt-16 pb-6 px-2 sm:px-4">
      <div className="flex flex-col items-center">
        <img src="/images/elements/blue-cloud.png" alt="Cloud" className="h-20 sm:h-16 w-auto mb-6" />
        <h2 className="text-3xl md:text-5xl font-extralight text-center mb-4 text-[--black] dark:text-[--white]">{footerData.footerText.heading}</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mb-2">{footerData.footerText.description}</p>
        <SocialLinks links={footerData.socialLinks} />
        <div className="w-11/12 sm:w-10/12 mx-auto border-y border-gray-200 dark:border-gray-800 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl ">
          <div>
            <div className="flex items-start gap-2">
              <img src="/images/elements/about.svg" alt="About" className="h-5 w-5 mt-1" />
              <div className="flex flex-col">
              <span className="font-semibold text-[--black] dark:text-[--white]">About</span>
           
            <div className="flex flex-col text-gray-700 dark:text-gray-300 text-base space-y-3 mt-4 z-[99]">
              {footerData.about.map((item) => (
                <Link key={item.link} to={item.link} className=" hover:text-google-blue transition-colors cursor-pointer">
                  {item.name}
                </Link>
              ))}
            </div>
            </div>
          </div>
          </div>
          <div>
            <div className="flex items-start gap-2">
              <img src="/images/elements/resources.svg" alt="Resources" className="h-5 w-5 mt-1 " />
              <div className="flex flex-col">
                <span className="font-semibold text-[--black] dark:text-[--white]">Resources</span>
                <div className="flex flex-col text-gray-700 dark:text-gray-300 text-base space-y-3 mt-4  z-[99]">
                  {footerData.resources.map((item) => (
                    <Link key={item.link} to={item.link} className="hover:text-google-yellow transition-colors cursor-pointer">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2">
              <img src="/images/elements/legal.svg" alt="Legal" className="h-5 w-5 mt-1 " />
              <div className="flex flex-col">
                <span className="font-semibold text-[--black] dark:text-[--white]">Legal</span>
                <div className="flex flex-col text-gray-700 dark:text-gray-300 text-base space-y-3 mt-4 z-[99]">
                  {footerData.legal.map((item) => (
                    <Link key={item.link} to={item.link} className="hover:text-google-green transition-colors cursor-pointer">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center w-11/12 sm:w-10/12 mx-auto py-6 sm:py-8">
          <div className="mb-8 md:mb-0">
            <Logo className="scale-125 sm:scale-100" />
          </div>
          <span className="text-xs text-gray-600 dark:text-gray-400 text-center md:text-right w-full md:w-auto">
            {footerData.footerText.copyright}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
