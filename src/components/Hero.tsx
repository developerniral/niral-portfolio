import React, { useState } from 'react';
import {
  FileText,
  Mail,
  Linkedin,
  Github,
  Globe,
  MapPin,
  CheckCircle2,
  Terminal,
  Code2,
  Database,
  ShieldCheck,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { HERO_DATA, CODE_SAMPLE_DEFAULT } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onNavigate: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onNavigate }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'code'>('overview');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('shakya.niral@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Main Details */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold shadow-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F59E0B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
              </span>
              <span>{HERO_DATA.statusText}</span>
            </div>

            {/* Title & Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F8FAFC] tracking-tight leading-[1.1]">
                {HERO_DATA.name}
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F59E0B] to-slate-200">
                {HERO_DATA.title}
              </p>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {HERO_DATA.subtitle}
            </p>

            {/* Location & Experience Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-300 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111827] border border-slate-800 shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{HERO_DATA.location}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111827] border border-slate-800 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>10+ Years Enterprise Experience</span>
              </div>
              
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3 w-full sm:w-auto">
              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-[#D4AF37] hover:bg-[#F59E0B] transition-all shadow-lg shadow-[#D4AF37]/20 active:scale-98"
              >
                <FileText className="w-4 h-4 text-slate-950" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('contact');
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#F8FAFC] bg-[#111827] hover:bg-slate-800 border border-slate-700 hover:border-[#D4AF37]/50 transition-all shadow-xs active:scale-98"
              >
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-slate-800 w-full flex flex-wrap items-center justify-between sm:justify-start gap-4">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://linkedin.com/in/niral-shakya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-[#111827] hover:bg-slate-800 hover:text-[#D4AF37] border border-slate-800 transition-all shadow-2xs"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/niralshakya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-[#111827] hover:bg-slate-800 hover:text-[#D4AF37] border border-slate-800 transition-all shadow-2xs"
                >
                  <Github className="w-3.5 h-3.5 text-slate-300" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://niralshakya.com.np"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-[#111827] hover:bg-slate-800 hover:text-[#D4AF37] border border-slate-800 transition-all shadow-2xs"
                >
                  <Globe className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>Portfolio</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-[#111827] hover:bg-slate-800 hover:text-emerald-400 border border-slate-800 transition-all shadow-2xs"
                  title="Click to copy email address"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{copiedEmail ? "Copied!" : "Email"}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
