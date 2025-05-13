import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative bg-[--white] dark:bg-[--black] ">
      <Header />
      <main className="flex-grow relative z-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
