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
        return <Server className="w-5 h-5 text-blue-600" />;
      case 'Database':
        return <Database className="w-5 h-5 text-indigo-600" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-600" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-sky-600" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-violet-600" />;
      default:
        return <Server className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="expertise" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Core Expertise
          </h2>
          <p className="mt-3 text-lg text-slate-600 font-normal leading-relaxed">
            A comprehensive overview of core domain strengths built across 10+ years of high-volume backend development.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_EXPERTISE.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-blue-400/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header with Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 font-mono">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Skills List */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  {item.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="mt-6 pt-3 flex items-center justify-between text-[11px] font-medium text-slate-400">
                <span>Enterprise Certified</span>
                <span className="text-blue-600 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  10+ Yrs
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
