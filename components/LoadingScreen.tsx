"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const scientificQuotes = [
    "Problem solving is often a matter of cooking up an appropriate Markov chain",
    "In the world of genetics, every mutation tells a story of survival",
    "The double helix is nature's most elegant data storage system",
    "Protein folding is the universe's way of solving 3D puzzles",
    "Every cell is a molecular machine more complex than any computer",
    "DNA is the code that writes itself",
    "Evolution is the ultimate optimization algorithm",
    "In biotech, we don't just read the book of life — we edit it"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Change quote every 2 seconds
    const quoteTimer = setInterval(() => {
      setQuoteIndex(prev => (prev + 1) % scientificQuotes.length);
    }, 2000);

    return () => {
      clearInterval(timer);
      clearInterval(quoteTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center z-50 transition-opacity duration-1000 ease-out">
      <div className="text-center max-w-lg mx-auto px-4">
        {/* Spectrity Logo */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-8">
            {/* Actual Spectrity Logo */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Image 
                  src="/double helix.png" 
                  alt="Spectrity Logo" 
                  width={80} 
                  height={80}
                  className="h-20 w-20 drop-shadow-lg"
                  priority
                />
                {/* Subtle floating particles around logo */}
                <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse opacity-70"></div>
                <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-70" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 -right-2 w-1 h-1 bg-indigo-400 rounded-full animate-pulse opacity-70" style={{ animationDelay: '2s' }}></div>
              </div>
              
              <div className="flex flex-col">
                <Image 
                  src="/final title.png" 
                  alt="Spectrity.bio"
                  width={300} 
                  height={80}
                  className="h-20 w-auto drop-shadow-md"
                  priority
                />
              </div>
            </div>
          </div>
          
          {/* Professional tagline matching the website */}
          <div className="text-center max-w-md mx-auto">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              The Future of Therapeutics is Here
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our AI-powered platform combines cutting-edge technology with deep biological understanding to accelerate drug discovery and development.
            </p>
          </div>
        </div>
        
        {/* Scientific Quote */}
        <div className="mb-8 h-12 flex items-center justify-center">
          <p className="text-gray-700 text-sm italic font-medium transition-opacity duration-500">
            "{scientificQuotes[quoteIndex]}"
          </p>
        </div>
        
        {/* Enhanced Loading Progress */}
        <div className="w-80 mx-auto">
          <div className="mb-4">
            <p className="text-gray-700 text-base font-medium">Loading Scientific Insights...</p>
          </div>
          
          {/* Professional progress bar with glow effect */}
          <div className="relative w-full bg-gray-100 rounded-full h-3 shadow-inner">
            <div 
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 h-3 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
            </div>
            
            {/* Glow effect */}
            <div 
              className="absolute top-0 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-sm opacity-50 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <div className="mt-3 flex justify-between items-center">
            <div className="text-xs text-gray-500 font-medium">
              {progress < 25 ? 'Initializing AI modules...' :
               progress < 50 ? 'Loading molecular databases...' :
               progress < 75 ? 'Connecting research networks...' :
               progress < 95 ? 'Finalizing platform...' : 'Ready!'}
            </div>
            <div className="text-xs text-gray-600 font-semibold">
              {progress}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}