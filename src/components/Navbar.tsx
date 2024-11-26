import React from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a 
              href="#home" 
              className="flex items-center hover:opacity-90 transition-opacity"
            >
              <Logo className="h-10 w-auto text-primary" />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#about" className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#programs" className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Programs</a>
              <a href="#impact" className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Impact</a>
              <button
                onClick={() => window.location.href = 'https://donate.stripe.com/test'}
                className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-dark transition-colors"
              >
                Donate Now
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-primary-dark focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#about" className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#programs" className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Programs</a>
            <a href="#impact" className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Impact</a>
            <button
              onClick={() => window.location.href = 'https://donate.stripe.com/test'}
              className="w-full text-left bg-primary text-white px-3 py-2 rounded-md text-base font-medium hover:bg-primary-dark transition-colors"
            >
              Donate Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}