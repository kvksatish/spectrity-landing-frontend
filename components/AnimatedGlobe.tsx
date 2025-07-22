"use client";

import { motion } from "framer-motion";

export default function AnimatedGlobe() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* DNA Double Helix */}
      <div className="relative w-full h-full">
        <motion.div
          className="absolute inset-0"
          animate={{ rotateY: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Main DNA strands */}
          <svg className="w-full h-full" viewBox="0 0 300 500">
            {/* First strand */}
            <motion.path
              d="M 100 50 Q 150 100 200 50 T 200 150 Q 150 200 100 150 T 100 250 Q 150 300 200 250 T 200 350 Q 150 400 100 350 T 100 450"
              fill="none"
              stroke="url(#dnaGradient1)"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
            
            {/* Second strand */}
            <motion.path
              d="M 200 50 Q 150 100 100 50 T 100 150 Q 150 200 200 150 T 200 250 Q 150 300 100 250 T 100 350 Q 150 400 200 350 T 200 450"
              fill="none"
              stroke="url(#dnaGradient2)"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 0.5
              }}
            />

            {/* Base pairs */}
            {[75, 125, 175, 225, 275, 325, 375, 425].map((y, i) => (
              <motion.line
                key={i}
                x1={100 + Math.sin((y / 50) * Math.PI) * 50}
                y1={y}
                x2={200 - Math.sin((y / 50) * Math.PI) * 50}
                y2={y}
                stroke="rgba(147, 51, 234, 0.3)"
                strokeWidth="2"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 2
                }}
              />
            ))}

            {/* Gradient definitions */}
            <defs>
              <linearGradient id="dnaGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
                <stop offset="50%" stopColor="rgba(147, 51, 234, 0.8)" />
                <stop offset="100%" stopColor="rgba(236, 72, 153, 0.8)" />
              </linearGradient>
              <linearGradient id="dnaGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(236, 72, 153, 0.8)" />
                <stop offset="50%" stopColor="rgba(147, 51, 234, 0.8)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.8)" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Floating molecules */}
        <motion.div
          className="absolute top-10 right-10 w-20 h-20"
          animate={{
            y: [0, -20, 0],
            rotate: 360
          }}
          transition={{
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 10, repeat: Infinity, ease: "linear" }
          }}
        >
          <div className="relative w-full h-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-purple-500/30 rounded-full blur-sm"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500/40 rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500/40 rounded-full"></div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-500/40 rounded-full"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-500/40 rounded-full"></div>
          </div>
        </motion.div>

        {/* Data particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 15}%`
            }}
            animate={{
              y: [0, -300, -600],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeOut"
            }}
          />
        ))}

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 blur-3xl"></div>
      </div>
    </div>
  );
}