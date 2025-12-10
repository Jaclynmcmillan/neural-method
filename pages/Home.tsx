import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Smartphone, Users, Palette, Code, Cpu, Workflow, Layers, Briefcase, TrendingUp } from 'lucide-react';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import { trackEvent } from '../analytics';

const Home: React.FC = () => {
  // 🔹 CTA tracking handlers
  const handleStartProjectClick = () => {
    trackEvent({
      action: 'click_start_project',
      category: 'cta',
      label: 'hero_start_your_project',
    });
  };

  const handleOurPhilosophyClick = () => {
    trackEvent({
      action: 'click_our_philosophy',
      category: 'cta',
      label: 'hero_our_philosophy',
    });
  };

  const handleQuickCardClick = (card: string) => {
    trackEvent({
      action: 'click_quick_card',
      category: 'navigation',
      label: card,
    });
  };

  const handleFractionalTalentClick = () => {
    trackEvent({
      action: 'click_fractional_talent_cta',
      category: 'cta',
      label: 'fractional_engineering_inquire',
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')] bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
        
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>

        <div className="relative max-w-7xl mx-auto w-full pt-16 pb-24 text-center z-10">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm">
            <span className="text-accent text-[10px] sm:text-xs font-semibold tracking-wide uppercase">The Future of Digital Building</span>
          </div>
          
          <h1 className="font-montserrat font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-tight leading-tight">
            We blend <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">intelligence</span>
            <span className="sm:hidden"> </span>
            <br className="hidden sm:block" />
