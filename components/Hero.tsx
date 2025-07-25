"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Reduce speed to 50%
    }
  }, []);
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Animated rotating gradient background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #ec4899, #3b82f6)",
            backgroundSize: "400% 400%",
            animation: "gradient-rotate 15s ease infinite"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/10 via-blue-50/10 to-indigo-100/10"></div>
      </div>
      
      <style jsx>{`
        @keyframes gradient-rotate {
          0% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-blue-800 via-purple-800 to-cyan-700 bg-clip-text text-transparent block">
            Decoding Biology.
          </span>
          <span className="bg-gradient-to-r from-purple-800 via-pink-700 to-cyan-600 bg-clip-text text-transparent block">
            Accelerating Discovery.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-900 mb-12 max-w-4xl mx-auto font-medium">
          Spectrity.bio fuses biology with AI to create programmable therapeutics—accelerating development while saving time, money, and lives.
        </p>


        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-lg shadow-lg">
            Explore Our Science
          </button>
          <button className="px-8 py-4 border-2 border-gray-700 text-gray-900 text-lg font-semibold rounded-lg bg-white/90">
            Learn More
          </button>
        </div>
      </div>


      {/* Video Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
          onError={(e) => console.error("Video failed to load:", e)}
        >
          <source src="./landing page spirall.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/70 via-blue-50/70 to-indigo-100/70"></div>
      </div>
    </section>
  );
}