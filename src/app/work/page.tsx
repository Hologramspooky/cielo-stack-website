// app/work/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
// --- CORRECTED CODE ---
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import ProjectCard from '@/app/components/work/projectcard';

const allProjects = [
  { name: 'FinTech Connect', description: 'A mobile-first banking app for modern users.', stack: 'Next.js, Node.js, Stripe', timeline: '30 Days', outcome: 'Launched & Funded', industry: 'FinTech', image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop' },
  { name: 'HealthTrack AI', description: 'AI-powered diagnostics tool for healthcare professionals.', stack: 'Python, TensorFlow, React', timeline: '30 Days', outcome: 'Acquired', industry: 'HealthTech', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop' },
  { name: 'SaaSFlow', description: 'An all-in-one project management tool for remote teams.', stack: 'React, Firebase, Tailwind CSS', timeline: '28 Days', outcome: 'Launched', industry: 'SaaS', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop' },
  { name: 'AI Insights', description: 'A platform for real-time data analysis using machine learning.', stack: 'Next.js, Python, AWS', timeline: '30 Days', outcome: 'Launched', industry: 'AI', image: 'https://images.unsplash.com/photo-1620712943543-2858200e944a?q=80&w=2070&auto=format&fit=crop' },
];

const industries = ['All', 'FinTech', 'SaaS', 'AI', 'HealthTech'];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(allProjects);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter((p) => p.industry === activeFilter));
    }
  }, [activeFilter]);

  return (
    <main className="bg-gray-50">
      <Navbar />
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">MVPs We've Launched</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">From SaaS to FinTech, we help turn ideas into functional products.</p>
          </div>

          {/* Filter Bar */}
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {industries.map((industry) => (
              <button key={industry} onClick={() => setActiveFilter(industry)} className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${activeFilter === industry ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-200'}`}>
                {industry}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}