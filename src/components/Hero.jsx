import React, { useRef, useEffect, useState } from 'react';
import Navbar from './Navbar';
import { professions } from '../data';
import profilePic from '../assets/profilePic.jpg'; // Adjust path as needed

const Hero = () => {
  const [currentText, setCurrentText] = useState(professions[0]);
  const [isRotating, setIsRotating] = useState(false);
  const currentIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRotating(true);
      setTimeout(() => {
        currentIndex.current = (currentIndex.current + 1) % professions.length;
        setCurrentText(professions[currentIndex.current]);
        setIsRotating(false);
      }, 500); // Faster transition
    }, 2500); // Faster rotation

    return () => clearInterval(interval);
  }, [professions]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navbar />
      
      <div className="flex-1 flex flex-col justify-center items-center px-4 w-full max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full justify-center">
          {/* Greeting with animated wave */}
          <h1 className="text-yellow-500 text-5xl sm:text-6xl md:text-7xl font-bold animate-wave">
            Hi,
          </h1>

          {/* Profession with cool typing effect */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="flex items-center">
              <span className="text-white text-3xl sm:text-4xl md:text-5xl">
                I'm{' '}
                <span className="relative inline-block min-w-[180px] md:min-w-[220px] text-left h-14 md:h-16">
                  <span className={`text-yellow-500 font-extrabold transition-all duration-300 ${
                    isRotating ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
                  }`}>
                    {currentText}
                  </span>
                  <span className={`absolute inset-0 border-b-2 border-yellow-500 transition-all duration-500 ${
                    isRotating ? 'scale-x-0' : 'scale-x-100'
                  }`}></span>
                </span>
              </span>
            </div>

            {/* Profile Image with cool hover effect */}
            <div className="relative group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 p-1">
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-900 transition-all duration-500 group-hover:scale-105 group-hover:border-yellow-400">
                  <img 
                    src={profilePic} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = 'https://via.placeholder.com/200'; // Fallback image
                    }}
                  />
                </div>
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
            </div>
          </div>
        </div>

        {/* Animated subtitle */}
        <p className="mt-12 text-gray-300 text-lg md:text-xl text-center max-w-2xl animate-float">
          Creating digital experiences that matter
        </p>
      </div>

      {/* Custom animations in global CSS */}
      <style jsx global>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(10deg); }
          75% { transform: rotate(-10deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-wave {
          animation: wave 2s infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;