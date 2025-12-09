import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import Button from '../components/Button';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    projectDetails: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Prepare JSON payload as requested
    const payload = {
      name: formData.name,
      email: formData.email,
      business: formData.company,
      message: formData.projectDetails
    };

    console.log("Form Submission Payload:", JSON.stringify(payload, null, 2));

    // Simulate backend API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate successful response from backend
      // In a real app, this would be: const response = await fetch('/api/contact', ...);
      // const data = await response.json();
      const mockResponse = { emailSent: true, message: "Email sent successfully" };

      if (mockResponse.emailSent) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', projectDetails: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-primary min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 bg-secondary/80 backdrop-blur-sm p-6 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
        
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Left Column: Contact Info */}
        <div className="flex flex-col justify-center relative z-10">
            <h1 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">Let's Build Something<br/><span className="text-accent">Extraordinary.</span></h1>
            <p className="text-neutral-light/70 text-lg sm:text-xl mb-12">
                Ready to transform your vision into reality? Reach out to our team of experts and let's discuss your next project.
            </p>

            <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-accent shrink-0 border border-white/5 group-hover:border-accent/30 transition-colors shadow-lg">
                    <Mail className="w-6 h-6" />
                    </div>
                    <div>
                    <p className="text-xs text-neutral-light/50 font-bold uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:hello@neuralmethod.com" className="text-white hover:text-accent transition-colors text-lg font-medium block break-all">hello@neuralmethod.com</a>
                    </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-accent shrink-0 border border-white/5 group-hover:border-accent/30 transition-colors shadow-lg">
                    <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                    <p className="text-xs text-neutral-light/50 font-bold uppercase tracking-wider mb-1">Office</p>
                    <p className="text-white text-lg font-medium leading-relaxed">100 Innovation Drive, Suite 500<br/>San Francisco, CA 94105</p>
                    </div>
                </div>
            </div>

            {/* Socials */}
            <div className="pt-8 mt-12 border-t border-white/10 flex gap-6">
                <a href="https://www.linkedin.com/company/109965142/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-secondary bg-primary flex items-center justify-center text-neutral-light hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(56,182,255,0.3)] transition-all">
                    <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://x.com/NeuralMethod" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-secondary bg-primary flex items-center justify-center text-neutral-light hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(56,182,255,0.3)] transition-all">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                </a>
                <a href="https://www.instagram.com/neuralmethod.ai/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-secondary bg-primary flex items-center justify-center text-neutral-light hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(56,182,255,0.3)] transition-all">
                    <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61583954945549" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-secondary bg-primary flex items-center justify-center text-neutral-light hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(56,182,255,0.3)] transition-all">
                    <Facebook className="w-5 h-5" />
                </a>
            </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-primary/50 p-6 md:p-8 rounded-2xl border border-white/5 relative z-10">
            {submitStatus !== 'success' && (
                <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-white mb-6">Send us a Message</h2>
            )}
            
            {submitStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-neutral-light/80 max-w-xs">
                  Thanks, your message has been sent. I’ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start gap-3 text-red-400">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Something went wrong.</p>
                        <p className="text-xs opacity-80">Please try again or use an alternate contact method.</p>
                      </div>
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-neutral-light/60 uppercase tracking-wider mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full bg-secondary/50 border border-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors placeholder-neutral-light/30 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-neutral-light/60 uppercase tracking-wider mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full bg-secondary/50 border border-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors placeholder-neutral-light/30 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold text-neutral-light/60 uppercase tracking-wider mb-2">Company (Optional)</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full bg-secondary/50 border border-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors placeholder-neutral-light/30 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Company Ltd."
                    />
                  </div>
                  <div>
                    <label htmlFor="projectDetails" className="block text-xs font-semibold text-neutral-light/60 uppercase tracking-wider mb-2">Project Details</label>
                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      rows={5}
                      className="w-full bg-secondary/50 border border-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors placeholder-neutral-light/30 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Tell us about your project goals, timeline, and budget..."
                    ></textarea>
                  </div>
                  <Button type="submit" fullWidth className="group" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>Sending <Loader2 className="w-4 h-4 ml-2 animate-spin" /></>
                      ) : (
                        <>Send Message <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></>
                      )}
                  </Button>
              </form>
            )}
        </div>

      </div>
    </div>
  );
};

export default Contact;