interface TeamMemberProps {
  person: {
    id: number;
    title: string;
    content: string;
    linkedin: string;
    twitter: string;
    image: string;
  };
  designation: string;
  cardColor: string;
  leadId: number[];
}

// const socialPlatforms = [
//   { platform: 'linkedin', icon: '/images/socials/linkedin.svg' },
//   { platform: 'twitter', icon: '/images/socials/x.svg' },
//   { platform: 'github', icon: '/images/socials/github.svg' },
//   { platform: 'instagram', icon: '/images/socials/instagram.svg' },
//   { platform: 'facebook', icon: '/images/socials/facebook.svg' },
// ];

export function TeamMember(props: TeamMemberProps) {
  const leadId = props.leadId;
  const { id, title, content, image, twitter, linkedin } = props.person;
  const { cardColor, designation } = props;

  const availableSocials = [{
    platform: "linkedin",
    icon: "/images/socials/linkedin.svg",
    url: linkedin,
  },
  {
    platform: "twitter",
    icon: "/images/socials/x.svg",
    url: twitter,
  }
  ];

  return (
    <div className={`border-2 border-[--black] dark:border-[--white] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow relative h-full flex flex-col 
      ${leadId.includes(id) ? 'border-4 border-t-google-red border-b-google-blue border-l-google-yellow border-r-google-green' : ''}
      `}>
      {/* Curvy Role Header */}
      <div className={`${cardColor} px-4 py-6 flex justify-between items-center rounded-t-lg relative`}>
        <span className="font-bold text-2xl text-[--white] mb-4">{leadId.includes(id) ? 'Lead' : ''} {designation}</span>
        <img src="/images/elements/smile.svg" alt="" className="w-5 h-5 dark:invert mb-4" />
      </div>

      {/* Curvy Member Image */}
      <div className="bg-gray-200 dark:bg-gray-700 lg:h-96 relative z-50 -mt-6 rounded-t-3xl overflow-hidden border-2 border-[--black] dark:border-[--white]">
        <img
          src={image || '/placeholder.svg'}
          alt={title}
          className="object-cover h-full w-auto max-sm:object-contain"
        />
      </div>

      {/* Curvy Member Info */}
      <div className="p-4 bg-[--white] dark:bg-gray-700 rounded-t-3xl -mt-20 relative z-50 border-t-2 border-[--black] dark:border-[--white] flex-grow flex flex-col">
        <h3 className="font-bold text-xl text-[--black] dark:text-[--white] line-clamp-1">{title}</h3>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-2 line-clamp-2 min-h-[2rem]">{content}</p>

        {/* Social Links */}
        <div className="mt-auto pt-3 flex gap-3">
          {availableSocials.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 dark:bg-[--white] hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
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