import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';
import Logo from './Logo';

const solutions = [
  { label: 'Brand Identity', path: '/solutions/brand-identity' },
  { label: 'Web Design', path: '/solutions/web-design' },
  { label: 'Growth & Marketing', path: '/solutions/growth-and-marketing' },
  { label: 'Web App Development', path: '/solutions/web-app-development' },
  { label: 'App Development', path: '/solutions/app-development' },
  { label: 'Custom AI Platform', path: '/solutions/custom-ai-platform' },
  { label: 'AI Integrations', path: '/solutions/ai-integrations' },
  { label: 'Fractional Talent', path: '/solutions/fractional-talent' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary border-t border-white/5 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column - Spans 5 columns */}
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center space-x-3 mb-6 group w-fit" onClick={() => window.scrollTo(0, 0)}>
              <Logo className="w-8 h-8 group-hover:scale-105 transition-transform" />
              <span className="font-montserrat font-bold text-xl text-white">Neural Method</span>
            </Link>
            <p className="text-neutral-light/60 text-sm leading-relaxed mb-8 max-w-sm">
              A hybrid creative + technical agency building products, brands, and systems that scale. We blend intelligence and methodology to deliver future-proof digital solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/109965142/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-neutral-light/70 hover:bg-accent hover:text-primary transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="https://x.com/NeuralMethod" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-neutral-light/70 hover:bg-accent hover:text-primary transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="https://www.instagram.com/neuralmethod.ai/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-neutral-light/70 hover:bg-accent hover:text-primary transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61583954945549" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-neutral-light/70 hover:bg-accent hover:text-primary transition-all duration-300">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Solutions Column - Spans 7 columns */}
          <div className="lg:col-span-7">
            <h3 className="font-montserrat font-bold text-white mb-6">Solutions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {solutions.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path}
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-neutral-light/60 hover:text-accent text-sm transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="group-hover:translate-x-1 transition-transform">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-light/40 text-xs">
            © {new Date().getFullYear()} Neural Method. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link to="#" className="text-neutral-light/40 hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-neutral-light/40 hover:text-white text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;