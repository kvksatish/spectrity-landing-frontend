"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Animated rotating gradient background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #ec4899, #3b82f6)",
            backgroundSize: "400% 400%",
            animation: "gradient-rotate 15s ease infinite"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/60 via-blue-50/60 to-indigo-100/60"></div>
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
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent block">
            Decoding Biology.
          </span>
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 bg-clip-text text-transparent block">
            Accelerating Discovery.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto font-medium">
          Spectrity.bio fuses biology with AI to create programmable therapeutics—accelerating development while saving time, money, and lives.
        </p>


        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-lg shadow-lg">
            Explore Our Science
          </button>
          <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 text-lg font-semibold rounded-lg bg-white/80">
            Learn More
          </button>
        </div>
      </div>


      {/* Video Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
          onError={(e) => console.error("Video failed to load:", e)}
        >
          <source src="./landing page spirall.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/70 via-blue-50/70 to-indigo-100/70"></div>
      </div>
    </section>
  );
}