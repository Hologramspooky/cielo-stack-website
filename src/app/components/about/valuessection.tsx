// app/components/about/ValuesSection.tsx
import React from 'react';

const values = [
  {
    name: 'Speed',
    description: 'We move quickly and efficiently to deliver high-quality MVPs in 30 days.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  },
  {
    name: 'Collaboration',
    description: 'We work as a true partner, integrating seamlessly with your team and vision.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  },
  {
    name: 'Excellence',
    description: 'Our team consists of elite talent committed to building robust and scalable products.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  },
  {
    name: 'Transparency',
    description: 'We provide clear roadmaps and constant communication, so you’re always in the loop.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  }
];

export default function ValuesSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.name} className="bg-gray-50 p-8 rounded-lg">
              <div className="mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  {value.icon}
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{value.name}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}