import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Modal } from '../ui/Modal';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'register';
}

const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  onClose, 
  initialMode = 'login' 
}) => {
  const [isLogin, setIsLogin] = useState(initialMode === 'login');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleModeSwitch = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setIsTransitioning(false);
    }, 200);
  };

  const handleClose = () => {
    setIsLogin(true); // Reset to login when closing
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="xs" variant="glass">
      <div className="relative overflow-hidden">
        {/* Custom close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 text-gray-400 hover:text-gray-600 transition-colors bg-white/80 rounded-full p-1 backdrop-blur-sm"
        >
          <X size={16} />
        </button>

        {/* Form container with slide animation */}
        <div 
          className={`transition-all duration-300 ease-in-out ${
            isTransitioning 
              ? 'opacity-0 transform translate-x-4' 
              : 'opacity-100 transform translate-x-0'
          }`}
        >
          {isLogin ? (
            <div className="p-4 sm:p-6">
              <LoginForm onSuccess={handleClose} />
              
              {/* Switch to Register */}
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <button
                    onClick={handleModeSwitch}
                    className="text-violet-600 hover:text-violet-500 font-medium transition-colors underline decoration-1 underline-offset-2"
                  >
                    Sign up here
                  </button>
                </p>
              </div>
            </div>
          ) : (
            <div className="p-4 sm:p-6">
              <RegisterForm onSuccess={handleClose} />
              
              {/* Switch to Login */}
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <button
                    onClick={handleModeSwitch}
                    className="text-violet-600 hover:text-violet-500 font-medium transition-colors underline decoration-1 underline-offset-2"
                  >
                    Sign in here
                  </button>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default AuthModal;