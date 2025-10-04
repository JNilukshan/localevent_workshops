import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '../components/ui/Button';
import AuthModal from '../components/auth/AuthModal';
import { useNavigate } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);

  const handleAuthClick = () => {
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About EventHub</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to connect communities through local events and experiences.
            </p>
          </div>
          
          {/* Our Story */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                EventHub was born from a simple idea: making it easier for people to discover and participate in local events. We noticed that despite the abundance of activities in our communities, many people struggled to find events that matched their interests.
              </p>
              <p className="text-gray-600 mb-4">
                Our platform brings together event organizers and attendees in a seamless experience. Whether you're looking to attend a workshop, enjoy live music, or organize your own event, EventHub provides the tools and visibility you need.
              </p>
              <p className="text-gray-600">
                Since our launch in 2025, we've helped thousands of events reach their target audience and fostered countless connections within communities.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg" 
                alt="Team brainstorming" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Our Mission */}
          <div className="bg-violet-50 rounded-2xl p-8 mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                To build stronger, more connected communities through shared experiences and local events.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Connect Communities</h3>
                <p className="text-gray-600">
                  We believe that shared experiences bring people together and create stronger community bonds.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Support Local Organizers</h3>
                <p className="text-gray-600">
                  We empower local organizers with tools to reach their audience and grow their events.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Experiences</h3>
                <p className="text-gray-600">
                  We're committed to helping people discover meaningful, high-quality events in their community.
                </p>
              </div>
            </div>
          </div>
          
          {/* Team Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the passionate people behind EventHub who are dedicated to bringing communities together.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative mb-4 inline-block">
                  <div className="w-48 h-48 rounded-full overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
                      alt="Sarah Johnson" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">Sarah Johnson</h3>
                <p className="text-violet-600 mb-3">Founder & CEO</p>
                <p className="text-gray-600">
                  Former event organizer with a passion for building community through shared experiences.
                </p>
              </div>
              
              <div className="text-center">
                <div className="relative mb-4 inline-block">
                  <div className="w-48 h-48 rounded-full overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/2556802/pexels-photo-2556802.jpeg" 
                      alt="Michael Chen" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">Michael Chen</h3>
                <p className="text-violet-600 mb-3">CTO</p>
                <p className="text-gray-600">
                  Tech enthusiast focused on creating seamless digital experiences for event discovery.
                </p>
              </div>
              
              <div className="text-center">
                <div className="relative mb-4 inline-block">
                  <div className="w-48 h-48 rounded-full overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg" 
                      alt="Olivia Rodriguez" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">Olivia Rodriguez</h3>
                <p className="text-violet-600 mb-3">Head of Community</p>
                <p className="text-gray-600">
                  Community builder who loves connecting people and fostering meaningful interactions.
                </p>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-gradient-to-r from-violet-600 to-violet-800 rounded-2xl text-white p-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether you're looking to discover amazing events or organize your own, EventHub is here to help you connect with your community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => navigate('/events')}
              >
                Explore Events
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleAuthClick}
                className="border-white text-white hover:bg-white/20"
              >
                Become an Organizer
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </div>
  );
};

export default AboutPage;