import React, { useState } from 'react';
import { X, Printer, Download, Copy, Check, FileText, Mail, MapPin, Globe, Linkedin } from 'lucide-react';
import { HERO_DATA, ABOUT_DATA, EXPERIENCE_DATA, FEATURED_PROJECTS, TECHNICAL_SKILLS, CONTACT_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
Niral Shakya - Senior PHP / Laravel Backend Developer
Email: ${CONTACT_DATA.email} | Location: ${CONTACT_DATA.location}
LinkedIn: ${CONTACT_DATA.linkedIn} | Portfolio: ${CONTACT_DATA.portfolio}

SUMMARY
${ABOUT_DATA.summary}
${ABOUT_DATA.sdlcNote}

SPECIALIZATIONS
${ABOUT_DATA.specializations.join(', ')}

EXPERIENCE
${EXPERIENCE_DATA[0].role} | ${EXPERIENCE_DATA[0].company} (${EXPERIENCE_DATA[0].period})
${EXPERIENCE_DATA[0].highlights.map(h => `- ${h}`).join('\n')}

FEATURED PROJECTS
${FEATURED_PROJECTS.map(p => `- ${p.title} (${p.tags.join(', ')}): ${p.description}`).join('\n')}

TECHNICAL SKILLS
${TECHNICAL_SKILLS.map(s => `${s.category}: ${s.skills.join(', ')}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden relative">
        
        {/* Modal Toolbar (non-printable) */}
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-400" />
            <span className="font-bold text-sm">Curriculum Vitae — Niral Shakya</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied" : "Copy Plain Text"}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-8 bg-white text-slate-900 font-sans print:p-0 print:overflow-visible">
          
          {/* Header */}
          <div className="border-b border-slate-200 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {HERO_DATA.name}
              </h1>
              <p className="text-lg font-bold text-blue-600 mt-1">
                {HERO_DATA.title}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                10+ Years Enterprise Backend Software Development
              </p>
            </div>

            <div className="text-xs text-slate-600 space-y-1 font-medium sm:text-right">
              <div>Email: {CONTACT_DATA.email}</div>
              <div>Location: {CONTACT_DATA.location}</div>
              <div>LinkedIn: linkedin.com/in/niral-shakya</div>
              <div>Portfolio: niralshakya.com.np</div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-wider font-mono border-b border-slate-100 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              {ABOUT_DATA.summary} {ABOUT_DATA.sdlcNote}
            </p>
          </div>

          {/* Specializations */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-wider font-mono border-b border-slate-100 pb-1">
              Specialization & Expertise
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {ABOUT_DATA.specializations.map((spec, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 text-[11px] font-semibold border border-slate-200">
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-wider font-mono border-b border-slate-100 pb-1">
              Work Experience
            </h2>

            {EXPERIENCE_DATA.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between font-bold text-sm">
                  <span className="text-slate-900">{exp.role} — <span className="text-blue-700">{exp.company}</span></span>
                  <span className="text-xs font-mono text-slate-500">{exp.period}</span>
                </div>

                <ul className="list-disc list-inside text-xs text-slate-700 space-y-1.5 pl-1">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-wider font-mono border-b border-slate-100 pb-1">
              Key Enterprise Projects
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {FEATURED_PROJECTS.map((proj, pIdx) => (
                <div key={pIdx} className="p-3 rounded-lg border border-slate-200 bg-slate-50/50 space-y-1">
                  <div className="font-bold text-slate-900 flex justify-between">
                    <span>{proj.title}</span>
                    <span className="text-[10px] text-blue-600 font-mono">{proj.tags[0]}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-snug">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Matrix */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-wider font-mono border-b border-slate-100 pb-1">
              Technical Skill Matrix
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              {TECHNICAL_SKILLS.map((sk, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="font-bold text-slate-900 text-[11px] uppercase block">{sk.category}</span>
                  <p className="text-slate-600 text-[11px]">{sk.skills.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
