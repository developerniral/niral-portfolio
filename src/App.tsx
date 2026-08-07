import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CoreExpertise } from './components/CoreExpertise';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
      {/* Header Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Hero Section */}
      <main>
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onNavigate={handleNavigate}
        />

        {/* About Section */}
        <About />

        {/* Core Expertise Section */}
        <CoreExpertise />

        {/* Professional Experience Section */}
        <Experience />

        {/* Featured Projects Section */}
        <Projects />

        {/* Technical Skills Section */}
        <Skills />

        {/* Achievements Section */}
        <Achievements />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Resume Viewer & Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
