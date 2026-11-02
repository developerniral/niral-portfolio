import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Code2,
  X,
  Copy,
  Check,
  ChevronRight,
  Zap,
  Layers,
  Maximize2
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const categories = ['All', ...Array.from(new Set(FEATURED_PROJECTS.map(p => p.category)))];

  const filteredProjects = selectedCategory === 'All'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category === selectedCategory);

  const handleCopyCode = (codeText: string) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const closeDetailModal = () => {
    setActiveModalProject(null);
    if (window.history.state?.modalOpen) {
      window.history.back();
    }
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    if (window.history.state?.modalOpen) {
      window.history.back();
    }
  };

  // Close modals on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedImage) {
          closeImageModal();
        } else if (activeModalProject) {
          closeDetailModal();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, activeModalProject]);

  // Handle Browser Back button (popstate) to close open popups
  useEffect(() => {
    const handlePopState = () => {
      if (selectedImage) {
        setSelectedImage(null);
      } else if (activeModalProject) {
        setActiveModalProject(null);
      }
    };

    if (activeModalProject || selectedImage) {
      window.history.pushState({ modalOpen: true }, '');
      window.addEventListener('popstate', handlePopState);
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [activeModalProject !== null, selectedImage !== null]);

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
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
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
              className="bg-[#111827] rounded-2xl border border-slate-800 shadow-md hover:shadow-2xl hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer group overflow-hidden"
            >
              <div>
                {/* Project Image Banner */}
                {project.imageUrl && (
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-800">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.onerror = null;
                        target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80";
                      }}
                      className="w-full h-full object-cover object-top scroll-on-hover opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-80 pointer-events-none" />
                    
                    {/* Category Badge overlay */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-[#0B1120]/90 backdrop-blur-md text-[#D4AF37] font-mono text-[11px] font-bold border border-[#D4AF37]/30 shadow-md">
                        {project.category}
                      </span>
                      {project.subProjects && project.subProjects.length > 0 && (
                        <span className="px-2 py-0.5 rounded-md bg-[#D4AF37]/20 text-[#D4AF37] text-[10px] font-bold border border-[#D4AF37]/40">
                          {project.subProjects.length} Projects Inside
                        </span>
                      )}
                    </div>

                    <span className="absolute top-3 right-3 text-xs font-mono font-bold text-slate-200 bg-[#0B1120]/80 backdrop-blur-md px-2 py-0.5 rounded-md border border-slate-800">
                      #{index + 1}
                    </span>

                    {/* Scroll Indicator Cue */}
                    <span className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded bg-slate-950/85 backdrop-blur-md text-[10px] font-mono font-semibold text-[#D4AF37] border border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-md">
                      Hover to scroll view
                    </span>
                  </div>
                )}

                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#F8FAFC] mb-2 group-hover:text-[#D4AF37] transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-5 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
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
              </div>

              {/* Action Link */}
              <div className="px-6 py-4 border-t border-slate-800/80 bg-[#0B1120]/40 flex items-center justify-between text-xs font-semibold text-[#D4AF37]">
                <span>{project.subProjects ? `View ${project.subProjects.length} Projects & Details` : 'View Screenshots & Architecture'}</span>
                <span className="inline-flex items-center gap-1 group-hover:underline font-bold">
                  Details <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 pt-20 pb-6 sm:pt-24 sm:pb-8 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
          onClick={closeDetailModal}
        >
          <div
            className="bg-[#111827] rounded-2xl border border-slate-800 shadow-2xl max-w-4xl w-full max-h-[calc(100vh-6.5rem)] sm:max-h-[calc(100vh-7.5rem)] overflow-y-auto relative space-y-6 text-[#F8FAFC] my-auto mt-16 sm:mt-20"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Modal Hero Banner */}
            {activeModalProject.imageUrl && (
              <div className="relative h-64 sm:h-72 w-full bg-slate-950 overflow-hidden rounded-t-2xl border-b border-slate-800 group/modal">
                <img
                  src={activeModalProject.imageUrl}
                  alt={activeModalProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top scroll-on-hover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/60 to-transparent pointer-events-none" />
                
                <button
                  onClick={closeDetailModal}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-slate-950/70 backdrop-blur-md text-slate-300 hover:text-[#F8FAFC] hover:bg-slate-900 transition-colors border border-slate-800 cursor-pointer z-10"
                >
                  <X className="w-5 h-5 text-[#D4AF37]" />
                </button>

                <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between pointer-events-none">
                  <div>
                    <span className="px-2.5 py-1 rounded-lg bg-[#0B1120]/90 backdrop-blur-md text-[#D4AF37] font-mono text-xs font-bold border border-[#D4AF37]/40">
                      {activeModalProject.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] mt-2 drop-shadow-md">
                      {activeModalProject.title}
                    </h3>
                  </div>
                  <span className="hidden sm:inline-block px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-[11px] font-mono font-medium text-[#D4AF37] border border-slate-800">
                    Hover frame to scroll full page
                  </span>
                </div>
              </div>
            )}

            {!activeModalProject.imageUrl && (
              <div className="flex items-start justify-between border-b border-slate-800 p-6 pb-4">
                <div>
                  <span className="px-2.5 py-1 rounded-lg bg-[#0B1120] text-[#D4AF37] font-mono text-xs font-bold border border-[#D4AF37]/30">
                    {activeModalProject.category}
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#F8FAFC] mt-2">
                    {activeModalProject.title}
                  </h3>
                </div>
                <button
                  onClick={closeDetailModal}
                  className="p-2 rounded-xl text-slate-400 hover:text-[#F8FAFC] hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5 text-[#D4AF37]" />
                </button>
              </div>
            )}

            <div className="p-6 sm:p-8 pt-0 sm:pt-0 space-y-6">
              {/* System Overview */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  System Overview
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeModalProject.longDescription || activeModalProject.description}
                </p>
              </div>

              {/* Sub-Projects List / Grid (If Available) */}
              {activeModalProject.subProjects && activeModalProject.subProjects.length > 0 && (
                <div className="space-y-4 pt-2 border-t border-slate-800">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#D4AF37]" />
                      <span>Projects & Storefronts ({activeModalProject.subProjects.length})</span>
                    </h4>
                    <span className="text-[11px] text-slate-400 font-mono">
                      Click image to enlarge
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeModalProject.subProjects.map((sub, sIdx) => (
                      <div
                        key={sub.id || sIdx}
                        className="bg-[#0B1120] rounded-xl border border-slate-800 overflow-hidden shadow-md hover:border-[#D4AF37]/50 transition-all group/sub flex flex-col justify-between"
                      >
                        <div>
                          {/* Sub-Project Image */}
                          <div
                            className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-950 cursor-pointer group/sub"
                            onClick={() => setSelectedImage({ url: sub.imageUrl, title: sub.name })}
                          >
                            <img
                              src={sub.imageUrl}
                              alt={sub.name}
                              referrerPolicy="no-referrer"
                              onError={(e) => {
                                const target = e.currentTarget;
                                target.onerror = null;
                                target.src = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80";
                              }}
                              className="w-full h-full object-cover object-top scroll-on-hover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-80 pointer-events-none" />
                            <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md text-slate-200 border border-slate-800 opacity-90 group-hover/sub:opacity-100 transition-opacity">
                              <Maximize2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                            </div>
                            <span className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded bg-slate-950/80 backdrop-blur-md text-[9px] font-mono text-[#D4AF37] border border-slate-800 opacity-0 group-hover/sub:opacity-100 transition-opacity">
                              Hover to scroll / Click to enlarge
                            </span>
                          </div>

                          {/* Sub-Project Details */}
                          <div className="p-4 space-y-2">
                            <h5 className="font-bold text-sm text-[#F8FAFC] group-hover/sub:text-[#D4AF37] transition-colors">
                              {sub.name}
                            </h5>
                            {sub.description && (
                              <p className="text-xs text-slate-300 leading-relaxed">
                                {sub.description}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Sub-Project Tech Tags */}
                        {sub.tags && sub.tags.length > 0 && (
                          <div className="p-4 pt-0 flex flex-wrap gap-1.5">
                            {sub.tags.map((t, tIndex) => (
                              <span
                                key={tIndex}
                                className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 text-[10px] font-mono border border-slate-800"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features */}
              {activeModalProject.keyFeatures && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                    Key Technical Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeModalProject.keyFeatures.map((feat, fIdx) => (
                      <div key={fIdx} className="p-3 rounded-xl bg-[#0B1120] border border-slate-800 text-xs font-semibold text-slate-200 flex items-start gap-2.5">
                        <Zap className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Architecture Details */}
              {activeModalProject.architectureDetails && false && (
                <div className="space-y-2 p-4 rounded-xl bg-[#0B1120] border border-[#D4AF37]/30 text-xs text-slate-200">
                  <span className="font-bold block uppercase tracking-wider text-[10px] text-[#D4AF37]">
                    Backend Architecture Strategy
                  </span>
                  <p className="leading-relaxed text-slate-300">
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
                      className="inline-flex items-center gap-1 text-xs font-medium text-slate-300 hover:text-[#D4AF37] bg-[#0B1120] px-2.5 py-1 rounded-lg border border-slate-800 cursor-pointer"
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
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.tags.map((tag, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md bg-[#0B1120] text-slate-300 text-xs font-mono border border-slate-800">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={closeDetailModal}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#D4AF37] text-slate-950 font-bold text-xs hover:bg-[#F59E0B] transition-colors shadow-md cursor-pointer"
                >
                  Close Detail View
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* Enlarged Image Lightbox Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={closeImageModal}
        >
          <div
            className="relative max-w-4xl w-full bg-[#111827] rounded-2xl border border-slate-800 p-3 overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80 px-2">
              <h4 className="font-bold text-sm text-[#F8FAFC] truncate pr-4">{selectedImage.title}</h4>
              <button
                onClick={closeImageModal}
                className="p-1.5 rounded-xl bg-slate-900 text-slate-300 hover:text-[#D4AF37] border border-slate-800 cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative w-full overflow-y-auto rounded-xl bg-slate-950 flex flex-col items-center justify-start p-2 max-h-[78vh] custom-scrollbar">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain rounded-lg shadow-md"
              />
            </div>
            
            <div className="pt-2 text-center text-[11px] text-slate-400 font-mono">
              Use mouse wheel or touch to scroll through full webpage view
            </div>
          </div>
        </div>
      )}

    </section>
  );
};


