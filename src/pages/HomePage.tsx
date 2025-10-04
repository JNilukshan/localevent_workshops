import React, { useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import EventList from '../components/events/EventList';
import PageTransition from '../components/layout/PageTransition';
import AuthModal from '../components/auth/AuthModal';
import { useEvents } from '../context/EventContext';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const { events } = useEvents();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const navigate = useNavigate();
  
  const featuredEvents = events.slice(0, 3);
  
  const handleEventClick = (eventId: string) => {
    navigate(`/events/${eventId}`);
  };
  

  const handleAuthClick = () => {
    setIsAuthModalOpen(true);
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-violet-900 via-violet-800 to-violet-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                  Discover Local Events & Workshops
                </h1>
                <p className="text-lg sm:text-xl mb-8 text-violet-100">
                  Find and join amazing events happening in your community. From music shows to workshops, all in one place.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="secondary" 
                    size="lg"
                    onClick={() => navigate('/events')}
                    className="group"
                  >
                    Explore Events
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={handleAuthClick}
                    className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                  >
                    Organize an Event
                  </Button>
                </div>
              </div>
              
              <div className="hidden lg:block relative">
                <div className="absolute -left-6 -top-6 w-64 h-64 bg-orange-500 opacity-20 rounded-full blur-3xl"></div>
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-violet-400 opacity-20 rounded-full blur-3xl"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-white/10">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-8 w-8 text-orange-400" />
                    <h3 className="text-xl font-semibold ml-2">Featured Events</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {featuredEvents.map((event) => (
                      <div 
                        key={event.id} 
                        className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                        onClick={() => handleEventClick(event.id)}
                      >
                        <div className="flex">
                          <div className="flex-shrink-0 h-14 w-14">
                            <img src={event.image} alt={event.title} className="h-full w-full object-cover rounded" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium">{event.title}</h4>
                            <p className="text-sm text-violet-200">{event.date} · {event.category}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                EventHub connects event organizers with attendees, making it easy to discover and promote local events.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Discover Events</h3>
                <p className="text-gray-600">
                  Browse through a variety of local events and filter by categories to find what interests you.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Create Events</h3>
                <p className="text-gray-600">
                  As an organizer, easily create and manage your events with our intuitive dashboard.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Connect & Engage</h3>
                <p className="text-gray-600">
                  Like events, share them with friends, and stay updated on your favorite organizers.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Events Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
              <Button 
                variant="outline"
                onClick={() => navigate('/events')}
                className="flex items-center"
              >
                View All Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <EventList />
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-violet-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Host Your Own Event?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join our platform and reach thousands of potential attendees in your area.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={handleAuthClick}
            >
              Get Started as an Organizer
            </Button>
          </div>
        </section>
        
        <Footer />
        
        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={() => setIsAuthModalOpen(false)} 
        />
      </div>
    </PageTransition>
  );
};

export default HomePage;