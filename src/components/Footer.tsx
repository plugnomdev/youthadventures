import { Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-primary text-secondary">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <Logo className="h-10 w-auto text-secondary" />
            <p className="mt-6 text-lg max-w-2xl">
              Empowering youth through innovative programs in sports, culture, education, music, and art.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <span>33 Rue Proudhon<br />75012 Paris, France</span>
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>+33 763 110 240</span>
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>youthadventures2010@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-secondary/20 pt-8">
          <p className="text-center">
            © {new Date().getFullYear()} Youth Adventures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}