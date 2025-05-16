import React from 'react';

export interface AccordionItemProps {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
  isOpen: boolean;
  toggleAccordion: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ 
  title, 
  content, 
  isOpen, 
  toggleAccordion 
}) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="flex justify-between items-center w-full py-4 px-4 text-left focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="text-base md:text-lg font-medium text-[--black] dark:text-[--white]">
          {title}
        </span>
        <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5 text-[--black] dark:text-[--white]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}
      >
        <div className="px-4 text-[--gray] dark:text-[--gray20]">
          {content}
        </div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: {
    id: string;
    title: React.ReactNode;
    content: React.ReactNode;
  }[];
  openItems?: { [key: string]: boolean };
  onToggle?: (id: string) => void;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ 
  items, 
  openItems = {}, 
  onToggle,
  className = '' 
}) => {
  const handleToggle = (id: string) => {
    if (onToggle) {
      onToggle(id);
    }
  };

  return (
    <div className={`divide-y divide-gray-200 dark:divide-gray-700 ${className}`}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          isOpen={!!openItems[item.id]}
          toggleAccordion={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
};

export default Accordion;