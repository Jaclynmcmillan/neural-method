import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Palette, Code, Smartphone, Cpu, Workflow, Layers, Users, ExternalLink, TrendingUp } from 'lucide-react';
import Button from '../components/Button';

// Data for solutions
const solutionData: Record<string, any> = {
  'brand-identity': {
    title: 'Brand Identity',
    subtitle: 'Visual Systems that Scale',
    description: 'We craft distinctive visual identities that resonate with your audience and stand the test of time. From logos to comprehensive design systems, we ensure every touchpoint communicates authority and innovation.',
    features: ['Strategic Logo Design', 'Typography & Color Systems', 'Comprehensive Brand Guidelines', 'Visual Asset Libraries'],
    icon: Palette,
    featuredProject: {
      title: "Lumina Financial",
      description: "A complete rebrand for a Series B fintech startup. We developed a trust-centric visual identity, comprehensive design system, and motion guidelines that helped them secure their next round of funding.",
      imageUrl: "https://picsum.photos/id/445/800/600?grayscale",
      link: "#"
    }
  },
  'web-design': {
    title: 'Web Design',
    subtitle: 'Immersive Digital Experiences',
    description: 'High-converting landing pages and marketing sites designed to captivate and convert. We blend world-class aesthetics with rigorous usability standards to create sites that perform.',
    features: ['UX/UI Design', 'Interactive Prototyping', 'Responsive & Adaptive Layouts', 'Conversion Rate Optimization'],
    icon: Layers,
    featuredProject: {
      title: "Vantage Architecture",
      description: "An award-winning portfolio site for a global architecture firm. Features include WebGL-powered project visualizations, smooth scroll interactions, and a headless CMS backend for easy content management.",
      imageUrl: "https://picsum.photos/id/1/800/600?grayscale",
      link: "#"
    }
  },
  'growth-and-marketing': {
    title: 'Growth & Marketing',
    subtitle: 'SEO & AI-Powered Growth',
    description: 'Scale your digital presence with data-driven strategies. We combine technical SEO, content marketing, and AI-powered automation to drive organic traffic and convert visitors into loyal customers.',
    features: ['Technical SEO Audits', 'Content Strategy & Creation', 'AI-Powered Marketing Automation', 'Conversion Rate Optimization'],
    icon: TrendingUp
  },
  'web-app-development': {
    title: 'Web App Development',
    subtitle: 'Robust & Scalable Applications',
    description: 'Full-stack web applications built with modern technologies like React, TypeScript, and Node.js. We prioritize performance, security, and maintainability to ensure your product scales with your business.',
    features: ['React & Next.js Development', 'Scalable API Architecture', 'Database Design & Optimization', 'Cloud Infrastructure Setup'],
    icon: Code,
    featuredProject: {
      title: "Nexus Dashboard",
      description: "A mission-critical analytics platform for a logistics enterprise. Features real-time data visualization via WebSocket connections, role-based access control, and automated reporting pipelines handling millions of data points daily.",
      imageUrl: "https://picsum.photos/id/180/800/600?grayscale",
      link: "#"
    }
  },
  'app-development': {
    title: 'App Development',
    subtitle: 'Native & Cross-Platform Mobile Apps',
    description: 'We build beautiful, high-performance mobile applications for iOS and Android using React Native and native technologies. We ensure a native feel with the efficiency of cross-platform development.',
    features: ['iOS & Android Deployment', 'Cross-Platform React Native', 'App Store Optimization', 'Mobile-First UI/UX'],
    icon: Smartphone,
    featuredProject: {
      title: "HealthTrack Pro",
      description: "A cross-platform wellness application integrating with Apple Health and Google Fit. Features include real-time workout tracking, social challenges, and AI-driven personalized coaching plans.",
      imageUrl: "https://picsum.photos/id/225/800/600?grayscale",
      link: "#"
    }
  },
  'custom-ai-platform': {
    title: 'Custom AI Platform',
    subtitle: 'Tailored Artificial Intelligence',
    description: 'Leverage the power of AI with custom solutions trained on your data. We build secure, scalable AI platforms that solve specific business problems, from predictive analytics to intelligent processing.',
    features: ['LLM Fine-tuning & RAG', 'Predictive Analytics Models', 'Secure Data Pipelines', 'Custom AI Infrastructure'],
    icon: Cpu
  },
  'ai-integrations': {
    title: 'AI Integrations',
    subtitle: 'Automate & Enhance Workflows',
    description: 'Integrate advanced AI capabilities into your existing software ecosystem. From intelligent chatbots to automated content generation workflows, we help you do more with less.',
    features: ['Workflow Automation', 'Intelligent Chatbots', 'Third-party API Integrations', 'Business Process Optimization'],
    icon: Workflow
  },
  'fractional-talent': {
    title: 'Fractional Talent',
    subtitle: 'Expertise On Demand',
    description: 'Access top-tier engineering and design talent without the overhead of full-time hires. We integrate senior experts seamlessly into your team to accelerate your roadmap and elevate your code quality.',
    features: ['Senior Engineers & Architects', 'AI Specialists & Data Scientists', 'Product Designers', 'Technical Leadership'],
    icon: Users
  }
};

const Solution: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const solution = slug ? solutionData[slug] : null;

  if (!solution) {
    return <Navigate to="/" replace />;
  }

  const Icon = solution.icon;

  return (
    <div className="pt-24 pb-20 min-h-screen bg-primary">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex flex-col items-center text-center">
        
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-secondary/50 rounded-2xl flex items-center justify-center text-accent border border-white/10 shadow-xl shrink-0 mb-8">
            <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>
        
        <div>
            <h1 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">{solution.title}</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-accent mb-6 font-medium">{solution.subtitle}</p>
            <p className="text-neutral-light/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                {solution.description}
            </p>
        </div>
      </section>

      {/* Featured Project Section */}
      {solution.featuredProject && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 animate-fade-in">
          <div className="flex items-center gap-4 mb-8">
             <div className="h-px bg-white/10 flex-grow"></div>
             <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-white text-center">Featured Project</h2>
             <div className="h-px bg-white/10 flex-grow"></div>
          </div>
          
          <div className="group relative bg-secondary/20 rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300 overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
               {/* Image Side */}
               <div className="relative h-64 md:h-auto overflow-hidden">
                 <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                 <img 
                   src={solution.featuredProject.imageUrl} 
                   alt={solution.featuredProject.title}
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
               </div>
               
               {/* Content Side */}
               <div className="p-8 md:p-12 flex flex-col justify-center">
                 <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-4 w-fit">
                    Case Study
                 </div>
                 <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-white mb-4">
                   {solution.featuredProject.title}
                 </h3>
                 <p className="text-neutral-light/70 text-lg leading-relaxed mb-8">
                   {solution.featuredProject.description}
                 </p>
                 <div>
                   <a 
                     href={solution.featuredProject.link} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="inline-block"
                   >
                     <Button variant="outline" className="group/btn">
                       Visit Live Project 
                       <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                     </Button>
                   </a>
                 </div>
               </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-white mb-8 text-center">Key Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solution.features.map((feature: string, index: number) => (
                <div key={index} className="bg-secondary/30 border border-white/5 p-6 rounded-xl flex items-center gap-4 hover:border-accent/30 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-white font-medium text-lg">{feature}</span>
                </div>
            ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <div className="bg-gradient-to-br from-secondary to-primary border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
            
            <h2 className="relative z-10 font-montserrat font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-4">Ready to get started?</h2>
            <p className="relative z-10 text-neutral-light/70 mb-8 text-lg sm:text-xl">
                Let's discuss how our {solution.title} services can help you achieve your goals.
            </p>
            <Link to="/contact" className="relative z-10 inline-block w-full sm:w-auto">
                <Button size="lg" fullWidth className="sm:w-auto">Start Your Project</Button>
            </Link>
        </div>
      </section>
    </div>
  );
};

export default Solution;