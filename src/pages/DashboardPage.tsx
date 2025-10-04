import React, { useState, useEffect } from 'react';
import { Plus, User, BarChart2, Heart } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import EventTable from '../components/dashboard/EventTable';
import EventForm from '../components/dashboard/EventForm';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { Modal } from '../components/ui/Modal';
import { useEvents } from '../context/EventContext';
import { useAuth } from '../context/AuthContext';
import { Event } from '../types';
import { useNavigate } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  const { events, addEvent, updateEvent, deleteEvent } = useEvents();
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [organizerEvents, setOrganizerEvents] = useState<Event[]>([]);
  
  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);
  
  // Filter events for the current organizer
  useEffect(() => {
    if (user) {
      const filtered = events.filter(event => event.organizerId === user.id);
      setOrganizerEvents(filtered);
    }
  }, [events, user]);
  
  // Calculate total views and likes
  const totalViews = organizerEvents.reduce((sum, event) => sum + event.views, 0);
  const totalLikes = organizerEvents.reduce((sum, event) => sum + event.likes, 0);
  
  const handleCreateEvent = (eventData: Omit<Event, 'id' | 'views' | 'likes'>) => {
    addEvent(eventData);
    setIsCreateModalOpen(false);
  };
  
  const handleEditEvent = (event: Event) => {
    setSelectedEvent(event);
    setIsEditModalOpen(true);
  };
  
  const handleUpdateEvent = (eventData: Event) => {
    updateEvent(eventData);
    setIsEditModalOpen(false);
  };
  
  const handleDeleteClick = (eventId: string) => {
    const event = events.find(e => e.id === eventId);
    if (event) {
      setSelectedEvent(event);
      setIsDeleteModalOpen(true);
    }
  };
  
  const confirmDelete = () => {
    if (selectedEvent) {
      deleteEvent(selectedEvent.id);
      setIsDeleteModalOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Organizer Dashboard</h1>
              <p className="text-gray-600">Manage your events and track their performance</p>
            </div>
            
            <Button 
              variant="primary"
              className="mt-4 sm:mt-0 flex items-center"
              onClick={() => setIsCreateModalOpen(true)}
            >
              <Plus className="mr-2 h-4 w-4" />
              Create New Event
            </Button>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-violet-100 text-violet-600 mr-4">
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Events</p>
                    <p className="text-2xl font-semibold text-gray-900">{organizerEvents.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-orange-100 text-orange-600 mr-4">
                    <BarChart2 className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Views</p>
                    <p className="text-2xl font-semibold text-gray-900">{totalViews}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-red-100 text-red-600 mr-4">
                    <Heart className="h-6 w-6 fill-current" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Likes</p>
                    <p className="text-2xl font-semibold text-gray-900">{totalLikes}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Events Table */}
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold text-gray-900">Your Events</h2>
            </CardHeader>
            <CardContent>
              <EventTable 
                events={organizerEvents} 
                onEdit={handleEditEvent} 
                onDelete={handleDeleteClick} 
              />
            </CardContent>
          </Card>
        </div>
      </main>
      
      {/* Create Event Modal */}
      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Create New Event"
        size="xl"
      >
        <div className="p-6">
          <EventForm 
            onSubmit={handleCreateEvent} 
            onCancel={() => setIsCreateModalOpen(false)} 
          />
        </div>
      </Modal>
      
      {/* Edit Event Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Edit Event"
        size="xl"
      >
        <div className="p-6">
          {selectedEvent && (
            <EventForm 
              initialData={selectedEvent}
              onSubmit={handleUpdateEvent} 
              onCancel={() => setIsEditModalOpen(false)} 
            />
          )}
        </div>
      </Modal>
      
      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Confirm Deletion"
        size="md"
      >
        <div className="p-6">
          <p className="mb-4">
            Are you sure you want to delete the event "{selectedEvent?.title}"? This action cannot be undone.
          </p>
          
          <div className="flex justify-end space-x-3">
            <Button 
              variant="outline" 
              onClick={() => setIsDeleteModalOpen(false)}
            >
              Cancel
            </Button>
            <Button 
              variant="primary"
              className="bg-red-600 hover:bg-red-700"
              onClick={confirmDelete}
            >
              Delete Event
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DashboardPage;