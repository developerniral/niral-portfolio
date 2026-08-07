import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  Users,
  Award,
  ArrowRight
} from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 bg-[#0B1120] border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#111827] text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC] tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-3 text-lg text-slate-300 font-normal leading-relaxed">
            Over a decade of continuous senior-level software engineering and architectural delivery.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="space-y-8">
          {EXPERIENCE_DATA.map((item, index) => (
            <div
              key={index}
              className="bg-[#111827] rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl hover:border-[#D4AF37]/40 transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                
                {/* Role & Company */}
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1120] text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-bold">
                    <Briefcase className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{index === 0 ? "Enterprise Full-Time Role" : "Freelance Contract Role"}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#F8FAFC] pt-1">
                    {item.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-300">
                    <span className="text-[#D4AF37] font-bold">{item.company}</span>
                    <span className="text-slate-600">•</span>
                    <span className="flex items-center gap-1 text-slate-400 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Period Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0B1120] border border-slate-800 text-[#F8FAFC] font-mono text-xs font-bold shrink-0 self-start lg:self-auto">
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span>{item.period}</span>
                </div>

              </div>

              {/* Highlights List */}
              <div className="mt-6 space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Key Responsibilities & Achievements
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {item.highlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0B1120] border border-slate-800 shadow-2xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-slate-200 leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="mt-6 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-400 mr-2">Technologies Used:</span>
                {item.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg bg-[#0B1120] border border-slate-800 text-[#D4AF37] text-xs font-medium font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
