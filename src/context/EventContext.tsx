import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Event, Category } from '../types';
import { events as mockEvents } from '../data/events';

interface EventContextType {
  events: Event[];
  filteredEvents: Event[];
  likedEvents: Set<string>;
  selectedCategory: Category | 'All';
  searchQuery: string;
  setSelectedCategory: (category: Category | 'All') => void;
  setSearchQuery: (query: string) => void;
  toggleLike: (eventId: string) => void;
  incrementViews: (eventId: string) => void;
  addEvent: (event: Omit<Event, 'id' | 'views' | 'likes'>) => void;
  updateEvent: (event: Event) => void;
  deleteEvent: (eventId: string) => void;
}

const EventContext = createContext<EventContextType>({
  events: [],
  filteredEvents: [],
  likedEvents: new Set(),
  selectedCategory: 'All',
  searchQuery: '',
  setSelectedCategory: () => {},
  setSearchQuery: () => {},
  toggleLike: () => {},
  incrementViews: () => {},
  addEvent: () => {},
  updateEvent: () => {},
  deleteEvent: () => {},
});

export const useEvents = () => useContext(EventContext);

export const EventProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [events, setEvents] = useState<Event[]>(mockEvents);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(mockEvents);
  const [likedEvents, setLikedEvents] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter events whenever search or category changes
  useEffect(() => {
    let filtered = [...events];
    
    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(event => event.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        event => 
          event.title.toLowerCase().includes(query) ||
          event.description.toLowerCase().includes(query) ||
          event.location.toLowerCase().includes(query) ||
          event.organizer.toLowerCase().includes(query)
      );
    }
    
    setFilteredEvents(filtered);
  }, [events, selectedCategory, searchQuery]);

  const toggleLike = (eventId: string) => {
    const newLikedEvents = new Set(likedEvents);
    
    if (newLikedEvents.has(eventId)) {
      newLikedEvents.delete(eventId);
      setEvents(events.map(event => 
        event.id === eventId ? { ...event, likes: event.likes - 1 } : event
      ));
    } else {
      newLikedEvents.add(eventId);
      setEvents(events.map(event => 
        event.id === eventId ? { ...event, likes: event.likes + 1 } : event
      ));
    }
    
    setLikedEvents(newLikedEvents);
  };

  const incrementViews = (eventId: string) => {
    setEvents(events.map(event => 
      event.id === eventId ? { ...event, views: event.views + 1 } : event
    ));
  };

  const addEvent = (event: Omit<Event, 'id' | 'views' | 'likes'>) => {
    const newEvent: Event = {
      ...event,
      id: `event-${Date.now()}`,
      views: 0,
      likes: 0,
    };
    
    setEvents([newEvent, ...events]);
  };

  const updateEvent = (updatedEvent: Event) => {
    setEvents(events.map(event => 
      event.id === updatedEvent.id ? updatedEvent : event
    ));
  };

  const deleteEvent = (eventId: string) => {
    setEvents(events.filter(event => event.id !== eventId));
  };

  return (
    <EventContext.Provider
      value={{
        events,
        filteredEvents,
        likedEvents,
        selectedCategory,
        searchQuery,
        setSelectedCategory,
        setSearchQuery,
        toggleLike,
        incrementViews,
        addEvent,
        updateEvent,
        deleteEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};