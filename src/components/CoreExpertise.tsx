import React from 'react';
import {
  Server,
  Database,
  Cpu,
  Cloud,
  Layout,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { CORE_EXPERTISE } from '../data/portfolioData';

export const CoreExpertise: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-5 h-5 text-[#D4AF37]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-[#F59E0B]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-[#D4AF37]" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#F59E0B]" />;
      default:
        return <Server className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="expertise" className="py-16 sm:py-20 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#111827] text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Technical Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC] tracking-tight">
            Core Expertise
          </h2>
          <p className="mt-3 text-lg text-slate-300 font-normal leading-relaxed">
            A comprehensive overview of core domain strengths built across 10+ years of high-volume backend development.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_EXPERTISE.map((item, index) => (
            <div
              key={index}
              className="bg-[#111827] rounded-2xl p-6 border border-slate-800 shadow-md hover:shadow-xl hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header with Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0B1120] border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold text-[#D4AF37] font-mono">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#F8FAFC] mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Skills List */}
                <div className="space-y-2 pt-4 border-t border-slate-800">
                  {item.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs font-semibold text-[#F8FAFC]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
