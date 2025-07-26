"use client";

import { useEffect, useState } from 'react';

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
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center z-50">
      <div className="text-center max-w-lg mx-auto px-4">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Spectrity.bio
          </h1>
        </div>
        
        {/* Scientific Quote */}
        <div className="mb-8 h-12 flex items-center justify-center">
          <p className="text-gray-700 text-sm italic font-medium transition-opacity duration-500">
            "{scientificQuotes[quoteIndex]}"
          </p>
        </div>
        
        {/* Loading Progress */}
        <div className="w-64 mx-auto">
          <div className="mb-2">
            <p className="text-gray-600 text-sm">Loading Scientific Insights...</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 text-xs text-gray-500">
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
}