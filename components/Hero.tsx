"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);

  useEffect(() => {
    // Detect low-end devices
    const checkDeviceCapabilities = () => {
      const connection = (navigator as any).connection;
      const cores = navigator.hardwareConcurrency || 1;
      const memory = (navigator as any).deviceMemory || 1;
      
      // Consider it low-end if: slow connection, fewer cores, or low memory
      const isSlowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');
      const isLowCores = cores < 4;
      const isLowMemory = memory < 4;
      
      return isSlowConnection || isLowCores || isLowMemory;
    };

    setIsLowEndDevice(checkDeviceCapabilities());
    
    // Only load video on high-end devices and after initial render
    if (!checkDeviceCapabilities()) {
      const timer = setTimeout(() => setShouldLoadVideo(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (videoRef.current && shouldLoadVideo) {
      videoRef.current.playbackRate = 0.7;
    }
  }, [shouldLoadVideo]);
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Animated rotating gradient background - reduced on low-end devices */}
      <div className="absolute inset-0">
        <div 
          className={`absolute inset-0 ${isLowEndDevice ? 'opacity-5' : 'opacity-10'}`}
          style={{
            background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #ec4899, #3b82f6)",
            backgroundSize: "400% 400%",
            animation: isLowEndDevice ? "gradient-rotate 30s ease infinite" : "gradient-rotate 15s ease infinite"
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
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight">
          <span className="bg-gradient-to-r from-blue-800 via-purple-800 to-cyan-700 bg-clip-text text-transparent block">
            Decoding Biology.
          </span>
          <span className="bg-gradient-to-r from-purple-800 via-pink-700 to-cyan-600 bg-clip-text text-transparent block">
            Accelerating Discovery.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900 mb-8 sm:mb-12 max-w-4xl mx-auto font-medium px-4 sm:px-0">
          Spectrity.bio fuses biology with AI to create programmable therapeutics—accelerating development while saving time, money, and lives.
        </p>


        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0">
          <Link href="#spectrascan" className="group relative w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white text-base sm:text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-800 overflow-hidden">
            <span className="relative z-10">Explore Our Science</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          <Link href="#contact" className="group relative w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-white/95 backdrop-blur-sm text-gray-900 text-base sm:text-lg font-semibold rounded-xl border-2 border-gray-300 hover:border-transparent transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get Started
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>


      {/* Video Background - Only for high-end devices */}
      {!isLowEndDevice && shouldLoadVideo && (
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
            onError={(e) => console.error("Video failed to load:", e)}
            preload="none"
          >
            <source src="https://spectrity.bio/public/landing%20page%20spirall.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/70 via-blue-50/70 to-indigo-100/70"></div>
        </div>
      )}
      
      {/* Fallback static background for low-end devices */}
      {isLowEndDevice && (
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
      )}
    </section>
  );
}