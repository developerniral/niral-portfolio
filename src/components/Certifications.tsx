import React, { useState, useEffect } from 'react';
import {
  Award,
  Sparkles,
  Maximize2,
  X,
  ExternalLink,
  Download,
  CheckCircle2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ShieldCheck
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { CertificationItem } from '../types';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // Helper to extract verification link if present and non-empty
  const getVerifyLink = (cert?: CertificationItem | null): string | undefined => {
    if (!cert) return undefined;
    const url = cert.verifyUrl || cert.credentialUrl;
    return url && url.trim().length > 0 ? url.trim() : undefined;
  };

  const openCertModal = (cert: CertificationItem) => {
    setSelectedCert(cert);
    setZoomLevel(1);
  };

  const closeCertModal = () => {
    setSelectedCert(null);
    setZoomLevel(1);
    if (window.history.state?.certModalOpen) {
      window.history.back();
    }
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedCert) {
        closeCertModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert]);

  // Handle Browser Back button (popstate) to close open popup - identical to Projects.tsx
  useEffect(() => {
    const handlePopState = () => {
      if (selectedCert) {
        setSelectedCert(null);
        setZoomLevel(1);
      }
    };

    if (selectedCert) {
      window.history.pushState({ certModalOpen: true }, '');
      window.addEventListener('popstate', handlePopState);
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [selectedCert !== null]);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);


  return (
    <section id="certifications" className="py-16 sm:py-20 bg-[#0B1120] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#111827] text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Verified Qualifications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC] tracking-tight">
              Certifications &amp; Credentials
            </h2>
            <p className="mt-2 text-base text-slate-300 font-normal max-w-2xl">
              Academic honors, framework accreditations, and professional engineering credentials in image format with verified transcripts.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400 bg-[#111827] px-4 py-2.5 rounded-xl border border-slate-800 self-start md:self-auto flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>6 Verified Credentials</span>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CERTIFICATIONS.map((cert) => {
            const certVerifyUrl = getVerifyLink(cert);
            return (
              <div
                key={cert.id}
                onClick={() => openCertModal(cert)}
                className="group bg-[#111827] rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-[#D4AF37]/60 hover:shadow-2xl hover:shadow-[#D4AF37]/10 transition-all duration-300 cursor-pointer"
              >
                <div>
                  {/* Certificate Image Thumbnail Container */}
                  <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden border-b border-slate-800/80">
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-60 pointer-events-none" />

                    {/* Top Row Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                      {cert.badgeText ? (
                        <div className="px-2.5 py-1 rounded-md bg-[#0B1120]/90 backdrop-blur-md text-[10px] font-mono font-bold text-[#D4AF37] border border-[#D4AF37]/30 shadow-md">
                          {cert.badgeText}
                        </div>
                      ) : <div />}

                      {certVerifyUrl && (
                        <div className="px-2 py-1 rounded-md bg-emerald-950/80 backdrop-blur-md text-[10px] font-semibold text-emerald-400 border border-emerald-500/30 shadow-md flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3 text-emerald-400" />
                          <span>Verifiable</span>
                        </div>
                      )}
                    </div>

                    {/* Hover Prompt Overlay */}
                    <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 text-white">
                      <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-slate-950 flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold tracking-wide text-[#F8FAFC]">Click to View Certificate</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Issuer & Date Row */}
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2 gap-2">
                      <div className="flex items-center gap-1.5 truncate">
                        <Award className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span className="truncate font-medium">{cert.issuer}</span>
                      </div>
                      {cert.issueDate && (
                        <span className="text-[11px] font-mono text-[#F59E0B] shrink-0 bg-[#0B1120] px-2 py-0.5 rounded border border-slate-800">
                          {cert.issueDate}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#F8FAFC] group-hover:text-[#D4AF37] transition-colors leading-snug">
                      {cert.title}
                    </h3>

                    {/* Short Description */}
                    <p className="mt-2 text-xs text-slate-300 font-normal leading-relaxed line-clamp-3">
                      {cert.description}
                    </p>

                    {/* Skills Pill Tags */}
                    {cert.skills && cert.skills.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {cert.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 text-[10px] font-mono font-medium rounded bg-[#0B1120] text-slate-300 border border-slate-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 mt-2 flex items-center gap-2">
                  <div className="flex-1 py-2.5 px-3 rounded-xl bg-[#0B1120] group-hover:bg-[#D4AF37] text-slate-300 group-hover:text-slate-950 border border-slate-800 group-hover:border-[#D4AF37] text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </div>
                  {certVerifyUrl && (
                    <a
                      href={certVerifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="py-2.5 px-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 hover:text-emerald-300 border border-emerald-500/30 text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 shrink-0 active:scale-95"
                      title="Verify credential online (opens in new tab)"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3 text-emerald-400/80" />
                    </a>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Certificate Modal Lightbox Popup (Like Projects) */}
      {selectedCert && (() => {
        const selectedVerifyLink = getVerifyLink(selectedCert);

        return (
          <div
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 pt-20 pb-6 sm:pt-24 sm:pb-8 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
            onClick={closeCertModal}
            role="dialog"
            aria-modal="true"
            aria-label={`Certificate: ${selectedCert.title}`}
          >
            <div
              className="bg-[#111827] rounded-2xl border border-slate-800 shadow-2xl max-w-4xl w-full max-h-[calc(100vh-6.5rem)] sm:max-h-[calc(100vh-7.5rem)] overflow-hidden flex flex-col relative text-[#F8FAFC] my-auto mt-16 sm:mt-20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 bg-[#0B1120] border-b border-slate-800 flex items-center justify-between gap-4 shrink-0">
                <div className="flex items-center gap-3 truncate">
                  <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div className="truncate">
                    <h4 className="font-extrabold text-base sm:text-lg text-[#F8FAFC] truncate">
                      {selectedCert.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                      <span>{selectedCert.issuer}</span>
                      {selectedCert.issueDate && (

                        <>
                          <span>•</span>
                          <span className="text-[#D4AF37] font-mono">{selectedCert.issueDate}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Header Actions & Close Button */}
                <div className="flex items-center gap-2 shrink-0">
                  {/* Conditional Verify Button: Only shown if verify/credential link exists */}
                  {selectedVerifyLink && (
                    <a
                      href={selectedVerifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 hover:text-emerald-200 border border-emerald-500/30 hover:border-emerald-500/50 text-xs font-semibold transition-all active:scale-95 shadow-sm"
                      title="Verify credential online in a new tab"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="hidden xs:inline">Verify Credential</span>
                      <span className="xs:hidden">Verify</span>
                      <ExternalLink className="w-3 h-3 text-emerald-400/80" />
                    </a>
                  )}

                  <a
                    href={selectedCert.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 text-xs font-semibold text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
                    title="Open certificate in new tab"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Full View</span>
                  </a>
                  
                  {/* Prominent Header Close Button */}
                  <button
                    onClick={closeCertModal}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-[#F8FAFC] border border-slate-700 hover:border-slate-600 cursor-pointer transition-all shadow-sm active:scale-95 text-xs font-bold"
                    aria-label="Close certificate popup"
                    title="Close popup (Esc)"
                  >
                    <X className="w-4 h-4 text-[#D4AF37]" />
                    <span>Close</span>
                  </button>
                </div>
              </div>

              {/* Modal Image View Area with Zoom Controls */}
              <div
                className="relative flex-1 bg-slate-950 overflow-auto flex flex-col items-center justify-center p-3 sm:p-6 min-h-[300px] cursor-pointer"
                onClick={(e) => {
                  if (e.target === e.currentTarget) {
                    closeCertModal();
                  }
                }}
              >
                
                {/* Zoom Toolbar positioned at top left to keep top right clear */}
                <div
                  className="absolute top-4 left-4 z-10 flex items-center gap-1 bg-[#111827]/90 backdrop-blur-md p-1 rounded-xl border border-slate-800 shadow-lg cursor-default"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={handleZoomOut}
                    className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                    title="Zoom Out"
                    disabled={zoomLevel <= 0.75}
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleResetZoom}
                    className="px-2 py-1 text-[11px] font-mono font-bold text-[#D4AF37] hover:bg-slate-800 rounded transition-colors"
                    title="Reset Zoom"
                  >
                    {Math.round(zoomLevel * 100)}%
                  </button>
                  <button
                    onClick={handleZoomIn}
                    className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                    title="Zoom In"
                    disabled={zoomLevel >= 2.5}
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>

                {/* The Certificate Image Container */}
                <div
                  className="w-full flex items-center justify-center transition-transform duration-200 cursor-pointer"
                  style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
                  onClick={(e) => {
                    if (e.target === e.currentTarget) {
                      closeCertModal();
                    }
                  }}
                >
                  <img
                    src={selectedCert.imageUrl}
                    alt={selectedCert.title}
                    className="max-w-full max-h-[62vh] object-contain rounded-xl shadow-2xl border border-slate-800/80 cursor-default"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>

              </div>


              {/* Modal Footer Details */}
              <div className="p-4 sm:p-5 bg-[#0B1120] border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
                <div className="space-y-1">
                  <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
                    {selectedCert.description}
                  </p>
                  {selectedCert.skills && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {selectedCert.skills.map((s, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#111827] text-slate-300 border border-slate-800"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 flex-wrap">
                  {/* Conditional Verify Button in Footer */}
                  {selectedVerifyLink && (
                    <a
                      href={selectedVerifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 hover:text-emerald-200 border border-emerald-500/30 text-xs font-semibold transition-all active:scale-98 shadow-sm"
                      title="Open verification link in a new tab"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3 h-3 text-emerald-400/80" />
                    </a>
                  )}

                  <a
                    href={selectedCert.imageUrl}
                    download={`${selectedCert.id}.svg`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 text-slate-200 hover:text-white border border-slate-800 hover:border-slate-700 text-xs font-semibold transition-all active:scale-98"
                  >
                    <Download className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Download Image</span>
                  </a>

                  <button
                    onClick={closeCertModal}
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#D4AF37] hover:bg-[#F59E0B] text-slate-950 text-xs font-bold transition-all shadow-md active:scale-98 cursor-pointer"
                    aria-label="Close certificate popup"
                  >
                    <X className="w-4 h-4" />
                    <span>Close Certificate</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        );
      })()}

    </section>
  );
};
