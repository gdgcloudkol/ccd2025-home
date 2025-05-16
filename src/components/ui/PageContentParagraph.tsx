import React from 'react';

interface ContentParagraphProps {
  children?: React.ReactNode;
  className?: string;
  html?: string; 
}

export function ContentParagraph({ children, className = "", html }: ContentParagraphProps) {
  if (html) {
    return (
      <p 
        className={`mb-6 text-[--gray] dark:text-[--gray20] leading-relaxed whitespace-pre-line ${className} [&_a]:text-gray-500 [&_a]:underline [&_a]:font-medium hover:[&_a]:text-gray-400 dark:[&_a]:text-gray-400 dark:hover:[&_a]:text-gray-500`} 
        dangerouslySetInnerHTML={{ __html: html }} 
      />
    );
  }
  
  return <p className={`mb-6 text-[--gray] dark:text-[--gray20] leading-relaxed whitespace-pre-line ${className}`}>{children}</p>;
}