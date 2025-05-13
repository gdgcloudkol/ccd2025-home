import { useEffect, useState, type FC } from 'react';
import { Link } from 'react-router-dom';

// Speaker types
interface SpeakerProps {
  name: string;
  role: string;
  company: string;
  image: string;
}

// Speaker component
const Speaker: FC<SpeakerProps> = ({ name, role, company, image }) => (
  <div className="flex flex-col items-center sm:flex-row p-2 w-full max-h-[120px]">
    <div className="flex-shrink-0 mb-3 sm:mb-0 sm:mr-3">
      <div className="h-16 w-16 rounded-full border-4 border-t-red-500 border-l-green-500 border-r-yellow-500 border-b-blue-500 mx-auto sm:mx-0">
        <img src={image} alt={name} width={64} height={64} className="object-cover rounded-full" />
      </div>
    </div>
    <div className="flex-1 text-center sm:text-left">
      <h3 className="font-medium text-sm text-black">{name}</h3>
      <p className="text-xs text-[#676C72] max-sm:line-clamp-2">
        {role}
        {company ? `, ${company}` : ''}
      </p>
    </div>
  </div>
);
export default function CallForSpeakers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [speakersPerView, setSpeakersPerView] = useState(3);

  // Header icons
  const headerIcons = [
    { src: '/images/elements/star.svg', alt: 'Star icon' },
    { src: '/images/elements/smile.svg', alt: 'Smile icon' },
    { src: '/images/elements/circleStar.svg', alt: 'Circle star icon' },
    { src: '/images/elements/starOuter.svg', alt: 'Star outer icon' },
  ];

  // Speaker data
  const speakers = [
    {
      name: 'Anubhav Singh',
      role: 'Co-founder',
      company: 'Callchimp.ai | GDE in ML & GCP',
      image: 'https://github.com/xprilion.png',
    },
    {
      name: 'Aritra Roy Gosthipaty',
      role: 'ML Engineer',
      company: 'PyImageSearch | GDE in ML',
      image: 'https://github.com/ariG23498.png',
    },
    {
      name: 'Imran Roshan',
      role: 'Cyber Security Professional',
      company: 'Deloitte TTL | GDE - GCP',
      image: 'https://pbs.twimg.com/profile_images/1767598349254103043/eA26RPxn_400x400.jpg',
    },
    {
      name: 'Ritwik Raha',
      role: 'Machine Learning Engineer',
      company: 'PyImageSearch | GDE in ML',
      image: 'https://github.com/ritwikraha.png',
    },
    {
      name: 'Varun Raj Manoharan',
      role: 'CIO',
      company: 'Hellonext Inc. | Firebase GDE',
      image: 'https://github.com/varun-raj.png',
    },
    {
      name: 'Rishiraj Acharya',
      role: 'ML Engineer',
      company: 'Tensorlake.ai',
      image: 'https://www.github.com/rishiraj.png',
    },
    {
      name: 'Avirup Basu',
      role: 'Technical Lead',
      company: 'P360',
      image: 'https://github.com/avirup171.png',
    },
    {
      name: 'Reshab Das',
      role: 'Senior Software Engineer',
      company: 'Ergeon',
      image: 'https://github.com/reshab48.png',
    },
  ];

  // Set speakers per view on initial render and resize
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateView = () => {
      const width = window.innerWidth;
      if (width < 640)
        setSpeakersPerView(1); // mobile
      else if (width < 1024)
        setSpeakersPerView(2); // tablet
      else setSpeakersPerView(3); // desktop
    };

    updateView();
    window.addEventListener('resize', updateView);
    return () => window.removeEventListener('resize', updateView);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? Math.max(0, speakers.length - speakersPerView)
        : Math.max(0, prev - speakersPerView),
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + speakersPerView >= speakers.length ? 0 : prev + speakersPerView,
    );
  };

  const visibleSpeakers = speakers.slice(currentIndex, currentIndex + speakersPerView);

  return (
    <div className="flex items-center justify-center  bg-gray-50 p-4 relative">
      <div className="w-full max-w-5xl overflow-hidden border border-gray-200 bg-cfs-gradient rounded-3xl p-[1px] ">
        {/* Header with gradient */}
        <div className="relative h-16 flex items-center px-6">
          <div className="px-2 py-1 pb-5 rounded">
            <img src="/images/elements/2025.svg" alt="ccd year" />
          </div>
          <div className="absolute right-6 flex items-center space-x-2 pb-5">
            {headerIcons.map((icon, index) => (
              <div key={index} className="w-5 h-5 rounded-full flex items-center justify-center">
                <img src={icon.src} alt={icon.alt} />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl -mt-4">
          {/* Content wrapper */}
          <div className="p-4 pt-10">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left content */}
              <div className="flex-1">
                <h1 className="text-2xl md:text-4xl font-bold mb-4 text-black">
                  Call for Speakers
                </h1>
                <p className="text-[#676C72] mb-6 max-w-xl text-base text-justify">
                  A community organized Cloud Conference with industry experts presenting on
                  cutting-edge topics! Cloud Community Day is powered by our shared belief that when
                  developers come together to exchange ideas, remarkable things can happen.
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium"
                >
                  <img src="/images/elements/gemini.svg" alt="Gemini icon" className="w-4 h-4" />
                  Apply Now
                  <img src="/images/elements/gemini.svg" alt="Gemini icon" className="w-4 h-4" />
                </Link>
              </div>

              {/* Right image */}
              <div className="flex-1 flex justify-center">
                <img
                  src="/images/cfs/cfs.png"
                  alt="Hosts at Cloud Community Day"
                  className="w-full max-w-[400px] h-auto min-h-[240px] object-cover"
                />
              </div>
            </div>
            <hr className="" />

            {/* Speakers carousel */}
            <div className="mt-8 pb-6">
              <div className="text-center mb-4">
                <h2 className="text-xl font-medium inline-block text-black">
                  Past Speakers 2024
                  <hr className="mt-1 w-32 mx-auto" />
                </h2>
              </div>

              <div className="relative">
                {/* Arrows */}
                <button
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white"
                  aria-label="Previous speakers"
                  onClick={handlePrev}
                >
                  <img src="/images/elements/leftArrow.svg" alt="left arrow" />
                </button>

                {/* Carousel */}
                <div className="px-12 transition-all duration-300">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {visibleSpeakers.map((speaker, index) => (
                      <Speaker
                        key={currentIndex + index}
                        name={speaker.name}
                        role={speaker.role}
                        company={speaker.company}
                        image={speaker.image}
                      />
                    ))}
                  </div>
                </div>

                <button
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white"
                  aria-label="Next speakers"
                  onClick={handleNext}
                >
                  <img src="/images/elements/rightArrow.svg" alt="right arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
