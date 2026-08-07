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
    <section id="experience" className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-3 text-lg text-slate-600 font-normal leading-relaxed">
            Over a decade of continuous senior-level software engineering and architectural delivery.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="space-y-8">
          {EXPERIENCE_DATA.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs hover:border-blue-300 transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200/80 pb-6">
                
                {/* Role & Company */}
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold">
                    <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                    <span>Current Primary Role</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 pt-1">
                    {item.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-700">
                    <span className="text-blue-600 font-bold">{item.company}</span>
                    <span className="text-slate-300">•</span>
                    <span className="flex items-center gap-1 text-slate-500 font-medium">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Period Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-slate-800 font-mono text-xs font-bold shrink-0 self-start lg:self-auto">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span>{item.period} (10+ Years)</span>
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
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/60 shadow-2xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-slate-700 leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="mt-6 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-500 mr-2">Technologies Used:</span>
                {item.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-medium font-mono shadow-2xs"
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
