import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import Button from '../components/Button';
import { ContactFormData } from '../types';
import { trackEvent } from '../analytics'; // 👈 add this

const FORM_ENDPOINT = 'https://formspree.io/f/meoyroly' // 👈 put your form URL here

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    projectDetails: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] =
    useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus('idle');

  // Build FormData for Formspree
  const formDataToSend = new FormData();
  formDataToSend.append('name', formData.name);
  formDataToSend.append('email', formData.email);
  formDataToSend.append('company', formData.company);
  formDataToSend.append('message', formData.projectDetails);

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      // ✅ DO NOT set Content-Type manually, Formspree needs the boundary
      headers: {
        Accept: 'application/json',
      },
      body: formDataToSend,
    });

    const data = await response.json().catch(() => null);
    console.log('Formspree response:', response.status, data);

    if (response.ok) {
      // Optional: GA event
      try {
        trackEvent({
          action: 'submit_contact_form',
          category: 'lead',
          label: 'contact_page',
        });
      } catch (err) {
        console.log('[GA] contact submit tracking error', err);
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        projectDetails: '',
      });
    } else {
      console.error('Form submit failed:', data);
      setSubmitStatus('error');
    }
  } catch (error) {
    console.error('Submission error:', error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};


  // 🔻 keep everything below exactly as you have it now
  return (
    <div className="bg-primary min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      {/* ...the rest of your JSX is unchanged... */}
    </div>
  );
};

export default Contact;

