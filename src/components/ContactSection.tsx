import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  Globe,
  MapPin,
  Send,
  Copy,
  Check,
  Sparkles,
  MessageSquare,
  Clock,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { CONTACT_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // Retrieve CSRF token if hosted inside Laravel blade view
      const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      };

      if (csrfToken) {
        headers['X-CSRF-TOKEN'] = csrfToken;
      }

      // Endpoint path can be configured via window.CONTACT_API_URL or defaults to /api/contact
      const apiUrl = (window as any).CONTACT_API_URL || '/api/contact';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success !== false) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setErrorMessage(
          data.error || data.message || 'Failed to submit form. Please verify details and try again.'
        );
      }
    } catch (err: any) {
      console.error('Error submitting contact form:', err);
      setErrorMessage('Network error occurred while sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#0B1120] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#111827] text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC] tracking-tight">
            Contact Me
          </h2>
          <p className="mt-3 text-lg text-slate-300 font-normal leading-relaxed">
            Interested in senior backend development, system architecture consultation, or lead developer opportunities? Let’s connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="bg-[#111827] rounded-2xl p-5 border border-slate-800 shadow-md flex items-center justify-between group hover:border-[#D4AF37]/50 transition-all">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#0B1120] border border-slate-800 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${CONTACT_DATA.email}`}
                    className="text-sm font-bold text-[#F8FAFC] hover:text-[#D4AF37] transition-colors"
                  >
                    {CONTACT_DATA.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(CONTACT_DATA.email, 'email')}
                className="p-2 rounded-lg bg-[#0B1120] border border-slate-800 text-slate-400 hover:text-[#D4AF37] transition-colors"
                title="Copy Email"
              >
                {copiedItem === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-[#111827] rounded-2xl p-5 border border-slate-800 shadow-md flex items-center justify-between group hover:border-[#D4AF37]/50 transition-all">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#0B1120] border border-slate-800 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    LinkedIn Profile
                  </span>
                  <a
                    href={CONTACT_DATA.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#F8FAFC] hover:text-[#D4AF37] transition-colors"
                  >
                    linkedin.com/in/niral-shakya
                  </a>
                </div>
              </div>

              <a
                href={CONTACT_DATA.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#0B1120] border border-slate-800 text-slate-400 hover:text-[#D4AF37] transition-colors"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>

            {/* Portfolio Card */}
            <div className="bg-[#111827] rounded-2xl p-5 border border-slate-800 shadow-md flex items-center justify-between group hover:border-[#D4AF37]/50 transition-all">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#0B1120] border border-slate-800 text-[#F59E0B] flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Personal Portfolio
                  </span>
                  <a
                    href={CONTACT_DATA.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#F8FAFC] hover:text-[#D4AF37] transition-colors"
                  >
                    niralshakya.com.np
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(CONTACT_DATA.portfolio, 'portfolio')}
                className="p-2 rounded-lg bg-[#0B1120] border border-slate-800 text-slate-400 hover:text-[#D4AF37] transition-colors"
                title="Copy Portfolio URL"
              >
                {copiedItem === 'portfolio' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="bg-[#111827] rounded-2xl p-5 border border-slate-800 shadow-md flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#0B1120] border border-slate-800 text-emerald-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Location
                  </span>
                  <span className="text-sm font-bold text-[#F8FAFC]">
                    {CONTACT_DATA.location}
                  </span>
                </div>
              </div>

              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#0B1120] text-[#D4AF37] border border-[#D4AF37]/30 text-[11px] font-semibold">
                <Clock className="w-3 h-3 text-[#F59E0B]" />
                <span>UTC +5:45</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#111827] rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl">
            <h3 className="text-xl font-bold text-[#F8FAFC] mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#D4AF37]" />
              <span>Send a Message</span>
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Direct inbox delivery for enterprise inquiries, contract roles, or technical discussions.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-[#0B1120] border border-emerald-500/40 text-emerald-300 text-center space-y-3 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h4 className="font-bold text-base text-[#F8FAFC]">Message Sent Successfully!</h4>
                <p className="text-xs text-slate-300">
                  Thank you for reaching out, Niral Shakya will respond to your message promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="mt-2 text-xs text-[#D4AF37] hover:underline font-semibold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={isSubmitting}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-800 bg-[#0B1120] text-[#F8FAFC] placeholder-slate-500 text-xs font-medium focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] outline-none transition-all disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={isSubmitting}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-800 bg-[#0B1120] text-[#F8FAFC] placeholder-slate-500 text-xs font-medium focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] outline-none transition-all disabled:opacity-60"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Share project details, tech stack requirements, or team overview..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-800 bg-[#0B1120] text-[#F8FAFC] placeholder-slate-500 text-xs font-medium focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] outline-none transition-all resize-none disabled:opacity-60"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#D4AF37] hover:bg-[#F59E0B] text-slate-950 font-bold text-xs transition-all shadow-lg flex items-center justify-center gap-2 active:scale-98 disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 text-slate-950 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-slate-950" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
