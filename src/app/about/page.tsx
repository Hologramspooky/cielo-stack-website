'use client';

import React, { useState, useEffect } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Speed",
      description: "Lightning-fast delivery without compromising quality. We move at the pace of innovation."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Collaboration",
      description: "We work as an extension of your team, fostering open communication and shared success."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Excellence",
      description: "Every line of code, every design element, every interaction is crafted with meticulous attention to detail."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Transparency",
      description: "Full visibility into progress, processes, and decisions. No surprises, just clarity."
    }
  ];

  const processSteps = [
    {
      day: "Days 1-7",
      phase: "Discovery",
      description: "Deep dive into your vision, market research, and technical architecture planning.",
      icon: "🔍"
    },
    {
      day: "Days 8-14",
      phase: "Design",
      description: "User experience mapping, visual design, and interactive prototyping.",
      icon: "🎨"
    },
    {
      day: "Days 15-28",
      phase: "Build",
      description: "Agile development sprints with daily progress updates and continuous testing.",
      icon: "⚡"
    },
    {
      day: "Days 29-30",
      phase: "Launch",
      description: "Final testing, deployment preparation, and successful market launch.",
      icon: "🚀"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-sky-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
            Cielo Stack
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-sky-600 transition-colors">Home</a>
            <a href="/team" className="text-gray-700 hover:text-sky-600 transition-colors">Team</a>
            <a href="/work" className="text-gray-700 hover:text-sky-600 transition-colors">Work</a>
            <a href="/careers" className="text-gray-700 hover:text-sky-600 transition-colors">Careers</a>
            <a href="#mission" className="text-gray-700 hover:text-sky-600 transition-colors">Mission</a>
            <a href="#values" className="text-gray-700 hover:text-sky-600 transition-colors">Values</a>
            <a href="#process" className="text-gray-700 hover:text-sky-600 transition-colors">Process</a>
          </div>
          <a href="/contact" className="bg-gradient-to-r from-sky-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-sky-700 hover:to-blue-700 transition-all transform hover:scale-105 inline-block">
            Contact Us
          </a>
        </div>
      </nav>

      {/* Hero Section with Sky Background */}
      <section className={`relative py-32 px-6 overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Animated clouds background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-20 -right-20 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-10 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            <span className="block text-gray-800">About</span>
            <span className="block bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Cielo Stack
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            Where innovation meets the limitless sky of possibility
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
              From Idea to Launch—Faster Than Ever.
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                At Cielo Stack, we believe every great idea deserves to soar. Founded by seasoned entrepreneurs who understand the urgency of bringing visions to life, we've created a methodology that transforms concepts into market-ready products in just 30 days.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're not just developers—we're dream accelerators, turning the impossible timeline into the inevitable launch.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-200/50 to-blue-300/30 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-sky-200/50">
                <div className="text-6xl mb-4">🚀</div>
                <h4 className="text-2xl font-semibold text-gray-800 mb-4">Our Origin</h4>
                <p className="text-gray-600">
                  Born from the frustration of slow development cycles, Cielo Stack emerged as the solution every startup founder wished existed—rapid, reliable, and remarkable product development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-24 px-6 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every project, every partnership, and every line of code we write.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group relative bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-sky-200/50 hover:border-sky-300 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Operate Section */}
      <section id="process" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">How We Operate</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 30-day methodology that transforms ideas into launched products
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-sky-400 to-blue-600 hidden lg:block"></div>
            
            <div className="space-y-16 lg:space-y-24">
              {processSteps.map((step, index) => (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className="flex-1 lg:w-1/2">
                    <div className={`bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-sky-200/50 ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                      <div className="text-sm font-semibold text-sky-600 mb-2">{step.day}</div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                        {index % 2 === 1 && <span className="text-4xl">{step.icon}</span>}
                        {step.phase}
                        {index % 2 === 0 && <span className="text-4xl">{step.icon}</span>}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden lg:flex w-8 h-8 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full items-center justify-center z-10">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Summary */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">30 Days. 4 Phases. 1 Launched Product.</h3>
              <p className="text-sky-100 text-lg">
                From initial discovery to market launch, we maintain momentum while ensuring quality at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-700 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Want to build with us?
          </h2>
          <p className="text-xl text-sky-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your idea into reality? Let's discuss how we can bring your vision to life in just 30 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-sky-600 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-sky-50 transition-all transform hover:scale-105 shadow-lg">
              Contact Us
            </button>
            <button className="bg-sky-800/50 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-sky-700/50 transition-all transform hover:scale-105">
              View Our Work
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
          <p className="text-gray-400 mb-8">Where ideas take flight in 30 days</p>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500">© {new Date().getFullYear()} Cielo Stack. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}