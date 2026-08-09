import React, { useState, useEffect } from 'react';
import {
  Server,
  Database,
  Layers,
  Cpu,
  Cloud,
  Wrench,
  Search,
  Sparkles,
  CheckCircle2,
  X,
  Copy,
  Check,
  Info,
  ExternalLink,
  Code,
  Zap,
  Grid,
  ListFilter,
  MousePointerClick,
  Award,
  ChevronRight
} from 'lucide-react';
import { TECHNICAL_SKILLS } from '../data/portfolioData';
import { SkillCategory, SkillDetail } from '../types';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSkillModal, setActiveSkillModal] = useState<{
    categoryName: string;
    skill: SkillDetail | { name: string; description?: string };
  } | null>(null);
  const [copiedText, setCopiedText] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'grid' | 'compact'>('grid');
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveSkillModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-5 h-5 text-[#D4AF37]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-[#F59E0B]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#D4AF37]" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-[#F59E0B]" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-sky-400" />;
      default:
        return <Code className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  const categoriesList = ['All', ...TECHNICAL_SKILLS.map(cat => cat.category)];

  const handleCopySkill = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Find skill details helper
  const getSkillDetail = (category: SkillCategory, skillName: string): SkillDetail => {
    if (category.detailedSkills) {
      const match = category.detailedSkills.find(
        ds => ds.name.toLowerCase() === skillName.toLowerCase() || skillName.toLowerCase().includes(ds.name.toLowerCase())
      );
      if (match) return match;
    }
    return {
      name: skillName,
      level: "Proficient",
      years: "10+ Years",
      description: `Core enterprise development skill applied in production systems for web applications, API integrations, and database architectures.`,
      projects: ["Enterprise eCommerce Platform", "US WordPress Engine", "Vehicle Reservation System"],
      highlights: [
        "Applied in high-concurrency production environments",
        "Adheres to clean code and SOLID architecture principles",
        "Optimized for security, performance, and maintainability"
      ]
    };
  };

  const filteredCategories = TECHNICAL_SKILLS.filter(cat => {
    const matchesCategory = selectedCategory === 'All' || cat.category === selectedCategory;
    if (!matchesCategory) return false;

    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    const catMatch = cat.category.toLowerCase().includes(query) || cat.description.toLowerCase().includes(query);
    const skillMatch = cat.skills.some(s => s.toLowerCase().includes(query));
    
    return catMatch || skillMatch;
  });

  return (
    <section id="skills" className="py-16 sm:py-24 bg-[#0B1120] relative overflow-hidden border-t border-slate-800">
      
      {/* Background Subtle Lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-semibold mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Unified Technical Pillars</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
              Technical Skills & Domain Mastery
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              A comprehensive, interactive directory of backend architecture, database engines, web frameworks, payment pipelines, and developer tooling mastered across 10+ years.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-[#111827] p-3 rounded-2xl border border-slate-800/90 shadow-md">
            <div className="p-2.5 rounded-xl bg-[#0B1120] border border-slate-800/80 text-center">
              <span className="block text-lg font-black text-[#D4AF37] font-mono">10+ Yrs</span>
              <span className="text-[11px] text-slate-400 font-medium">PHP & Backend</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#0B1120] border border-slate-800/80 text-center">
              <span className="block text-lg font-black text-[#F59E0B] font-mono">6 Domains</span>
              <span className="text-[11px] text-slate-400 font-medium">Technical Pillars</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#0B1120] border border-slate-800/80 text-center col-span-2 sm:col-span-1">
              <span className="block text-lg font-black text-emerald-400 font-mono">25+ Skills</span>
              <span className="text-[11px] text-slate-400 font-medium">Production Tools</span>
            </div>
          </div>
        </div>

        {/* Interactive Controls Bar: Categories, Search & View Switcher */}
        <div className="bg-[#111827] rounded-2xl p-4 border border-slate-800 shadow-xl mb-8 space-y-4">
          
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {categoriesList.map((catName) => {
                const isActive = selectedCategory === catName;
                return (
                  <button
                    key={catName}
                    onClick={() => setSelectedCategory(catName)}
                    className={`whitespace-nowrap px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#D4AF37] text-slate-950 shadow-md shadow-[#D4AF37]/20 scale-102'
                        : 'bg-[#0B1120] text-slate-300 hover:text-[#F8FAFC] hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    {catName}
                  </button>
                );
              })}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
              <div className="bg-[#0B1120] p-1 rounded-xl border border-slate-800 flex items-center gap-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    viewMode === 'grid'
                      ? 'bg-[#111827] text-[#D4AF37] border border-[#D4AF37]/40 shadow-xs'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title="Grid Cards View"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('compact')}
                  className={`p-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    viewMode === 'compact'
                      ? 'bg-[#111827] text-[#D4AF37] border border-[#D4AF37]/40 shadow-xs'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title="Compact Tech Matrix View"
                >
                  <ListFilter className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Search Box & Hint */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-800/80">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search skill (e.g., Laravel, MySQL, Stripe, Docker)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2 rounded-xl border border-slate-800 text-xs bg-[#0B1120] text-[#F8FAFC] placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] transition-all font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#F8FAFC]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Interactive Mouse Hint */}
            <div className="inline-flex items-center gap-1.5 text-[11px] text-[#D4AF37] font-medium bg-[#0B1120] px-3 py-1.5 rounded-lg border border-[#D4AF37]/20">
              <MousePointerClick className="w-3.5 h-3.5 animate-bounce" />
              <span>Click on any skill badge or card to view detailed experience & project highlights</span>
            </div>
          </div>

        </div>

        {/* SKILLS CONTAINER (GRID VIEW) */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((cat, idx) => {
              const matchesSearch = cat.skills.filter(s =>
                !searchQuery.trim() || s.toLowerCase().includes(searchQuery.toLowerCase())
              );

              return (
                <div
                  key={cat.category}
                  onMouseEnter={() => setHoveredCardIndex(idx)}
                  onMouseLeave={() => setHoveredCardIndex(null)}
                  onMouseMove={handleCardMouseMove}
                  className="relative group bg-[#111827] rounded-2xl p-6 border border-slate-800/90 shadow-xl hover:border-[#D4AF37]/60 hover:shadow-2xl hover:shadow-[#D4AF37]/10 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Subtle Mouse Spotlight Glowing Effect */}
                  {hoveredCardIndex === idx && (
                    <div
                      className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-2xl"
                      style={{
                        background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(212, 175, 55, 0.08), transparent 70%)`,
                      }}
                    />
                  )}

                  <div>
                    {/* Category Header */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-[#0B1120] border border-slate-800 flex items-center justify-center shadow-md group-hover:scale-105 group-hover:border-[#D4AF37]/40 transition-all duration-300">
                          {getCategoryIcon(cat.iconName)}
                        </div>
                        <div>
                          <h3 className="font-bold text-[#F8FAFC] text-base group-hover:text-[#D4AF37] transition-colors">
                            {cat.category}
                          </h3>
                          <span className="text-[11px] font-mono text-[#D4AF37] bg-[#0B1120] px-2 py-0.5 rounded border border-slate-800">
                            {matchesSearch.length} Technologies
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Category Description */}
                    <p className="text-xs text-slate-300 leading-relaxed mb-5 font-normal">
                      {cat.description}
                    </p>

                    {/* Skills Badges Grid */}
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800/80">
                      {cat.skills.map((skillName, sIdx) => {
                        const isHighlighted = searchQuery && skillName.toLowerCase().includes(searchQuery.toLowerCase());
                        const skillData = getSkillDetail(cat, skillName);

                        return (
                          <button
                            key={sIdx}
                            onClick={() => setActiveSkillModal({ categoryName: cat.category, skill: skillData })}
                            className={`group/skill relative inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer active:scale-95 ${
                              isHighlighted
                                ? 'bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37] shadow-md shadow-[#D4AF37]/20'
                                : 'bg-[#0B1120] text-slate-200 border border-slate-800 hover:border-[#D4AF37]/60 hover:text-[#D4AF37] hover:bg-[#111827]'
                            }`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 group-hover/skill:scale-110 transition-transform" />
                            <span>{skillName}</span>
                            <ChevronRight className="w-3 h-3 opacity-0 group-hover/skill:opacity-100 transition-opacity text-[#D4AF37]" />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Card Footer Action */}
                  <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-semibold text-slate-400 group-hover:text-[#D4AF37] transition-colors">
                    <span>Inspect Category Expertise</span>
                    <button
                      onClick={() => {
                        if (cat.detailedSkills && cat.detailedSkills.length > 0) {
                          setActiveSkillModal({ categoryName: cat.category, skill: cat.detailedSkills[0] });
                        } else {
                          setActiveSkillModal({ categoryName: cat.category, skill: getSkillDetail(cat, cat.skills[0]) });
                        }
                      }}
                      className="inline-flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      <span>Explore Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* SKILLS CONTAINER (COMPACT TECH MATRIX VIEW) */}
        {viewMode === 'compact' && (
          <div className="bg-[#111827] rounded-2xl p-6 border border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="font-bold text-[#F8FAFC] text-base flex items-center gap-2">
                <Code className="w-5 h-5 text-[#D4AF37]" />
                <span>Interactive Technology Cloud</span>
              </h3>
              <span className="text-xs text-slate-400 font-mono">
                Click any badge for in-depth breakdown
              </span>
            </div>

            <div className="space-y-6">
              {filteredCategories.map((cat) => (
                <div key={cat.category} className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                    {getCategoryIcon(cat.iconName)}
                    <span>{cat.category}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skillName, sIdx) => {
                      const skillData = getSkillDetail(cat, skillName);
                      return (
                        <button
                          key={sIdx}
                          onClick={() => setActiveSkillModal({ categoryName: cat.category, skill: skillData })}
                          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0B1120] border border-slate-800 text-slate-200 text-xs font-semibold hover:border-[#D4AF37] hover:text-[#D4AF37] hover:shadow-md transition-all cursor-pointer"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span>{skillName}</span>
                          {skillData.years && (
                            <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded">
                              {skillData.years}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty Search Result State */}
        {filteredCategories.length === 0 && (
          <div className="bg-[#111827] rounded-2xl p-12 border border-slate-800 text-center space-y-4 max-w-md mx-auto">
            <Info className="w-10 h-10 text-[#D4AF37] mx-auto opacity-80" />
            <h3 className="text-lg font-bold text-[#F8FAFC]">No skills found</h3>
            <p className="text-xs text-slate-400">
              No technical competencies matched your search query "<span className="text-[#D4AF37] font-semibold">{searchQuery}</span>".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 rounded-xl bg-[#0B1120] text-xs font-bold text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-slate-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* SKILL DETAIL INTERACTIVE MODAL */}
      {activeSkillModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveSkillModal(null)}
        >
          <div
            className="bg-[#111827] rounded-2xl border border-slate-800 shadow-2xl max-w-xl w-full relative overflow-hidden text-[#F8FAFC] p-6 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#0B1120] border border-[#D4AF37]/40 flex items-center justify-center shadow-lg">
                  <Zap className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider font-mono">
                    {activeSkillModal.categoryName}
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#F8FAFC]">
                    {activeSkillModal.skill.name}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setActiveSkillModal(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-[#F8FAFC] hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Badges / Experience Level */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold font-mono">
              {'level' in activeSkillModal.skill && activeSkillModal.skill.level && (
                <span className="px-3 py-1 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40">
                  {activeSkillModal.skill.level}
                </span>
              )}
              {'years' in activeSkillModal.skill && activeSkillModal.skill.years && (
                <span className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  {activeSkillModal.skill.years}
                </span>
              )}
              <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                Production Tested
              </span>
            </div>

            {/* Skill Description */}
            {'description' in activeSkillModal.skill && activeSkillModal.skill.description && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Technical Scope & Overview
                </h4>
                <p className="text-sm text-slate-200 leading-relaxed bg-[#0B1120] p-4 rounded-xl border border-slate-800/80 font-normal">
                  {activeSkillModal.skill.description}
                </p>
              </div>
            )}

            {/* Featured Projects Where Skill Was Used */}
            {'projects' in activeSkillModal.skill && activeSkillModal.skill.projects && activeSkillModal.skill.projects.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Featured Applications & Deliverables
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeSkillModal.skill.projects.map((pName, pIdx) => (
                    <span
                      key={pIdx}
                      className="px-3 py-1.5 rounded-lg bg-[#0B1120] text-slate-300 text-xs font-semibold border border-slate-800 flex items-center gap-1.5"
                    >
                      <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{pName}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Key Technical Highlights */}
            {'highlights' in activeSkillModal.skill && activeSkillModal.skill.highlights && activeSkillModal.skill.highlights.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Key Technical Capabilities
                </h4>
                <div className="space-y-2 bg-[#0B1120] p-4 rounded-xl border border-slate-800/80">
                  {activeSkillModal.skill.highlights.map((hText, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs font-medium text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{hText}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => handleCopySkill(activeSkillModal.skill.name)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0B1120] hover:bg-slate-800 text-slate-200 hover:text-[#D4AF37] border border-slate-800 text-xs font-bold transition-all cursor-pointer"
              >
                {copiedText ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#D4AF37]" />
                    <span>Copy Tech Name</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setActiveSkillModal(null)}
                className="px-5 py-2 rounded-xl bg-[#D4AF37] hover:bg-[#F59E0B] text-slate-950 font-bold text-xs transition-all shadow-md cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
