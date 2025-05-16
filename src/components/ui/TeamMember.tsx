import React from 'react';

interface TeamMemberProps {
  name: string;
  position: string;
  role: string;
  cardColor: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  instagram?: string;
  facebook?: string;
  [key: string]: any; // extra socials
}

const socialPlatforms = [
  { platform: 'linkedin', icon: '/images/socials/linkedin.svg' },
  { platform: 'twitter', icon: '/images/socials/x.svg' },
  { platform: 'github', icon: '/images/socials/github.svg' },
  { platform: 'instagram', icon: '/images/socials/instagram.svg' },
  { platform: 'facebook', icon: '/images/socials/facebook.svg' },
];

export function TeamMember(props: TeamMemberProps) {
  const { name, position, role, cardColor, image } = props;

  const availableSocials = socialPlatforms
    .filter(({ platform }) => props[platform])
    .map(({ platform, icon }) => ({
      platform,
      icon,
      url: props[platform],
    }));

  return (
    <div className="border-2 border-[#000000] dark:border-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow relative h-full flex flex-col">
      {/* Curvy Role Header */}
      <div className={`${cardColor} px-4 py-6 flex justify-between items-center rounded-t-lg relative`}>
        <span className="font-bold text-lg text-black dark:text-[--white] mb-4">{role}</span>
        <img src="/images/elements/smile.svg" alt="" className="w-5 h-5 dark:invert mb-4" />
      </div>

      {/* Curvy Member Image */}
      <div className="bg-gray-200 dark:bg-gray-700 h-56 relative z-50 -mt-6 rounded-t-3xl overflow-hidden border-2 border-black dark:border-white">
        <img 
          src={image || '/placeholder.svg'} 
          alt={name} 
          className="object-cover w-full h-full max-sm:object-contain" 
        />
      </div>

      {/* Curvy Member Info */}
      <div className="p-4 bg-white dark:bg-gray-700 rounded-t-3xl -mt-4 relative z-50 border-t-2 border-black dark:border-white flex-grow flex flex-col">
        <h3 className="font-bold text-sm text-[--black] dark:text-[--white] line-clamp-1">{name}</h3>
        <p className="text-xs text-gray-600 dark:text-gray-300 mb-2 line-clamp-2 min-h-[2rem]">{position}</p>

        {/* Social Links */}
        <div className="mt-auto pt-3 flex gap-3">
          {availableSocials.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 dark:bg-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <img src={link.icon} alt={link.platform} className="w-4 h-4 dark:invert" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamMember;