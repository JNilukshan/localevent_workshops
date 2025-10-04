import React, { useState, useEffect } from 'react';
import { Event, Category } from '../../types';
import { Button } from '../ui/Button';
import { useAuth } from '../../context/AuthContext';

interface EventFormProps {
  onSubmit: (event: Omit<Event, 'id' | 'views' | 'likes'> | Event) => void;
  initialData?: Event;
  onCancel: () => void;
}

const categories: Category[] = [
  'Music',
  'Workshops',
  'Entertainment',
  'Art',
  'Sports',
  'Food',
  'Technology',
  'Other'
];

const EventForm: React.FC<EventFormProps> = ({ onSubmit, initialData, onCancel }) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    title: '',
    shortDescription: '',
    description: '',
    date: '',
    time: '',
    location: '',
    category: 'Other' as Category,
    image: '',
    ticketLink: '',
  });
  
  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title,
        shortDescription: initialData.shortDescription,
        description: initialData.description,
        date: initialData.date,
        time: initialData.time,
        location: initialData.location,
        category: initialData.category,
        image: initialData.image,
        ticketLink: initialData.ticketLink || '',
      });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) return;

    const eventData = {
      ...formData,
      organizer: user.name,
      organizerId: user.id,
    };

    if (initialData) {
      onSubmit({
        ...eventData,
        id: initialData.id,
        views: initialData.views,
        likes: initialData.likes,
      });
    } else {
      onSubmit(eventData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Event Title *
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 p-2 border"
        />
      </div>

      <div>
        <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700">
          Short Description * (displayed on event cards)
        </label>
        <input
          type="text"
          id="shortDescription"
          name="shortDescription"
          value={formData.shortDescription}
          onChange={handleChange}
          required
          maxLength={100}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 p-2 border"
        />
        <p className="text-sm text-gray-500 mt-1">
          {formData.shortDescription.length}/100 characters
        </p>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Full Description *
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={5}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 p-2 border"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Date *
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 p-2 border"
          />
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">
            Time *
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 p-2 border"
          />
        </div>
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          Location *
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 p-2 border"
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          Category *
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 p-2 border"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          Image URL *
        </label>
        <input
          type="url"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
          placeholder="https://example.com/image.jpg"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 p-2 border"
        />
        <p className="text-sm text-gray-500 mt-1">
          Enter a valid image URL. In a production app, you would be able to upload images.
        </p>
      </div>

      <div>
        <label htmlFor="ticketLink" className="block text-sm font-medium text-gray-700">
          Ticket Link (optional)
        </label>
        <input
          type="url"
          id="ticketLink"
          name="ticketLink"
          value={formData.ticketLink}
          onChange={handleChange}
          placeholder="https://tickets.example.com"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 p-2 border"
        />
      </div>

      <div className="flex justify-end space-x-3">
        <Button 
          type="button" 
          variant="outline" 
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          {initialData ? 'Update Event' : 'Create Event'}
        </Button>
      </div>
    </form>
  );
};

export default EventForm;