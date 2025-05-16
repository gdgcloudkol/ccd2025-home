import React from 'react';
import { TeamMember } from '@/components/ui/TeamMember';
import { PageHeader } from '@/components/ui/PageHeader';
import { ContentParagraph } from '@/components/ui/PageContentParagraph';
import teamData from '../../public/content/team.json';
import { TeamSection } from '@/components/ui/TeamSection';

const Team: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 md:px-12 py-14 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 relative">
          <div className="max-w-xl">
            <PageHeader>{teamData.title}</PageHeader>
            <ContentParagraph>{teamData.description}</ContentParagraph>
          </div>
          <div className="absolute right-0 top-52 z-20 hidden lg:block">
            <img
              src="/images/elements/blocks-blue.png"
              alt="Blocks Green Left"
              className=" w-40 h-40"
            />
          </div>
        </div>

        {/* Google Colors Bar */}
        <div className="flex gap-2 mb-6">
          <div>
            <img
              src="/images/elements/2025-black.svg"
              alt="CCD 2025"
              width={40}
              height={20}
              className="dark:invert"
            />
          </div>
          <div className="w-6 h-6 rounded-full bg-google-blue flex items-center justify-center">
            <img src="/images/elements/star.svg" alt="star icon" className="w-4 h-4" />
          </div>
          <div className="w-6 h-6 rounded-full bg-google-green flex items-center justify-center">
            <img src="/images/elements/smile.svg" alt="smile icon" className="w-4 h-4" />
          </div>
          <div className="w-6 h-6 rounded-full bg-google-yellow flex items-center justify-center">
            <img src="/images/elements/circleStar.svg" alt="circle star icon" className="w-4 h-4" />
          </div>
          <div className="w-6 h-6 rounded-full bg-google-red flex items-center justify-center">
            <img src="/images/elements/starOuter.svg" alt="star outer icon" className="w-4 h-4" />
          </div>
        </div>

        {/* Team Photo */}
        <div className="relative mb-16">
          <img
            src="/images/team/2024Team.png"
            alt="Cloud Community Day Team"
            className="w-full h-auto max-h-[400px] object-cover border border-[--black] dark:border-[--white]"
          />
          <div className="absolute bottom-[-12px] left-[20px] bg-[--white] dark:bg-[--black] border border-[--black] dark:border-[--white] px-3 py-1">
            <span className="text-sm text-[--black] dark:text-[--white]">CCD 2025 Team</span>
          </div>
        </div>

        {/* Team Sections */}
        {teamData.allPeople.map((category, index) => (
          <TeamSection
            key={index}
            title={category.title}
            description={category.description}
            cardColor={category.cardColor || 'bg-google-blue'}
            roleTitle={category.title === 'Organizing Team' ? 'Organiser' : 'Team Member'}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.people.map((person) => (
                <TeamMember
                  key={person.id}
                  name={person.title}
                  position={person.content}
                  role={
                    category.title === 'Organizing Team'
                      ? 'Organiser'
                      : category.title === 'Design Team'
                        ? 'Designer'
                        : category.title === 'Web Team'
                          ? 'Developer'
                          : 'Team Member'
                  }
                  cardColor={category.cardColor || 'bg-google-blue'}
                  image={person.image}
                  linkedin={person.linkedin}
                  twitter={person.twitter}
                  instagram={person.instagram}
                  github={person.github}
                  facebook={person.facebook}
                />
              ))}
            </div>
          </TeamSection>
        ))}

        {/* Bottom Decoration */}
        <div className="mt-16 flex justify-start">
          <img
            src="/images/elements/green_block_full.png"
            alt="Decoration"
            className="object-cover h-40 w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
