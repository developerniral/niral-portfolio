import React, { useState } from 'react';
import {
  Sparkles,
  ExternalLink,
  Code2,
  Layers,
  X,
  Copy,
  Check,
  ChevronRight,
  Database,
  Server,
  Zap
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const categories = ['All', 'eCommerce', 'Reservations', 'Resource Mgmt', 'IoT', 'Community'];

  const filteredProjects = selectedCategory === 'All'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category === selectedCategory);

  const handleCopyCode = (codeText: string) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="projects" className="py-16 sm:py-20 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#111827] text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Enterprise Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC] tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-2 text-base text-slate-300 font-normal">
              High-impact systems engineered for performance, security, and scalability.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#111827] p-1.5 rounded-2xl border border-slate-800 shadow-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#D4AF37] text-slate-950 font-bold shadow-xs'
                    : 'text-slate-300 hover:text-[#F8FAFC] hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="bg-[#111827] rounded-2xl p-6 border border-slate-800 shadow-md hover:shadow-xl hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Header Tags */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-lg bg-[#0B1120] text-[#D4AF37] font-mono text-[11px] font-bold border border-[#D4AF37]/30">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-400">
                    #{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#F8FAFC] mb-2 group-hover:text-[#D4AF37] transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-[#0B1120] text-slate-300 text-[11px] font-mono font-medium border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-[#D4AF37]">
                <span>View Architecture & Code</span>
                <span className="inline-flex items-center gap-1 group-hover:underline">
                  Details <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#111827] rounded-2xl border border-slate-800 shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative space-y-6 text-[#F8FAFC]">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="px-2.5 py-1 rounded-lg bg-[#0B1120] text-[#D4AF37] font-mono text-xs font-bold border border-[#D4AF37]/30">
                  {activeModalProject.category}
                </span>
                <h3 className="text-2xl font-extrabold text-[#F8FAFC] mt-2">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-[#F8FAFC] hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5 text-[#D4AF37]" />
              </button>
            </div>

            {/* Long Description */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                System Overview
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeModalProject.longDescription || activeModalProject.description}
              </p>
            </div>

            {/* Key Features */}
            {activeModalProject.keyFeatures && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  Key Technical Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalProject.keyFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="p-3 rounded-xl bg-[#0B1120] border border-slate-800 text-xs font-semibold text-slate-200 flex items-start gap-2">
                      <Zap className="w-3.5 h-3.5 text-[#F59E0B] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture Details */}
            {activeModalProject.architectureDetails && (
              <div className="space-y-2 p-4 rounded-xl bg-[#0B1120] border border-[#D4AF37]/30 text-xs text-slate-200">
                <span className="font-bold block uppercase tracking-wider text-[10px] text-[#D4AF37]">
                  Backend Architecture Strategy
                </span>
                <p className="leading-relaxed">
                  {activeModalProject.architectureDetails}
                </p>
              </div>
            )}

            {/* Code Snippet */}
            {activeModalProject.codeSnippet && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#F8FAFC] flex items-center gap-1.5">
                    <Code2 className="w-4 h-4 text-[#D4AF37]" />
                    {activeModalProject.codeSnippet.filename}
                  </span>
                  <button
                    onClick={() => handleCopyCode(activeModalProject.codeSnippet!.code)}
                    className="inline-flex items-center gap-1 text-xs font-medium text-slate-300 hover:text-[#D4AF37] bg-[#0B1120] px-2.5 py-1 rounded-lg border border-slate-800"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#D4AF37]" />}
                    <span>{copiedCode ? "Copied" : "Copy Code"}</span>
                  </button>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 text-amber-200/90 font-mono text-xs overflow-x-auto max-h-60 leading-relaxed border border-slate-800">
                  <pre>{activeModalProject.codeSnippet.code}</pre>
                </div>
              </div>
            )}

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {activeModalProject.tags.map((tag, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md bg-[#0B1120] text-slate-300 text-xs font-mono border border-slate-800">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2.5 rounded-xl bg-[#D4AF37] text-slate-950 font-bold text-xs hover:bg-[#F59E0B] transition-colors shadow-md"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
