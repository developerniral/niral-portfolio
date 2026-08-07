import React, { useState } from 'react';
import {
  Code,
  Layers,
  Database,
  Cloud,
  Wrench,
  Search,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { TECHNICAL_SKILLS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-[#D4AF37]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#F59E0B]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-[#D4AF37]" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-[#F59E0B]" />;
      default:
        return <Code className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 bg-[#0B1120] border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#111827] text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC] tracking-tight">
              Technical Skills
            </h2>
            <p className="mt-2 text-base text-slate-300 font-normal">
              A comprehensive directory of tools, frameworks, languages, and database systems.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. Laravel, Docker)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-800 text-xs bg-[#111827] text-[#F8FAFC] placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] transition-all font-medium"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNICAL_SKILLS.map((item, index) => {
            const filteredSkills = item.skills.filter(s =>
              s.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (searchQuery && filteredSkills.length === 0) {
              return null;
            }

            return (
              <div
                key={index}
                className="bg-[#111827] rounded-2xl p-6 border border-slate-800 shadow-xl hover:border-[#D4AF37]/40 transition-all"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-[#0B1120] border border-slate-800 flex items-center justify-center shadow-xs">
                    {getCategoryIcon(item.iconName)}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#F8FAFC] text-base">
                      {item.category}
                    </h3>
                    <span className="text-xs text-slate-400">
                      {filteredSkills.length} Technologies
                    </span>
                  </div>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {filteredSkills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#0B1120] border border-slate-800 text-slate-200 text-xs font-semibold hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
