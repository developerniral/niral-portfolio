import React from 'react';
import {
  Award,
  Briefcase,
  Zap,
  Globe,
  Cpu,
  TrendingUp,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getAchievementIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-[#D4AF37]" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#F59E0B]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#F59E0B]" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#D4AF37]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#F59E0B]" />;
      default:
        return <Award className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="achievements" className="py-16 sm:py-20 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#111827] text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Milestones & Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC] tracking-tight">
            Key Achievements
          </h2>
          <p className="mt-3 text-lg text-slate-300 font-normal leading-relaxed">
            Quantifiable accomplishments and expertise proven across a decade of enterprise software engineering.
          </p>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                item.highlight
                  ? 'bg-gradient-to-br from-[#D4AF37] to-[#F59E0B] text-slate-950 border-[#D4AF37] shadow-xl'
                  : 'bg-[#111827] text-[#F8FAFC] border-slate-800 shadow-md hover:shadow-xl hover:border-[#D4AF37]/50'
              }`}
            >
              <div>
                {/* Header Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      item.highlight ? 'bg-slate-950/20 text-slate-950' : 'bg-[#0B1120] border border-slate-800'
                    }`}
                  >
                    {item.highlight ? (
                      <ShieldCheck className="w-6 h-6 text-slate-950" />
                    ) : (
                      getAchievementIcon(item.iconName)
                    )}
                  </div>

                  <span
                    className={`text-xs font-mono font-bold ${
                      item.highlight ? 'text-slate-900/80' : 'text-[#D4AF37]'
                    }`}
                  >
                    0{index + 1}
                  </span>
                </div>

                {/* Main Label */}
                <h3
                  className={`text-2xl font-extrabold tracking-tight mb-2 ${
                    item.highlight ? 'text-slate-950' : 'text-[#F8FAFC]'
                  }`}
                >
                  {item.label}
                </h3>

                {/* Subtext */}
                <p
                  className={`text-xs leading-relaxed ${
                    item.highlight ? 'text-slate-900/90 font-medium' : 'text-slate-300'
                  }`}
                >
                  {item.subtext}
                </p>
              </div>

              {/* Verified badge */}
              <div
                className={`mt-6 pt-4 border-t flex items-center justify-between text-[11px] font-semibold ${
                  item.highlight ? 'border-slate-950/20 text-slate-950' : 'border-slate-800 text-slate-400'
                }`}
              >
                <span>Enterprise Verified</span>
                <span>Miracle Interface</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
