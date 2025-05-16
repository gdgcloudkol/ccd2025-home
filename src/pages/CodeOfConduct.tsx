import React from 'react';
import { ContentParagraph } from '@/components/ui/PageContentParagraph';
import { PageHeader } from '@/components/ui/PageHeader';
import { SubHeader } from '@/components/ui/SubHeader';
import codeOfConduct from '../../public/content/codeofconduct.json';
import HrWithImage from '@/components/ui/HrWithImage';

interface CodeOfConductData {
  title: string;
  introduction: string;
  illustration: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  mainContent: string;
  sections: {
    title: string;
    content: string;
  }[];
}

const CodeOfConduct: React.FC = () => {
  const conductData = codeOfConduct as CodeOfConductData;

  return (
    <div className="container mx-auto px-4 md:px-12 py-14 relative z-10">
      <div className="min-h-screen overflow-hidden">
        <div className="">
          <PageHeader>{conductData.title}</PageHeader>

          <ContentParagraph className="text-base py-2">{conductData.introduction}</ContentParagraph>

          <HrWithImage
            src={conductData.illustration.src}
            alt={conductData.illustration.alt}
            width={conductData.illustration.width}
            height={conductData.illustration.height}
          />

          <ContentParagraph>{conductData.mainContent}</ContentParagraph>

          {conductData.sections.map((section, index) => (
            <section key={index}>
              <SubHeader>{section.title}</SubHeader>
              <ContentParagraph>{section.content}</ContentParagraph>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct;
