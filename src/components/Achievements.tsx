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
        return <Award className="w-6 h-6 text-blue-600" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-indigo-600" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-500" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-emerald-600" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-violet-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-sky-600" />;
      default:
        return <Award className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="achievements" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Milestones & Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Key Achievements
          </h2>
          <p className="mt-3 text-lg text-slate-600 font-normal leading-relaxed">
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
                  ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-blue-500 shadow-md'
                  : 'bg-white text-slate-900 border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-400/50'
              }`}
            >
              <div>
                {/* Header Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      item.highlight ? 'bg-white/10 text-white' : 'bg-slate-100'
                    }`}
                  >
                    {item.highlight ? (
                      <ShieldCheck className="w-6 h-6 text-white" />
                    ) : (
                      getAchievementIcon(item.iconName)
                    )}
                  </div>

                  <span
                    className={`text-xs font-mono font-bold ${
                      item.highlight ? 'text-blue-200' : 'text-slate-400'
                    }`}
                  >
                    0{index + 1}
                  </span>
                </div>

                {/* Main Label */}
                <h3
                  className={`text-2xl font-extrabold tracking-tight mb-2 ${
                    item.highlight ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {item.label}
                </h3>

                {/* Subtext */}
                <p
                  className={`text-xs leading-relaxed ${
                    item.highlight ? 'text-blue-100' : 'text-slate-500'
                  }`}
                >
                  {item.subtext}
                </p>
              </div>

              {/* Verified badge */}
              <div
                className={`mt-6 pt-4 border-t flex items-center justify-between text-[11px] font-semibold ${
                  item.highlight ? 'border-blue-500/50 text-blue-200' : 'border-slate-100 text-slate-400'
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
