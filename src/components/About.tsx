import React, { useState } from 'react';
import {
  CheckCircle2,
  Sparkles,
  Server,
  User,
  Briefcase,
  MapPin
} from 'lucide-react';
import { ABOUT_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-16 sm:py-20 bg-[#0B1120] border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Block: About Me Description + Profile Picture Side-by-Side */}
        <div className="bg-[#111827] rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 relative z-10">
            
            {/* Left: Section Header & About Description */}
            <div className="flex-1 space-y-4 text-left">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0B1120] text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-semibold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Professional Profile</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
                About Me
              </h2>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed pt-1">
                {ABOUT_DATA.summary}
              </p>

              {/* Quick Info Chips */}
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-semibold text-slate-300">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0B1120] border border-slate-800">
                  <Briefcase className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0B1120] border border-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>Kathmandu, Nepal</span>
                </div>
              </div>
            </div>

            {/* Right: Profile Picture Frame directly beside the description */}
            <div className="shrink-0 w-44 sm:w-52 md:w-56">
              <div className="relative group">
                {/* Subtle Gold Ambient Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/25 to-[#F59E0B]/20 rounded-2xl blur-lg opacity-60 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative bg-[#0B1120] rounded-2xl p-2.5 border border-slate-800 shadow-xl overflow-hidden group-hover:border-[#D4AF37]/60 transition-all duration-300">
                  <div className="relative aspect-3/4 w-full rounded-xl overflow-hidden bg-[#111827] border border-slate-800/80 flex items-center justify-center">
                    {!imageError ? (
                      <img
                        src="/assets/profile.jpg"
                        alt="Niral Shakya"
                        onError={() => setImageError(true)}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-b from-[#111827] to-[#0B1120]">
                        <div className="w-16 h-16 rounded-full bg-[#0B1120] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] mb-2 shadow-inner">
                          <User className="w-8 h-8" />
                        </div>
                        <span className="text-xs font-bold text-[#F8FAFC]">Niral Shakya</span>
                        <span className="text-[10px] text-[#D4AF37] mt-0.5 font-medium">Senior PHP Dev</span>
                      </div>
                    )}
                    {/* Thematic dark gradient overlay for smooth visual blending */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/70 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Block: Specializations & Key Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Specializations Grid */}
          <div className="lg:col-span-7 bg-[#111827] rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-[#F8FAFC] mb-4 flex items-center gap-2">
                <Server className="w-5 h-5 text-[#D4AF37]" />
                <span>Specialized In</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ABOUT_DATA.specializations.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#0B1120] border border-slate-800 shadow-2xs hover:border-[#D4AF37]/50 hover:shadow-md transition-all group"
                  >
                    <div className="w-6 h-6 rounded-lg bg-[#111827] text-[#D4AF37] flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] group-hover:text-slate-950 transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-semibold text-sm text-[#F8FAFC]">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Value Delivery Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {ABOUT_DATA.highlights.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-2xl bg-[#111827] border border-slate-800 shadow-md flex flex-col justify-center space-y-1 hover:border-[#D4AF37]/40 transition-all"
              >
                <h4 className="font-bold text-xs sm:text-sm text-[#D4AF37]">{item.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
