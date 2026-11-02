import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  FileText,
  Mail,
  ExternalLink,
  ChevronDown,
  BookOpen,
  LayoutGrid,
  Sparkles
} from 'lucide-react';
import { HERO_DATA, BLOG_URL, APP_LINKS } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume?: () => void;
  onNavigate: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [appsDropdownOpen, setAppsDropdownOpen] = useState(false);
  const [mobileAppsOpen, setMobileAppsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setAppsDropdownOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setAppsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['about', 'experience', 'projects', 'skills', 'certifications', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    setAppsDropdownOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1120]/95 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-lg py-2.5'
          : 'bg-[#0B1120]/60 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          {/* Logo / Brand Name */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('hero');
            }}
            className="group flex items-center gap-2.5 text-[#F8FAFC] font-bold text-base tracking-tight hover:opacity-90 transition-opacity shrink-0"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F59E0B] text-slate-950 flex items-center justify-center font-mono font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
              NS
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-[#F8FAFC] text-sm sm:text-base leading-tight">
                {HERO_DATA.name}
              </span>
              <span className="text-[11px] font-medium text-[#D4AF37] hidden sm:inline-block">
                Senior PHP / Laravel Dev
              </span>
            </div>
          </a>

          {/* Desktop Primary Nav Items */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#111827]/90 p-1 rounded-full border border-slate-800 shadow-md text-xs font-medium text-slate-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.id);
                  }}
                  className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[#D4AF37] text-slate-950 font-bold shadow-xs'
                      : 'hover:text-[#F8FAFC] hover:bg-slate-800/80'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Compact Primary Nav for Lg screens */}
          <nav className="hidden lg:flex xl:hidden items-center gap-1 bg-[#111827]/90 p-1 rounded-full border border-slate-800 shadow-md text-xs font-medium text-slate-300">
            {navLinks.slice(0, 5).map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.id);
                  }}
                  className={`px-2.5 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[#D4AF37] text-slate-950 font-bold shadow-xs'
                      : 'hover:text-[#F8FAFC] hover:bg-slate-800/80'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Secondary Menu + CTA Area */}
          <div className="hidden md:flex items-center gap-2">
            {/* Secondary Menu Pill */}
            <div className="flex items-center bg-[#111827]/95 p-1 rounded-xl border border-slate-700/80 shadow-inner text-xs font-medium text-slate-300">
              {/* Blog Link */}
              <a
                href={BLOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="Visit Niral's Blog (Opens in new tab)"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-slate-200 hover:text-[#D4AF37] hover:bg-slate-800/90 transition-all group"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                <span>Blog</span>
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#D4AF37]" />
              </a>

              <div className="h-4 w-px bg-slate-700 mx-0.5" />

              {/* Apps Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setAppsDropdownOpen(!appsDropdownOpen)}
                  aria-expanded={appsDropdownOpen}
                  aria-haspopup="true"
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                    appsDropdownOpen
                      ? 'text-[#D4AF37] bg-slate-800 font-semibold'
                      : 'text-slate-200 hover:text-[#D4AF37] hover:bg-slate-800/90'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Apps</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                      appsDropdownOpen ? 'rotate-180 text-[#D4AF37]' : ''
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {appsDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-80 sm:w-88 rounded-xl bg-[#0B1120] border border-slate-700 shadow-2xl p-2.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-3 py-2 border-b border-slate-800/80 mb-1.5 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Available Apps
                      </span>
                      <span className="text-[10px] text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded font-mono font-semibold">
                        {APP_LINKS.length} Apps
                      </span>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      {APP_LINKS.map((app) => (
                        <a
                          key={app.id || app.name}
                          href={app.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setAppsDropdownOpen(false)}
                          className="flex items-start justify-between p-3 rounded-lg hover:bg-slate-800/90 text-left transition-all border border-slate-800/60 hover:border-[#D4AF37]/30 group"
                        >
                          <div className="flex flex-col pr-2 flex-1">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="text-xs font-bold text-[#F8FAFC] group-hover:text-[#D4AF37] transition-colors">
                                {app.name}
                              </span>
                              {app.badge && (
                                <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-[#D4AF37] border border-[#D4AF37]/30 font-medium">
                                  {app.badge}
                                </span>
                              )}
                            </div>
                            {app.description && (
                              <p className="text-[11px] text-slate-400 mt-1 leading-snug group-hover:text-slate-300 transition-colors">
                                {app.description}
                              </p>
                            )}
                            <span className="text-[10px] font-mono text-[#D4AF37]/75 mt-1.5">
                              {app.url}
                            </span>
                          </div>
                          <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#D4AF37] shrink-0 mt-0.5" />
                        </a>
                      ))}
                    </div>

                    <div className="mt-1.5 pt-2 border-t border-slate-800/80 px-2 text-[10px] text-slate-400 text-center">
                      Click to open app in new tab
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Direct Contact Button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('contact');
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-[#D4AF37] hover:bg-[#F59E0B] transition-all shadow-md shadow-[#D4AF37]/20 active:scale-98 shrink-0"
            >
              <Mail className="w-3.5 h-3.5 text-slate-950" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#F8FAFC] bg-[#111827] hover:bg-slate-800 transition-colors border border-slate-700"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#D4AF37]" /> : <Menu className="w-5 h-5 text-[#D4AF37]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B1120]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200 mt-2 max-h-[85vh] overflow-y-auto">
          {/* Primary Nav Links */}
          <div className="flex flex-col gap-1">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1">
              Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
                className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#111827] text-[#D4AF37] font-bold border border-[#D4AF37]/30'
                    : 'text-slate-300 hover:bg-[#111827]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Secondary Menu Section for Mobile */}
          <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col gap-2">
            <div className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider px-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Secondary Menu</span>
            </div>

            {/* Blog */}
            <a
              href={BLOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-200 bg-[#111827] border border-slate-800 hover:border-[#D4AF37]/40"
            >
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                <span>Blog (niralshakya.com.np/blog)</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            {/* Apps Accordion */}
            <div className="bg-[#111827] border border-slate-800 rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileAppsOpen(!mobileAppsOpen)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold text-slate-200"
              >
                <div className="flex items-center gap-2.5">
                  <LayoutGrid className="w-4 h-4 text-[#D4AF37]" />
                  <span>Apps ({APP_LINKS.length})</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    mobileAppsOpen ? 'rotate-180 text-[#D4AF37]' : ''
                  }`}
                />
              </button>

              {mobileAppsOpen && (
                <div className="px-3 pb-3 pt-1 flex flex-col gap-2 border-t border-slate-800/80 bg-slate-900/40">
                  {APP_LINKS.map((app) => (
                    <a
                      key={app.id || app.name}
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex flex-col p-2.5 rounded-lg bg-[#0B1120] hover:bg-slate-800 text-xs text-slate-200 transition-colors border border-slate-800/80"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-bold text-[#D4AF37]">{app.name}</span>
                          {app.badge && (
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-500/20 text-[#D4AF37]">
                              {app.badge}
                            </span>
                          )}
                          <span className="text-[10px] text-slate-400 font-mono">({app.url})</span>
                        </div>
                        <ExternalLink className="w-3 h-3 text-slate-400 shrink-0" />
                      </div>
                      {app.description && (
                        <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                          {app.description}
                        </p>
                      )}
                    </a>
                  ))}
                </div>
              )}
            </div>


            {/* Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('contact');
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-950 bg-[#D4AF37] hover:bg-[#F59E0B] shadow-md mt-2"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

