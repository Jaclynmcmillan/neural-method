import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Smartphone, Users, Palette, Code, Cpu, Workflow, Layers, Briefcase, TrendingUp } from 'lucide-react';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';

const Home: React.FC = () => {
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
            and methodology.
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-light/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed px-4">
            Neural Method is a hybrid creative + technical agency building products, brands, and systems that scale.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-20">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" fullWidth className="sm:w-auto">Start Your Project</Button>
            </Link>
            <Link to="/about" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" fullWidth className="sm:w-auto">Our Philosophy</Button>
            </Link>
          </div>

          {/* Quick Access Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            <Link to="/solutions/web-design" className="group bg-secondary/80 backdrop-blur-md p-6 rounded-xl border border-white/5 hover:border-accent hover:bg-secondary transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <Monitor className="text-accent w-8 h-8" />
                <span className="text-xs font-mono text-neutral-light/50 border border-white/10 px-2 py-1 rounded group-hover:border-accent/30 group-hover:text-accent transition-colors">WEB</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-1 group-hover:text-accent transition-colors">Websites & Development</h3>
              <div className="flex items-center text-sm text-neutral-light/60 group-hover:text-white transition-colors">
                Explore Work <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link to="/solutions/app-development" className="group bg-secondary/80 backdrop-blur-md p-6 rounded-xl border border-white/5 hover:border-accent hover:bg-secondary transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <Smartphone className="text-accent w-8 h-8" />
                <span className="text-xs font-mono text-neutral-light/50 border border-white/10 px-2 py-1 rounded group-hover:border-accent/30 group-hover:text-accent transition-colors">APP</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-1 group-hover:text-accent transition-colors">App Development</h3>
              <div className="flex items-center text-sm text-neutral-light/60 group-hover:text-white transition-colors">
                Explore Apps <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link to="/solutions/fractional-talent" className="group bg-secondary/80 backdrop-blur-md p-6 rounded-xl border border-white/5 hover:border-accent hover:bg-secondary transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <Users className="text-accent w-8 h-8" />
                <span className="text-xs font-mono text-neutral-light/50 border border-white/10 px-2 py-1 rounded group-hover:border-accent/30 group-hover:text-accent transition-colors">TEAM</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-1 group-hover:text-accent transition-colors">Fractional Talent</h3>
              <div className="flex items-center text-sm text-neutral-light/60 group-hover:text-white transition-colors">
                Hire Experts <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-primary relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">Our Methodology</h2>
            <p className="text-neutral-light/70 max-w-2xl mx-auto text-lg sm:text-xl">
              We provide end-to-end digital solutions, from visual identity to complex AI infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <ServiceCard 
              title="Brand Identity" 
              description="Strategic logo design, typography selection, and comprehensive visual systems that communicate authority."
              Icon={Palette}
            />
            <ServiceCard 
              title="Web Design" 
              description="High-converting landing pages and immersive marketing sites designed for impact and retention."
              Icon={Layers}
            />
            <ServiceCard 
              title="Growth & Marketing" 
              description="SEO, marketing strategy, content strategy, and AI-powered growth systems."
              Icon={TrendingUp}
            />
            <ServiceCard 
              title="Web App Development" 
              description="Scalable, full-stack React/TypeScript applications built for performance and maintainability."
              Icon={Code}
            />
            <ServiceCard 
              title="App Development" 
              description="Native and cross-platform mobile experiences for iOS and Android that users love."
              Icon={Smartphone}
            />
            <ServiceCard 
              title="Custom AI Platforms" 
              description="Tailored AI solutions for your specific business use case, built on secure and scalable infrastructure."
              Icon={Cpu}
            />
            <ServiceCard 
              title="AI Integrations" 
              description="Seamless automation workflows, intelligent chatbots, and data processing pipelines."
              Icon={Workflow}
            />
            <div className="md:col-span-2 lg:col-span-3">
              <div className="group bg-gradient-to-br from-secondary to-[#1a2530] p-6 sm:p-8 rounded-xl border border-white/5 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,182,255,0.05)] flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-accent border border-white/5 shadow-lg shrink-0">
                  <Briefcase className="w-8 h-8" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-montserrat text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    Fractional Engineering Talent
                  </h3>
                  <p className="text-neutral-light/70 text-lg">
                    Need on-demand expertise? We deploy senior engineers and AI specialists to integrate with your team and accelerate your roadmap.
                  </p>
                </div>
                <Link to="/contact" className="w-full md:w-auto mt-6 md:mt-0">
                  <Button variant="outline" fullWidth className="md:w-auto">Inquire Now</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;