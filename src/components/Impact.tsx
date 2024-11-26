import React from 'react';
import { useInView } from 'react-intersection-observer';

const stats = [
  { id: 1, number: '10,000+', label: 'Youth Impacted' },
  { id: 2, number: '15', label: 'Countries' },
  { id: 3, number: '500+', label: 'Volunteers' },
  { id: 4, number: '100+', label: 'Programs' },
];

export default function Impact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="impact" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">Our Impact</h2>
          <p className="mt-4 text-xl text-primary-light">Making a difference in young lives across continents</p>
        </div>

        <dl ref={ref} className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <dt className={`text-4xl font-extrabold text-primary transition-all duration-1000 ${inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
                {stat.number}
              </dt>
              <dd className="mt-2 text-lg font-medium text-primary-light">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}