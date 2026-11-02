import React from 'react';
import {
  ArrowUp,
  FileText,
  BookOpen,
  LayoutGrid,
  ExternalLink,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  Globe
} from 'lucide-react';
import { HERO_DATA, BLOG_URL, APP_LINKS } from '../data/portfolioData';

interface FooterProps {
  onOpenResume?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mainNavLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0B1120] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800/80">
          {/* Column 1: Brand & Role */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F59E0B] text-slate-950 flex items-center justify-center font-mono font-bold text-sm shadow-md">
                NS
              </div>
              <div>
                <span className="text-[#F8FAFC] font-extrabold text-base block">{HERO_DATA.name}</span>
                <span className="text-xs text-[#D4AF37] font-medium">Senior PHP / Laravel Developer</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              10+ years architecting scalable enterprise systems, RESTful microservices, and high-performance databases across Japanese and US clients.
            </p>
            <div className="flex items-center gap-2 pt-1">
              {HERO_DATA.socialLinks.map((link) => {
                let Icon = Globe;
                if (link.icon === 'Linkedin') Icon = Linkedin;
                if (link.icon === 'Github') Icon = Github;
                if (link.icon === 'Mail') Icon = Mail;

                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target={link.isEmail ? undefined : '_blank'}
                    rel={link.isEmail ? undefined : 'noopener noreferrer'}
                    title={link.label}
                    className="w-8 h-8 rounded-lg bg-[#111827] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {mainNavLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-[#D4AF37] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Secondary Menu (Explicitly Requested) */}
          <div className="space-y-3 bg-[#111827]/40 p-4 rounded-2xl border border-slate-800/80">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <h4>Secondary Menu</h4>
            </div>

            <ul className="space-y-2.5 text-xs">
              {/* Blog Link */}
              <li>
                <a
                  href={BLOG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group p-2 rounded-lg bg-[#111827] hover:bg-slate-800 border border-slate-800 transition-colors"
                >
                  <div className="flex items-center gap-2 text-slate-200 group-hover:text-[#D4AF37]">
                    <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span className="font-semibold">Blog</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-[#D4AF37]" />
                </a>
              </li>

              {/* Apps List */}
              <li className="space-y-1.5 pt-1">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 px-1">
                  <LayoutGrid className="w-3 h-3 text-[#D4AF37]" />
                  <span>Apps</span>
                </div>
                <div className="flex flex-col gap-1.5 pl-2 border-l border-slate-800">
                  {APP_LINKS.map((app) => (
                    <a
                      key={app.id || app.name}
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col p-2 rounded-lg bg-[#0B1120]/60 hover:bg-slate-800/80 text-slate-300 hover:text-[#D4AF37] transition-all border border-slate-800/60 hover:border-[#D4AF37]/30 group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="font-semibold text-xs text-slate-200 group-hover:text-[#D4AF37] transition-colors">{app.name}</span>
                          {app.badge && (
                            <span className="text-[9px] px-1 py-0.2 rounded bg-amber-500/20 text-[#D4AF37] border border-[#D4AF37]/30">
                              {app.badge}
                            </span>
                          )}
                        </div>
                        <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-[#D4AF37] shrink-0" />
                      </div>
                      {app.description && (
                        <p className="text-[11px] text-slate-400 mt-1 leading-snug group-hover:text-slate-300 transition-colors">
                          {app.description}
                        </p>
                      )}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Actions */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Get in Touch
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Available for senior backend engineering roles, technical consulting, and enterprise systems development.
            </p>
            <div className="space-y-2">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#F59E0B] text-slate-950 font-bold text-xs transition-colors shadow-sm"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact Niral</span>
              </a>
            </div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Niral Shakya. All rights reserved. • Butwal, Nepal
          </div>
          <button
            onClick={scrollToTop}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#111827] hover:bg-slate-800 text-slate-300 hover:text-[#D4AF37] transition-colors border border-slate-800"
            title="Back to Top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#D4AF37]" />
          </button>
        </div>
      </div>
    </footer>
  );
};

