// app/components/WhyUs.tsx
import React from 'react';

const reasons = [
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
    title: "Lightning Speed",
    description: "30-day delivery guaranteed. No compromises on quality, just efficient execution."
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
    title: "Full Transparency",
    description: "Clear roadmap, daily updates, and complete visibility into your project's progress."
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />,
    title: "Elite Quality",
    description: "Top-tier developers and designers with proven track records at leading companies."
  }
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {reason.icon}
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}