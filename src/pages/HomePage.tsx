import CallForSpeakers from '@/components/CallForSpeakers';
import HeroSection2 from '@/components/HeroSection2';
import SvgBand from '@/components/SvgBand';
import React from 'react';
import { Link } from 'react-router-dom';
import CONTENT from '../../public/content/home.json';
import Highlights from '@/components/Highlights';

const HomePage: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen xl:min-h-[110dvh] flex flex-col justify-center items-center text-center px-4 pt-20 pb-32 relative dark:bg-[--black]">
       
        <div className="container mx-auto z-10 relative xl:-mt-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-[--black] dark:text-[--white]">
            Cloud Community
            <br />
            <div className="flex items-center justify-center">
              <img
                src="/images/elements/GCP.webp"
                alt="Cloud"
                className="h-12 w-auto mr-6"
              />
              Days <span className="text-google-blue border-2 border-google-blue rounded-full px-6 py-2 text-3xl md:text-4xl ml-4 mt-3">2025</span>
            </div>
          </h1>

          <p className="text-xl md:text-2xl mt-8 mb-12 text-[--blue50] dark:text-[--gray20]">
            {CONTENT.date} - <Link to={CONTENT.venueLink} target='_blank' className='cursor-pointer'>{CONTENT.venue}</Link>
          </p>

          <Link
            to="/register"
            className="bg-[--black] text-[--white] dark:bg-[--white] dark:text-[--black] px-8 py-3 rounded-full font-medium text-lg inline-flex items-center"
          >
            <img src="/images/elements/gemini.svg" className='mr-4 dark:invert block' alt={"gemini"} />
            {/* <img src="/images/elements/gemini_dark.svg" className='mr-4 hidden dark:block' alt={"gemini"} /> */}
            Register Now
            <img src="/images/elements/gemini.svg" className='ml-4 dark:invert block' alt={"gemini"} />
            {/* <img src="/images/elements/gemini_dark.svg" className='ml-4 hidden dark:block' alt={"gemini"} /> */}

          </Link>
        </div>

        {/* City Skyline Image */}
        <div className="absolute -bottom-10 left-0 right-0  w-full">
          <img
            // src="/home-front.png"
            src="/images/kolkata.svg"
            alt="Kolkata Skyline"
            className="h-full xl:w-11/12 mx-auto xl:h-auto invert dark:invert-0 opacity-80 dark:opacity-30"
          />
        </div>
      </section>
      <SvgBand reverse={true} pauseOnHover={true} className="bg-[--marquee-backgroundBlue]" />
      <HeroSection2 />
      <SvgBand reverse={false} pauseOnHover={true} className="bg-[--marquee-backgroundYellow]" />
      <div className="my-20">
        <CallForSpeakers />
      </div>
      <Highlights />{' '}
    </div>
  );
};

export default HomePage;
