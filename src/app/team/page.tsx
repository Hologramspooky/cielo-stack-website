'use client';

import React, { useState, useEffect } from 'react';

export default function Team() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: "Sarah Chen",
      title: "Co-Founder & CEO",
      bio: "Former VP of Product at TechCorp, turning visions into reality for 10+ years.",
      image: "/api/placeholder/300/300",
      linkedin: "https://linkedin.com/in/sarahchen"
    },
    {
      name: "Marcus Rodriguez",
      title: "Co-Founder & CTO",
      bio: "Full-stack architect who's shipped products used by millions worldwide.",
      image: "/api/placeholder/300/300",
      linkedin: "https://linkedin.com/in/marcusrodriguez"
    },
    {
      name: "Emma Thompson",
      title: "Head of Design",
      bio: "UX visionary who creates interfaces that users fall in love with.",
      image: "/api/placeholder/300/300",
      linkedin: "https://linkedin.com/in/emmathompson"
    },
    {
      name: "David Kim",
      title: "Lead Developer",
      bio: "Code craftsman specializing in rapid prototyping and scalable solutions.",
      image: "/api/placeholder/300/300",
      linkedin: "https://linkedin.com/in/davidkim"
    },
    {
      name: "Rachel Martinez",
      title: "Product Manager",
      bio: "Strategy expert who transforms requirements into roadmaps for success.",
      image: "/api/placeholder/300/300",
      linkedin: "https://linkedin.com/in/rachelmartinez"
    },
    {
      name: "James Wilson",
      title: "DevOps Engineer",
      bio: "Infrastructure wizard ensuring your MVP launches flawlessly every time.",
      image: "/api/placeholder/300/300",
      linkedin: "https://linkedin.com/in/jameswilson"
    }
  ];

  const advisors = [
    {
      name: "Dr. Jennifer Park",
      title: "Technology Advisor",
      bio: "Former Google VP Engineering, guiding our technical innovation.",
      image: "/api/placeholder/300/300",
      linkedin: "https://linkedin.com/in/jenniferpark"
    },
    {
      name: "Michael Singh",
      title: "Business Advisor",
      bio: "Serial entrepreneur with 3 successful exits, mentoring our growth.",
      image: "/api/placeholder/300/300",
      linkedin: "https://linkedin.com/in/michaelsingh"
    },
    {
      name: "Lisa Chang",
      title: "Design Advisor",
      bio: "Award-winning designer from Apple, elevating our user experience.",
      image: "/api/placeholder/300/300",
      linkedin: "https://linkedin.com/in/lisachang"
    }
  ];

  const TeamCard = ({ member, isLarge = false }) => (
    <div className="group relative">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-sky-200/50 hover:border-sky-300 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl">
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative flex flex-col items-center text-center">
          {/* Profile Image */}
          <div className="relative mb-6">
            <div className={`${isLarge ? 'w-32 h-32' : 'w-24 h-24'} rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:shadow-xl transition-all duration-500`}>
              <div className={`${isLarge ? 'w-32 h-32' : 'w-24 h-24'} bg-gradient-to-br from-sky-200 to-blue-300 flex items-center justify-center text-white font-bold ${isLarge ? 'text-2xl' : 'text-xl'}`}>
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
            {/* Decorative ring */}
            <div className={`absolute inset-0 ${isLarge ? 'w-32 h-32' : 'w-24 h-24'} rounded-full border-2 border-sky-400/30 group-hover:border-sky-500/50 transition-all duration-500 group-hover:scale-110`}></div>
          </div>

          {/* Member Info */}
          <h3 className={`${isLarge ? 'text-2xl' : 'text-xl'} font-bold text-gray-800 mb-2 group-hover:text-sky-700 transition-colors duration-300`}>
            {member.name}
          </h3>
          <p className={`${isLarge ? 'text-lg' : 'text-base'} font-semibold text-sky-600 mb-4`}>
            {member.title}
          </p>
          <p className={`${isLarge ? 'text-base' : 'text-sm'} text-gray-600 leading-relaxed mb-6`}>
            {member.bio}
          </p>

          {/* LinkedIn Link */}
          {member.linkedin && (
            <a 
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 bg-sky-100 hover:bg-sky-200 rounded-full transition-all duration-300 group-hover:scale-110"
            >
              <svg className="w-5 h-5 text-sky-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-blue-50 relative overflow-hidden">
      {/* Abstract tech pattern background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-sky-200/30 to-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-60 right-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-indigo-300/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 left-1/3 w-64 h-64 bg-gradient-to-br from-cyan-200/25 to-sky-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        {/* Tech pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {[...Array(144)].map((_, i) => (
              <div key={i} className="border border-sky-300 rounded-sm"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-sky-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
            Cielo Stack
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-sky-600 transition-colors">Home</a>
            <a href="/about" className="text-gray-700 hover:text-sky-600 transition-colors">About</a>
            <a href="/work" className="text-gray-700 hover:text-sky-600 transition-colors">Work</a>
            <a href="/careers" className="text-gray-700 hover:text-sky-600 transition-colors">Careers</a>
            <a href="#team" className="text-sky-600 font-semibold">Team</a>
            <a href="#advisors" className="text-gray-700 hover:text-sky-600 transition-colors">Advisors</a>
          </div>
          <a href="/contact" className="bg-gradient-to-r from-sky-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-sky-700 hover:to-blue-700 transition-all transform hover:scale-105 inline-block">
            Contact Us
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`relative py-20 px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="block text-gray-800 mb-4">The Dream Team</span>
            <span className="block bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Behind Your MVP
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            Meet the passionate innovators who turn your boldest ideas into market-ready products in just 30 days
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section id="team" className="py-16 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Core Team</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section id="advisors" className="py-16 px-6 bg-white/40 backdrop-blur-sm relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Strategic Advisors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Industry leaders and visionaries who guide our mission to revolutionize product development
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {advisors.map((advisor, index) => (
              <TeamCard key={index} member={advisor} isLarge={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture Section */}
      <section className="py-16 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800">Our Culture</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're not just colleagues—we're a family of innovators united by a shared mission to accelerate the journey from idea to market.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every team member brings unique expertise, but we all share the same passion: turning the impossible into the inevitable.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold">
                  🚀 Innovation First
                </div>
                <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                  🤝 Collaboration
                </div>
                <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
                  ⚡ Speed & Quality
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-200/50 to-blue-300/30 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-sky-200/50">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-sky-600 mb-2">50+</div>
                    <div className="text-gray-600">MVPs Launched</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">30</div>
                    <div className="text-gray-600">Day Average</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-indigo-600 mb-2">98%</div>
                    <div className="text-gray-600">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-600 mb-2">24/7</div>
                    <div className="text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            We're always looking for exceptional talent to join our dream team and help shape the future of rapid product development.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-sky-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-sky-50 transition-all transform hover:scale-105 shadow-lg">
              View Open Positions
            </button>
            <button className="bg-sky-800/50 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-sky-700/50 transition-all transform hover:scale-105">
              Send Us Your Resume
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
          <p className="text-gray-400 mb-8">Where dreams meet deadlines</p>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500">© {new Date().getFullYear()} Cielo Stack. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}