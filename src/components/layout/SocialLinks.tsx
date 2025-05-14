import React from 'react';

interface SocialLink {
  platform: string;
  url: string;
  username: string;
  icon: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6 mb-10 w-full">
      {links.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center rounded-full px-6 py-2 text-gray-700 dark:text-gray-200 hover:shadow-md transition-all text-lg min-w-[220px] justify-center gap-2"
        >
          <div className="absolute inset-0 rounded-full p-[0.5px] bg-gradient-to-r from-google-red via-google-blue via-google-yellow to-google-green">
            <div className="h-full w-full rounded-full bg-white dark:bg-gray-900"></div>
          </div>
          <div className="relative flex items-center gap-2 font-light text-gray-600 dark:text-gray-400">
            <img src={link.icon} alt={link.platform} className="h-4 w-auto dark:invert" />
              <span className="text-base">{link.username}</span>  
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks; 