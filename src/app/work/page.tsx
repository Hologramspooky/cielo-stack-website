'use client';

import React, { useState, useEffect } from 'react';

export default function Work() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      name: "PayFlow Pro",
      description: "Modern payment processing platform with real-time analytics and multi-currency support for growing businesses.",
      industry: "FinTech",
      stack: ["React", "Node.js", "PostgreSQL", "Stripe API"],
      timeline: "28 days",
      outcome: "Launched & $2M Series A",
      image: "/api/placeholder/400/300",
      caseStudy: "/case-studies/payflow-pro"
    },
    {
      id: 2,
      name: "MindSpace",
      description: "AI-powered mental health companion app with personalized therapy recommendations and progress tracking.",
      industry: "HealthTech",
      stack: ["React Native", "Python", "TensorFlow", "Firebase"],
      timeline: "30 days",
      outcome: "Launched & 50K+ Users",
      image: "/api/placeholder/400/300",
      caseStudy: "/case-studies/mindspace"
    },
    {
      id: 3,
      name: "DataSync Hub",
      description: "Enterprise data integration platform that connects multiple SaaS tools with automated workflows.",
      industry: "SaaS",
      stack: ["Vue.js", "Express.js", "MongoDB", "Redis"],
      timeline: "25 days",
      outcome: "Launched & Acquired",
      image: "/api/placeholder/400/300",
      caseStudy: "/case-studies/datasync-hub"
    },
    {
      id: 4,
      name: "SmartLens",
      description: "Computer vision platform for retail inventory management using AI-powered image recognition.",
      industry: "AI",
      stack: ["Python", "OpenCV", "AWS", "React"],
      timeline: "30 days",
      outcome: "Launched & Enterprise Deals",
      image: "/api/placeholder/400/300",
      caseStudy: "/case-studies/smartlens"
    },
    {
      id: 5,
      name: "CryptoVault",
      description: "Secure cryptocurrency portfolio tracker with DeFi integration and advanced analytics dashboard.",
      industry: "FinTech",
      stack: ["Next.js", "Web3.js", "Supabase", "Chart.js"],
      timeline: "27 days",
      outcome: "Launched & 100K+ Users",
      image: "/api/placeholder/400/300",
      caseStudy: "/case-studies/cryptovault"
    },
    {
      id: 6,
      name: "TeamFlow",
      description: "All-in-one project management solution with integrated communication tools and time tracking.",
      industry: "SaaS",
      stack: ["Angular", "Django", "PostgreSQL", "WebSockets"],
      timeline: "29 days",
      outcome: "Launched & $1.5M Funding",
      image: "/api/placeholder/400/300",
      caseStudy: "/case-studies/teamflow"
    },
    {
      id: 7,
      name: "HealthTracker AI",
      description: "Wearable-integrated health monitoring app with predictive analytics for preventive care.",
      industry: "HealthTech",
      stack: ["Flutter", "Python", "ML Kit", "Cloud Functions"],
      timeline: "30 days",
      outcome: "Launched & Hospital Partnerships",
      image: "/api/placeholder/400/300",
      caseStudy: "/case-studies/healthtracker-ai"
    },
    {
      id: 8,
      name: "VisionBot",
      description: "AI-powered document processing tool that extracts and analyzes data from complex business documents.",
      industry: "AI",
      stack: ["React", "FastAPI", "OCR", "Docker"],
      timeline: "26 days",
      outcome: "Launched & Fortune 500 Clients",
      image: "/api/placeholder/400/300",
      caseStudy: "/case-studies/visionbot"
    },
    {
      id: 9,
      name: "InvestorLink",
      description: "Platform connecting startups with investors, featuring pitch deck builder and funding analytics.",
      industry: "FinTech",
      stack: ["React", "Ruby on Rails", "PostgreSQL", "AWS"],
      timeline: "28 days",
      outcome: "Launched & $500K Deals Closed",
      image: "/api/placeholder/400/300",
      caseStudy: "/case-studies/investorlink"
    }
  ];

  const industries = ['All', 'FinTech', 'SaaS', 'AI', 'HealthTech'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.industry === activeFilter);

  const getOutcomeColor = (outcome) => {
    if (outcome.includes('Acquired') || outcome.includes('Series A')) return 'text-green-600 bg-green-50';
    if (outcome.includes('Funding') || outcome.includes('Deals')) return 'text-blue-600 bg-blue-50';
    if (outcome.includes('Users') || outcome.includes('Partnerships')) return 'text-purple-600 bg-purple-50';
    return 'text-sky-600 bg-sky-50';
  };

  const ProjectCard = ({ project }) => (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-2xl hover:border-sky-200 transition-all duration-500 hover:transform hover:scale-[1.02]">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 flex items-center justify-center">
          <div className="text-6xl font-bold text-sky-300/50">
            {project.name.split(' ').map(word => word[0]).join('')}
          </div>
        </div>
        {/* Industry badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-sky-700 px-3 py-1 rounded-full text-sm font-semibold">
            {project.industry}
          </span>
        </div>
        {/* Outcome badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getOutcomeColor(project.outcome)}`}>
            ✓ {project.outcome.split('&')[0].trim()}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-sky-700 transition-colors duration-300">
          {project.name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-4">
          <div className="text-xs font-semibold text-gray-500 mb-2">TECH STACK</div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline & Outcome */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm">
            <span className="text-gray-500">Timeline:</span>
            <span className="font-semibold text-gray-800 ml-1">{project.timeline}</span>
          </div>
        </div>

        {/* Full Outcome */}
        <div className="text-sm text-gray-600 mb-4">
          <span className="font-semibold">Outcome:</span> {project.outcome}
        </div>

        {/* Case Study Link */}
        <button className="w-full bg-sky-50 hover:bg-sky-100 text-sky-700 font-semibold py-3 px-4 rounded-lg transition-all duration-300 group-hover:bg-sky-600 group-hover:text-white">
          View Case Study →
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-sky-50 to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-sky-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
            Cielo Stack
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-sky-600 transition-colors">Home</a>
            <a href="/about" className="text-gray-700 hover:text-sky-600 transition-colors">About</a>
            <a href="/team" className="text-gray-700 hover:text-sky-600 transition-colors">Team</a>
            <a href="/careers" className="text-gray-700 hover:text-sky-600 transition-colors">Careers</a>
            <a href="#work" className="text-sky-600 font-semibold">Work</a>
          </div>
          <a href="/contact" className="bg-gradient-to-r from-sky-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-sky-700 hover:to-blue-700 transition-all transform hover:scale-105 inline-block">
            Contact Us
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`py-20 px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="block text-gray-800 mb-4">MVPs We've</span>
            <span className="block bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Launched
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed mb-8">
            From SaaS to FinTech, we help turn ideas into functional products that scale
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-sky-200/50">
              <div className="text-3xl font-bold text-sky-600 mb-2">50+</div>
              <div className="text-gray-600 text-sm">MVPs Launched</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-sky-200/50">
              <div className="text-3xl font-bold text-blue-600 mb-2">$50M+</div>
              <div className="text-gray-600 text-sm">Funding Raised</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-sky-200/50">
              <div className="text-3xl font-bold text-indigo-600 mb-2">28</div>
              <div className="text-gray-600 text-sm">Avg Days</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-sky-200/50">
              <div className="text-3xl font-bold text-cyan-600 mb-2">98%</div>
              <div className="text-gray-600 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-6 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Filter by Industry</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setActiveFilter(industry)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeFilter === industry
                      ? 'bg-sky-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-sky-50 hover:text-sky-700 border border-gray-200'
                  }`}
                >
                  {industry}
                  {industry !== 'All' && (
                    <span className="ml-2 text-xs opacity-75">
                      ({projects.filter(p => p.industry === industry).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section id="work" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
              <p className="text-gray-500">Try selecting a different industry filter</p>
            </div>
          )}
        </div>
      </section>

      {/* Process Showcase */}
      <section className="py-16 px-6 bg-white/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Proven Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-sky-200/50">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Discovery</h3>
              <p className="text-gray-600 text-sm">Deep dive into requirements and market analysis</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-sky-200/50">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Design</h3>
              <p className="text-gray-600 text-sm">User-centered design and interactive prototyping</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-sky-200/50">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Build</h3>
              <p className="text-gray-600 text-sm">Agile development with continuous integration</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-sky-200/50">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Launch</h3>
              <p className="text-gray-600 text-sm">Deployment, monitoring, and post-launch support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Want your MVP featured here?
          </h2>
          <p className="text-xl text-sky-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join the ranks of successful startups who trusted us to bring their vision to life in just 30 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-sky-600 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-sky-50 transition-all transform hover:scale-105 shadow-lg">
              Let's Talk
            </button>
            <button className="bg-sky-800/50 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-sky-700/50 transition-all transform hover:scale-105">
              View Process
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Cielo Stack
          </div>
          <p className="text-gray-400 mb-8">Turning ideas into launched products since 2020</p>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500">© {new Date().getFullYear()} Cielo Stack. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}