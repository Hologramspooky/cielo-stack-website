'use client';

import React, { useState, useEffect } from 'react';

export default function Careers() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openRoles = [
    {
      id: 1,
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      description: "Lead development on cutting-edge MVPs using React, Node.js, and cloud technologies. Drive technical decisions and mentor junior developers.",
      location: "Remote",
      type: "Full-time",
      experience: "5+ years"
    },
    {
      id: 2,
      title: "Product Designer",
      department: "Design",
      description: "Create exceptional user experiences for rapid MVP development. Work closely with clients to transform ideas into intuitive, beautiful interfaces.",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years"
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Engineering",
      description: "Build and maintain infrastructure that powers our 30-day MVP delivery. Expertise in AWS, Docker, and CI/CD pipelines required.",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years"
    },
    {
      id: 4,
      title: "Product Manager",
      department: "Product",
      description: "Drive product strategy and execution for client MVPs. Bridge the gap between business requirements and technical implementation.",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years"
    },
    {
      id: 5,
      title: "Marketing Lead",
      department: "Marketing",
      description: "Scale our brand and lead generation efforts. Experience with B2B SaaS marketing and content creation preferred.",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years"
    },
    {
      id: 6,
      title: "Junior Developer",
      department: "Engineering",
      description: "Join our fast-paced development team and learn from senior engineers while contributing to real client projects.",
      location: "Remote",
      type: "Full-time",
      experience: "1+ years"
    }
  ];

  const culturePoints = [
    {
      icon: "🌍",
      title: "Remote-First",
      description: "Work from anywhere in the world. We've been remote since day one and have mastered async collaboration."
    },
    {
      icon: "⚡",
      title: "Fast Decision-Making",
      description: "No endless meetings or bureaucracy. We make decisions quickly and iterate based on results."
    },
    {
      icon: "💰",
      title: "Profit Sharing",
      description: "Everyone shares in our success. Quarterly profit sharing ensures your hard work is rewarded."
    },
    {
      icon: "👥",
      title: "Tight Teams",
      description: "Small, focused teams with direct access to leadership. Your voice matters and your impact is visible."
    },
    {
      icon: "📚",
      title: "Learning Budget",
      description: "$2,000 annual learning budget for courses, conferences, and books to keep your skills sharp."
    },
    {
      icon: "🏝️",
      title: "Unlimited PTO",
      description: "Take the time you need to recharge. We trust you to manage your time and deliver great work."
    },
    {
      icon: "🛠️",
      title: "Latest Tools",
      description: "Top-tier equipment and software. We provide whatever you need to do your best work."
    },
    {
      icon: "🚀",
      title: "Rapid Growth",
      description: "Opportunities to advance quickly in a fast-growing company. Your career growth is our priority."
    }
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      role: "Senior Developer",
      quote: "The pace here is incredible. In 6 months, I've worked on more diverse projects than in my previous 2 years at a big corp.",
      image: "AC",
      tenure: "8 months"
    },
    {
      name: "Maya Patel",
      role: "Product Designer",
      quote: "I love the autonomy and trust. I can work my best hours from anywhere while contributing to products that actually launch.",
      image: "MP",
      tenure: "1.2 years"
    },
    {
      name: "Jordan Kim",
      role: "DevOps Engineer",
      quote: "The profit sharing is real. Last quarter's bonus covered my entire rent for 3 months. Plus, the team genuinely cares about work-life balance.",
      image: "JK",
      tenure: "2 years"
    }
  ];

  const JobCard = ({ job }) => (
    <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-sky-300 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02]">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-sky-700 transition-colors">
            {job.title}
          </h3>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full font-medium">
              {job.department}
            </span>
            <span>{job.experience}</span>
          </div>
        </div>
        <div className="text-right text-sm text-gray-500">
          <div>{job.location}</div>
          <div>{job.type}</div>
        </div>
      </div>
      
      <p className="text-gray-600 leading-relaxed mb-6">
        {job.description}
      </p>
      
      <button className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-sky-600 group-hover:to-blue-600">
        Apply Now
      </button>
    </div>
  );

  const CultureCard = ({ point }) => (
    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-sky-200/50 hover:border-sky-300 transition-all duration-300 hover:transform hover:scale-105">
      <div className="text-4xl mb-4">{point.icon}</div>
      <h3 className="text-lg font-bold text-gray-800 mb-3">{point.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-blue-50">
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
            <a href="/work" className="text-gray-700 hover:text-sky-600 transition-colors">Work</a>
            <a href="#careers" className="text-sky-600 font-semibold">Careers</a>
          </div>
          <a href="/contact" className="bg-gradient-to-r from-sky-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-sky-700 hover:to-blue-700 transition-all transform hover:scale-105 inline-block">
            Contact Us
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`py-20 px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
            🚀 We're hiring remotely worldwide
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="block text-gray-800 mb-4">We're Looking for</span>
            <span className="block bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Builders
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed mb-12">
            Join our fast-paced, remote-first team on a mission to build impactful MVPs that change the world
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-sky-200/50">
              <div className="text-2xl font-bold text-sky-600 mb-1">100%</div>
              <div className="text-gray-600 text-sm">Remote</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-sky-200/50">
              <div className="text-2xl font-bold text-blue-600 mb-1">25+</div>
              <div className="text-gray-600 text-sm">Countries</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-sky-200/50">
              <div className="text-2xl font-bold text-indigo-600 mb-1">4.9★</div>
              <div className="text-gray-600 text-sm">Team Rating</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-sky-200/50">
              <div className="text-2xl font-bold text-cyan-600 mb-1">$150K+</div>
              <div className="text-gray-600 text-sm">Avg Salary</div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section id="careers" className="py-16 px-6 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Open Roles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're looking for exceptional talent to join our mission. All positions are remote-first.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto mt-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {openRoles.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Culture Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Culture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've built a culture that empowers builders to do their best work while living their best life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culturePoints.map((point, index) => (
              <CultureCard key={index} point={point} />
            ))}
          </div>
        </div>
      </section>

      {/* Day in the Life Section */}
      <section className="py-16 px-6 bg-white/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Day in the Life</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our team members about what it's really like to work at Cielo Stack
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-sky-200/50">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sky-600 font-medium">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.tenure} at Cielo Stack</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>

          {/* Behind the Scenes */}
          <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">A Typical Week</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold text-sm">
                    M
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Monday Kickoff</h4>
                    <p className="text-gray-600 text-sm">Weekly async standup and goal setting</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
                    W
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Wednesday Check-in</h4>
                    <p className="text-gray-600 text-sm">Optional team sync and collaboration time</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-sm">
                    F
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Friday Demos</h4>
                    <p className="text-gray-600 text-sm">Show off what you built and celebrate wins</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-sky-100 to-blue-200 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">📊</div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Flexible Schedule</h4>
              <p className="text-gray-600">
                Core overlap hours: 10am-2pm EST for collaboration. Otherwise, work when you're most productive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Perks & Benefits</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Competitive Salary + Equity</h3>
              <p className="text-gray-600">Market-rate salaries plus meaningful equity in a fast-growing company.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-sky-100 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Health & Wellness</h3>
              <p className="text-gray-600">100% covered health, dental, vision insurance plus $100/month wellness budget.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-100 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🌴</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Annual Retreat</h3>
              <p className="text-gray-600">Company-paid annual retreat to bring the whole team together in person.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Don't see a role for you?
          </h2>
          <p className="text-xl text-sky-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            We're always looking for exceptional talent. If you think you'd be a great fit for our mission, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-sky-600 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-sky-50 transition-all transform hover:scale-105 shadow-lg">
              Reach Out Anyway
            </button>
            <button className="bg-sky-800/50 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-sky-700/50 transition-all transform hover:scale-105">
              Subscribe to Updates
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
          <p className="text-gray-400 mb-8">Building the future, one MVP at a time</p>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500">© {new Date().getFullYear()} Cielo Stack. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}