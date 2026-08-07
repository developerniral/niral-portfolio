import React from 'react';
import { ArrowUp, Code, Heart, FileText } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-mono font-bold text-xs">
                NS
              </div>
              <span className="text-white font-bold text-base">{HERO_DATA.name}</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Senior PHP / Laravel Backend Developer • 10+ Years Enterprise Experience
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors border border-slate-700 flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>View Resume</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs transition-colors border border-slate-700"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Note specified by prompt */}
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-slate-400 font-mono text-center leading-relaxed">
          "Building reliable template using html, bootstrap for design and necesary js for good interactive ui and export as html"
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 gap-2">
          <span>© {new Date().getFullYear()} Niral Shakya. All rights reserved.</span>
          <span>Crafted with precision for enterprise hiring teams.</span>
        </div>

      </div>
    </footer>
  );
};
