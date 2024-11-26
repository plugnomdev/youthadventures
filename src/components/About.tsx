import React from 'react';
import { Target, Users, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">About Youth Adventures</h2>
          <p className="mt-4 max-w-2xl text-xl text-primary-light lg:mx-auto">
            Empowering young minds through innovative programs across Africa and Europe
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary text-primary">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-primary">Our Mission</h3>
              <p className="mt-4 text-center text-primary-light">
                To provide comprehensive support and opportunities for youth development through sports, culture, education, music, and art.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary text-primary">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-primary">Who We Serve</h3>
              <p className="mt-4 text-center text-primary-light">
                Children and young adults aged 6-21 years, providing them with the tools and support needed to reach their full potential.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary text-primary">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-primary">Our Reach</h3>
              <p className="mt-4 text-center text-primary-light">
                Operating across Africa and Europe, creating a diverse and inclusive environment for youth development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}