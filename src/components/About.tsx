import React from 'react';
import {
  Code,
  CheckCircle2,
  Layers,
  Sparkles,
  GitPullRequest,
  CheckSquare,
  ShieldCheck,
  Server
} from 'lucide-react';
import { ABOUT_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const sdlcSteps = [
    { name: "Requirements", desc: "Gathering enterprise client specs" },
    { name: "Architecture", desc: "SOLID DB & System design" },
    { name: "Development", desc: "Clean PHP/Laravel implementation" },
    { name: "API & Gateways", desc: "REST & Japanese payment setup" },
    { name: "Deployment", desc: "Optimization, CI/CD & Maintenance" }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-[#0B1120] border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#111827] text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC] tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-lg text-slate-300 font-normal leading-relaxed">
            {ABOUT_DATA.summary}
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Column: Specializations Grid */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-[#111827] rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl">
              <h3 className="text-lg font-bold text-[#F8FAFC] mb-4 flex items-center gap-2">
                <Server className="w-5 h-5 text-[#D4AF37]" />
                <span>Specialized In</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ABOUT_DATA.specializations.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0B1120] border border-slate-800 shadow-2xs hover:border-[#D4AF37]/50 hover:shadow-md transition-all group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#111827] text-[#D4AF37] flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] group-hover:text-slate-950 transition-colors">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-sm text-[#F8FAFC]">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Value Delivery Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {ABOUT_DATA.highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-[#111827] border border-slate-800 shadow-md space-y-2 hover:border-[#D4AF37]/40 transition-all"
                >
                  <h4 className="font-bold text-sm text-[#D4AF37]">{item.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive SDLC Lifecycle & Experience Accent */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="bg-slate-950 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-semibold text-[#F59E0B] uppercase tracking-wider">
                    Software Lifecycle
                  </span>
                  <h3 className="text-lg font-bold text-[#F8FAFC]">Full SDLC Execution</h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#111827] text-[#D4AF37] text-xs font-mono font-medium border border-[#D4AF37]/30">
                  10+ Years
                </div>
              </div>

              {/* Step Flow */}
              <div className="space-y-4">
                {sdlcSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#D4AF37] text-slate-950 flex items-center justify-center text-xs font-bold font-mono shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <span className="text-sm font-bold text-[#F8FAFC] block">{step.name}</span>
                      <span className="text-xs text-slate-400 block">{step.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
