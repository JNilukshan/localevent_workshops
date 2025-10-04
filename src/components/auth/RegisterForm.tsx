import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuth } from '../../context/AuthContext';

interface RegisterFormProps {
  onSuccess?: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      await register(formData.name, formData.email, formData.password);
      if (onSuccess) {
        onSuccess();
      }
      window.location.href = '/dashboard';
    } catch (err) {
      setError('Failed to create account');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <UserPlus className="mx-auto h-8 w-8 text-violet-600" />
        <h2 className="mt-2 text-lg font-bold text-gray-900">Create Organizer Account</h2>
        <p className="mt-1 text-xs text-gray-600">
          Sign up to start creating and managing your events
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        {error && (
          <div className="bg-red-50/80 backdrop-blur-sm border border-red-200 text-red-700 px-2 py-1.5 rounded-lg text-xs">
            {error}
          </div>
        )}

        <div>
          <label htmlFor="name" className="block text-xs font-medium text-gray-700">
            Organization Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 focus:ring-1 p-2 border bg-white/80 backdrop-blur-sm transition-all text-sm"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-medium text-gray-700">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 focus:ring-1 p-2 border bg-white/80 backdrop-blur-sm transition-all text-sm"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-xs font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 focus:ring-1 p-2 border bg-white/80 backdrop-blur-sm transition-all text-sm"
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-xs font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 focus:ring-1 p-2 border bg-white/80 backdrop-blur-sm transition-all text-sm"
          />
        </div>

        <div>
          <Button
            type="submit"
            variant="primary"
            size="sm"
            className="w-full flex justify-center"
            disabled={isLoading}
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;