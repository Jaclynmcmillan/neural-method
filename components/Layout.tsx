import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  // Footer should be hidden on:
  // 1. All Solution pages (/solutions/...)
  // 2. The Contact page (/contact)
  const isSolutionPage = location.pathname.startsWith('/solutions/');
  const isContactPage = location.pathname === '/contact';
  
  const shouldShowFooter = !isSolutionPage && !isContactPage;

  return (
    <div className="min-h-screen bg-primary flex flex-col font-inter text-neutral-light selection:bg-accent selection:text-primary">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      {shouldShowFooter && (
        <div className="hidden md:block">
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Layout;