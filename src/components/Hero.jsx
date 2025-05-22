import React, { useRef, useEffect, useState } from 'react';
import Navbar from './Navbar';
import { professions } from '../data';
import profilePic from '../assets/profilePic.jpg';

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
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, [professions]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center  bg-gray-900">
      <Navbar />
      
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center px-4 w-full max-w-6xl gap-12">
        {/* Text Content - Left Side */}
        <div className="flex flex-col items-center md:items-start gap-6 w-full md:w-auto">
          <div className="relative overflow-hidden">
            <h1 className="text-yellow-500 text-5xl sm:text-6xl md:text-7xl font-bold mb-4 animate-slide-in">
              Hi, I'm
            </h1>
            
            {/* Profession text without underline */}
            <div className="relative h-16 md:h-20">
              <span className={`absolute left-0 text-white text-3xl sm:text-4xl md:text-5xl transition-all duration-500 ${
                isRotating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}>
                <span className="text-yellow-500 font-extrabold">{currentText}</span>
              </span>
            </div>
            
            {/* Subtitle */}
            <p className="mt-8 text-gray-300 text-lg md:text-xl text-center md:text-left max-w-md animate-fade-in">
              Creating digital experiences that matter
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a href="https://github.com/yared27" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/yared-alemayehu-661863296/" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="mailto:alemayehuyared9@gmail.com" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Profile Photo - Clean version without frame */}
        <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg">
          <img 
            src={profilePic} 
            alt="Profile" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = 'https://via.placeholder.com/200';
            }}
          />
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes slide-in {
          0% {
            transform: translateX(-30px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.8s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out 0.3s both;
        }
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .social-link:hover {
          color: #f59e0b;
          background: rgba(245, 158, 11, 0.1);
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(245, 158, 11, 0.2);
        }
      `}</style>
    </div>
  );
};

export default Hero;