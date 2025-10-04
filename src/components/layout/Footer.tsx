import React from 'react';
import { Calendar, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-violet-400" />
              <span className="ml-2 text-xl font-bold">EventHub</span>
            </div>
            <p className="mt-4 text-gray-400">
              Discover and promote local events, workshops, and community gatherings all in one place.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/events" className="text-gray-400 hover:text-white transition-colors">Explore Events</a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <a href="/login" className="text-gray-400 hover:text-white transition-colors">Organizer Login</a>
              </li>
            </ul>
          </div>

          {/* Event Categories */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Event Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="/events?category=Music" className="text-gray-400 hover:text-white transition-colors">Music</a>
              </li>
              <li>
                <a href="/events?category=Workshops" className="text-gray-400 hover:text-white transition-colors">Workshops</a>
              </li>
              <li>
                <a href="/events?category=Entertainment" className="text-gray-400 hover:text-white transition-colors">Entertainment</a>
              </li>
              <li>
                <a href="/events?category=Art" className="text-gray-400 hover:text-white transition-colors">Art & Culture</a>
              </li>
              <li>
                <a href="/events?category=Food" className="text-gray-400 hover:text-white transition-colors">Food & Drink</a>
              </li>
              <li>
                <a href="/events?category=Technology" className="text-gray-400 hover:text-white transition-colors">Technology</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                <span className="text-gray-400">123 Event Street, Suite 500<br />San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-3" />
                <a href="mailto:info@eventhub.com" className="text-gray-400 hover:text-white transition-colors">info@eventhub.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} EventHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;