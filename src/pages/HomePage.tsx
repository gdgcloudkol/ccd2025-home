import CallForSpeakers from '@/components/CallForSpeakers';
import HelloToCcd from '@/components/HelloToCCD';
import SvgBand from '@/components/SvgBand';
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 pb-32 relative bg-white">
        <div
          className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{ backgroundImage: 'url("/map-bg.png")' }}
        />
        <div className="container mx-auto z-10 relative">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-black">
            Cloud Community<br />
            <div className="flex items-center justify-center">
              <img
                src="/GCP.png"
                alt="Cloud"
                className="h-16 w-auto  mx-2"
              />
              Days <span className="text-blue-500 border-2 border-blue-500 rounded-full px-4 py-1 text-3xl md:text-4xl ml-2">2025</span>
            </div>
          </h1>

          <p className="text-xl md:text-2xl mt-8 mb-12 text-[#676c72]">
            19th July 2025 - Taj Taal Kutir, New Town
          </p>

          <Link
            to="/register"
            className="bg-black text-white dark:bg-white dark:text-black px-8 py-3 rounded-full font-medium text-lg inline-flex items-center"
          >
            <span className="mx-2">+</span> Register Now <span className="mx-2">+</span>
          </Link>
        </div>

        {/* City Skyline Image */}
        <div className="absolute bottom-0 left-0 right-0 mt-16 w-full ">
          <img
            src="/home-front.png"
            alt="Kolkata Skyline"
            className="w-full h-auto mix-blend-multiply"
          />
        </div>
      </section>
      <SvgBand reverse={true} pauseOnHover={true} className="bg-[#428EFF]" />
      <HelloToCcd />
      <SvgBand reverse={false} pauseOnHover={true} className="bg-[#FFBB01]" />
      <CallForSpeakers />
    </div>
  );
};

export default HomePage;
