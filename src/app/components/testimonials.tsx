// app/components/Testimonials.tsx
'use client';

import React, { useState, useEffect } from 'react';

const testimonialsData = [
  {
    quote: "Cielo Stack delivered our MVP in exactly 30 days. Their process is incredible and the quality exceeded our expectations.",
    author: "Sarah Chen",
    company: "TechFlow"
  },
  {
    quote: "The transparency and speed of development was game-changing for our startup. We launched 3 months ahead of schedule.",
    author: "Marcus Rodriguez",
    company: "DataStream"
  },
  {
    quote: "Working with Cielo Stack felt like having a full in-house team. They understood our vision perfectly.",
    author: "Emma Thompson",
    company: "GreenTech Solutions"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialsData.length);
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-16">What Our Clients Say</h2>
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="text-2xl text-gray-400 mb-4">"</div>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            {testimonialsData[current].quote}
          </p>
          <div className="border-t pt-6">
            <p className="font-semibold text-gray-900">{testimonialsData[current].author}</p>
            <p className="text-blue-600">{testimonialsData[current].company}</p>
          </div>
        </div>
        <div className="flex justify-center space-x-2 mt-6">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === current ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}