// app/components/about/HowWeOperateSection.tsx
import React from 'react';

const processSteps = [
  {
    step: '01',
    name: 'Discovery',
    description: 'We start with a deep dive into your vision, goals, and technical requirements.',
  },
  {
    step: '02',
    name: 'Design',
    description: 'Our team creates UI/UX mockups and a clickable prototype for your approval.',
  },
  {
    step: '03',
    name: 'Build',
    description: 'Our developers write clean, scalable code, turning the approved design into a product.',
  },
  {
    step: '04',
    name: 'Launch',
    description: 'We deploy the MVP, hand over the codebase, and prepare for user feedback.',
  },
];

export default function HowWeOperateSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">How We Operate</h2>
        <p className="text-lg text-center text-gray-600 mb-16 max-w-2xl mx-auto">Our streamlined 30-day process ensures speed without sacrificing quality.</p>
        
        <div className="relative">
          {/* Connecting line - hidden on mobile */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2"></div>
          
          <div className="relative grid md:grid-cols-4 gap-8">
            {processSteps.map((item) => (
              <div key={item.name} className="bg-white p-8 rounded-lg shadow-sm text-center md:text-left">
                <div className="text-5xl font-bold text-blue-200 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}