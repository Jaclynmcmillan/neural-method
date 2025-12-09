import React from 'react';
import { Target, Zap, Shield, Rocket } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-primary pt-12 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="border-l-4 border-accent pl-6 sm:pl-8 py-2">
           <p className="font-inter font-medium italic text-xl sm:text-2xl md:text-3xl text-neutral-light leading-relaxed">
            "Neural Method is a modern studio blending strategic design, product engineering, and AI innovation. We build scalable brands, intelligent digital experiences, and high-performing systems for founders and teams who want to accelerate growth without complexity."
          </p>
        </div>
      </section>

      {/* Image Strip - Panoramic Style */}
      <section className="w-full h-64 md:h-96 mb-24 overflow-hidden relative group">
        <img 
          src="https://picsum.photos/1920/600?grayscale" 
          alt="Neural Method Office Panorama" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-white mb-12">What We Believe</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex gap-6">
            <div className="w-12 h-12 rounded bg-secondary flex items-center justify-center shrink-0 text-accent">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-white mb-2">Precision Over Noise</h3>
              <p className="text-neutral-light/70 text-lg">We don't do fluff. Every pixel, line of code, and strategy is engineered for a specific outcome. We value clarity and directness in our work and communication.</p>
            </div>
          </div>
          
          <div className="flex gap-6">
             <div className="w-12 h-12 rounded bg-secondary flex items-center justify-center shrink-0 text-accent">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-white mb-2">Velocity with Stability</h3>
              <p className="text-neutral-light/70 text-lg">Speed matters, but not at the cost of breaking things. We build systems designed to scale from day one, ensuring you move fast without technical debt.</p>
            </div>
          </div>

          <div className="flex gap-6">
             <div className="w-12 h-12 rounded bg-secondary flex items-center justify-center shrink-0 text-accent">
              <Rocket className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-white mb-2">Future-Proof Innovation</h3>
              <p className="text-neutral-light/70 text-lg">We stay ahead of the curve, integrating cutting-edge AI and tech stacks so our clients dominate their markets rather than just participating in them.</p>
            </div>
          </div>

           <div className="flex gap-6">
             <div className="w-12 h-12 rounded bg-secondary flex items-center justify-center shrink-0 text-accent">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-white mb-2">Reliability as a Feature</h3>
              <p className="text-neutral-light/70 text-lg">Trust is our currency. We deliver on time, on budget, and to spec. No excuses, just high-quality execution that you can depend on.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-white mb-8">Our Story</h2>
        <p className="text-lg sm:text-xl text-neutral-light/80 leading-relaxed mb-6">
          Neural Method began with a simple observation: the gap between "creative agencies" and "engineering shops" was widening. Brands looked great but didn't function well, or products worked perfectly but felt soulless.
        </p>
        <p className="text-lg sm:text-xl text-neutral-light/80 leading-relaxed">
          We founded Neural Method to close that gap. By merging top-tier aesthetic methodology with rigorous engineering and AI capability, we created a new kind of studio—one that understands that in the modern era, <strong>brand is code, and code is brand.</strong>
        </p>
      </section>
    </div>
  );
};

export default About;