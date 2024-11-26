import React from 'react';


export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-secondary pt-16">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-primary-dark/60 mix-blend-multiply" />
        <img
          className="h-full w-full object-cover"
          src="/images/hero-background.jpg"
          alt="African children playing and learning"
        />
      </div>
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-32">
          <div className="max-w-3xl">
            {/* Remove or reposition the Logo component */}
            {/* <Logo className="h-24 w-auto text-secondary mb-10" /> */}
            
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
              <span className="block">Empowering Youth</span>
              <span className="block text-secondary">Through Adventure</span>
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-secondary-light max-w-2xl">
              Transforming lives through sports, culture, education, music, and art across Africa and Europe.
            </p>
            <div className="mt-12 flex gap-6">
              <button
                onClick={() => window.location.href = 'https://donate.stripe.com/test'}
                className="px-10 py-4 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary-light transition-all transform hover:scale-105"
              >
                Support Our Cause
              </button>
              <a
                href="#programs"
                className="px-10 py-4 border-2 border-secondary text-secondary font-bold rounded-lg hover:bg-secondary/10 transition-all transform hover:scale-105"
              >
                Our Programs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}