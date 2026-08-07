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
      {/* Background ambient light grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Main Details */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{HERO_DATA.statusText}</span>
            </div>

            {/* Title & Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                {HERO_DATA.name}
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-800">
                {HERO_DATA.title}
              </p>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {HERO_DATA.subtitle}
            </p>

            {/* Location & Experience Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-600 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>{HERO_DATA.location}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>10+ Years Enterprise Experience</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                <Globe className="w-3.5 h-3.5 text-indigo-600" />
                <span>Japanese Client Track Record</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3 w-full sm:w-auto">
              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 active:scale-98"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('contact');
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300/80 transition-all shadow-xs active:scale-98"
              >
                <Mail className="w-4 h-4 text-blue-600" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-slate-200/60 w-full flex flex-wrap items-center justify-between sm:justify-start gap-4">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://linkedin.com/in/niral-shakya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-white hover:bg-blue-50 hover:text-blue-600 border border-slate-200 transition-all shadow-2xs"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/niralshakya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition-all shadow-2xs"
                >
                  <Github className="w-3.5 h-3.5 text-slate-800" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://niralshakya.com.np"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition-all shadow-2xs"
                >
                  <Globe className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Portfolio</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-white hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200 transition-all shadow-2xs"
                  title="Click to copy email address"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{copiedEmail ? "Copied!" : "Email"}</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column - Architecture & Quick Showcase Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden">
              {/* Card Header Switcher */}
              <div className="bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">
                    NiralShakya_Backend.php
                  </span>
                </div>
                
                <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-lg text-xs">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                      activeTab === 'overview'
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Specs
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                      activeTab === 'code'
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Code
                  </button>
                </div>
              </div>

              {/* Card Body */}
              {activeTab === 'overview' ? (
                <div className="p-6 space-y-5 bg-white">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold">
                      <Code2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">Senior Engineer Core Stack</h3>
                      <p className="text-xs text-slate-500">PHP 8.x • Laravel • REST Architecture • PostgreSQL/MySQL</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-400 block font-semibold text-[10px] uppercase">Primary Focus</span>
                      <span className="font-bold text-slate-800 text-sm">Laravel Backend</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-400 block font-semibold text-[10px] uppercase">Experience</span>
                      <span className="font-bold text-blue-600 text-sm">10+ Years</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-400 block font-semibold text-[10px] uppercase">Current Role</span>
                      <span className="font-bold text-slate-800 text-sm">Senior Programmer</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-400 block font-semibold text-[10px] uppercase">Specialty</span>
                      <span className="font-bold text-indigo-600 text-sm">REST API & DB Tuning</span>
                    </div>
                  </div>

                  {/* Highlights list */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>10 years collaborating with high-standards Japanese clients</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>20+ Enterprise CRMs, CMS, eCommerce & IoT platforms built</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>Stripe, GMO, SoftBank payment gateways & Firebase FCM integration</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onNavigate('expertise')}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Explore Core Expertise</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <div className="p-4 bg-slate-950 text-slate-100 font-mono text-xs overflow-x-auto max-h-[380px] leading-relaxed">
                  <div className="text-slate-500 mb-2">// Repository pattern implementation sample</div>
                  <pre className="text-blue-300">
                    {CODE_SAMPLE_DEFAULT.code}
                  </pre>
                </div>
              )}

              {/* Footer Bar */}
              <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Miracle Interface Pvt. Ltd. (2014-Present)</span>
                <span className="font-semibold text-slate-700">Enterprise Ready</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
