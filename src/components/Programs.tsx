import React from 'react';
import { Music, Book, Palette, Trophy, Heart, Star } from 'lucide-react';

const programs = [
  {
    icon: Trophy,
    title: 'Sports Development',
    description: 'Professional training and coaching in various sports disciplines to develop young athletes.'
  },
  {
    icon: Palette,
    title: 'Arts & Culture',
    description: 'Creative workshops and cultural exchange programs to foster artistic expression.'
  },
  {
    icon: Book,
    title: 'Education',
    description: 'Quality education support, mentorship, and academic guidance for sustainable development.'
  },
  {
    icon: Music,
    title: 'Music Programs',
    description: 'Music education and performance opportunities to nurture young talents.'
  },
  {
    icon: Heart,
    title: 'Youth Support',
    description: 'Comprehensive support system for personal growth and development.'
  },
  {
    icon: Star,
    title: 'Leadership Development',
    description: 'Empowering youth with leadership skills and opportunities for community engagement.'
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">Our Programs</h2>
          <p className="mt-4 text-lg text-primary-light">Empowering youth through diverse developmental programs</p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-lg border border-gray-100 transition-all duration-300"
            >
              <div className="relative p-6">
                <div className="flex items-center mb-4">
                  <program.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold text-primary ml-3">{program.title}</h3>
                </div>
                <p className="text-primary-light leading-relaxed">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}