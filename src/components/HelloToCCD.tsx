import React from 'react';
import TextLoop from './ui/TextLoop';

const HelloToCcd = () => {
  // Phrases that will rotate in the TextLoop
  const loopPhrases = [
    <span key="ccd">CCD'25</span>,
    <span key="learners">Innovative Learners</span>,
    <span key="speakers">Expert Speakers</span>,
    <span key="networking">Networking</span>,
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full bg-[#faf8f6] relative">
      <div className="w-full md:w-[60%] p-4 ml-auto">
        <div className="w-full md:pr-4">
          <h2 className="text-2xl md:text-5xl font-bold mb-3 max-sm:w-32 text-black flex flex-wrap">
            Hello to,
            <TextLoop className="inline-block md:ml-2" interval={3} transition={{ duration: 0.5 }}>
              {loopPhrases}
            </TextLoop>
          </h2>
          <p className="text-base md:text-xl text-[#676C72] text-justify">
            We're offering you the opportunity to learn about Cloud Technology, Google Cloud
            Certifications, Machine Learning, Web Technologies, and App Development from industry
            experts at Google Cloud Community Day 2025. Our experts will discuss how Google Cloud
            Platform and Google Cloud Certifications can help you advance your career by increasing
            your knowledge in these areas.
          </p>
        </div>
      </div>
      <div className="hidden w-fit md:flex justify-end ">
        <img
          src="/images/HelloToCCD/HelloToCcd.png"
          alt="CCD 2025"
          className="h-auto w-[400px] object-contain"
        />
      </div>
    </div>
  );
};

export default HelloToCcd;
