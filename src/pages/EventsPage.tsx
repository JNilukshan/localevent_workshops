import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import EventList from '../components/events/EventList';
import EventDetail from '../components/events/EventDetail';
import SearchBar from '../components/events/SearchBar';
import CategoryFilter from '../components/events/CategoryFilter';
import { Event } from '../types';

const EventsPage: React.FC = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Explore Events</h1>
            <p className="text-lg text-gray-600">
              Discover exciting events happening in your area. Filter by category or search for specific events.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <SearchBar />
                <CategoryFilter />
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <EventList />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventsPage;