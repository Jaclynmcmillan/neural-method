import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavChild } from '../types';
import Logo from './Logo';

const solutions: NavChild[] = [
  { label: 'Brand Identity', description: 'Logo, typography, visual systems', path: '/solutions/brand-identity' },
  { label: 'Web Design', description: 'Landing pages, marketing sites', path: '/solutions/web-design' },
  { label: 'Growth & Marketing', description: 'SEO, marketing strategy, content strategy, and AI-powered growth systems.', path: '/solutions/growth-and-marketing' },
  { label: 'Web App Development', description: 'Full-stack React/TS apps', path: '/solutions/web-app-development' },
  { label: 'App Development', description: 'iOS/Android native & cross-platform', path: '/solutions/app-development' },
  { label: 'Custom AI Platform', description: 'AI for any use case', path: '/solutions/custom-ai-platform' },
  { label: 'AI Integrations', description: 'Automation, workflows, chatbots', path: '/solutions/ai-integrations' },
  { label: 'Fractional Talent', description: 'On-demand engineering & AI experts', path: '/solutions/fractional-talent' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Desktop dropdown state
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // Mobile dropdown state
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside (Desktop only)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
  }, [location]);

  const handleMobileLinkClick = () => {
    setIsOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
  };

  const toggleMobileDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="fixed w-full z-50 bg-primary/95 backdrop-blur-md border-b border-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group relative z-50"
            onClick={() => {
              window.scrollTo(0, 0);
              setIsOpen(false);
            }}
          >
            <Logo className="w-10 h-10 group-hover:scale-105 transition-transform duration-300" />
            <span className="font-montserrat font-bold text-2xl tracking-tight text-white group-hover:text-white/90 transition-colors">Neural Method</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            
            {/* Solutions Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center font-medium transition-colors ${dropdownOpen ? 'text-accent' : 'text-neutral-light hover:text-accent'}`}
              >
                Solutions
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full right-0 mt-4 w-80 bg-secondary rounded-xl shadow-2xl border border-white/5 overflow-hidden animate-fade-in-down p-2">
                  <div className="grid gap-1">
                    {solutions.map((item) => (
                      <Link
                        key={item.label}
                        to={item.path}
                        className="block px-4 py-3 rounded-lg hover:bg-primary/50 group transition-colors"
                      >
                        <p className="text-sm font-semibold text-white group-hover:text-accent transition-colors">
                          {item.label}
                        </p>
                        <p className="text-xs text-neutral-light/60 mt-0.5">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-neutral-light hover:text-accent font-medium transition-colors">
              About
            </Link>

            <Link to="/contact" className="group">
              <span className="px-5 py-2.5 rounded-full border border-accent text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-300 font-semibold text-sm">
                Contact
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-light hover:text-accent p-2 focus:outline-none relative z-50"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 top-20 z-40 md:hidden bg-primary border-t border-secondary overflow-y-auto h-[calc(100vh-5rem)]">
          <div className="flex flex-col px-4 pt-4 pb-12 space-y-2">
            
            <div className="space-y-1">
              <button
                onClick={toggleMobileDropdown}
                className="w-full text-left px-3 py-4 text-lg text-neutral-light hover:text-accent font-medium flex justify-between items-center rounded-lg hover:bg-white/5 transition-colors border-b border-white/5"
              >
                Solutions
                <ChevronDown className={`w-5 h-5 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileDropdownOpen && (
                <div className="pl-4 space-y-1 bg-white/5 rounded-lg my-2 py-2 animate-fade-in">
                  {solutions.map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      onClick={handleMobileLinkClick}
                      className="block px-3 py-3 text-sm text-neutral-light/90 hover:text-accent border-l-2 border-transparent hover:border-accent transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              onClick={handleMobileLinkClick}
              className="block px-3 py-4 text-lg text-neutral-light hover:text-accent font-medium rounded-lg hover:bg-white/5 transition-colors border-b border-white/5"
            >
              About
            </Link>
            
            <div className="pt-6 mt-auto">
              <Link
                to="/contact"
                onClick={handleMobileLinkClick}
                className="block w-full text-center px-4 py-4 bg-accent text-primary font-bold text-lg rounded-xl hover:bg-white transition-colors shadow-[0_0_15px_rgba(56,182,255,0.3)]"
              >
                Contact Us
              </Link>
            </div>
            
            <div className="h-20"></div> {/* Spacer for bottom scroll */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;