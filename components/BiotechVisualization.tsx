"use client";

import { motion } from "framer-motion";

export default function BiotechVisualization() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central Molecule Structure */}
      <div className="relative">
        {/* Core molecule */}
        <motion.div
          className="relative w-64 h-64"
          animate={{ rotate: 360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Central core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full backdrop-blur-lg border border-purple-400/30 shadow-2xl"></div>
          
          {/* Orbital atoms */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-16 h-16"
              style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(80px)`
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full backdrop-blur-md border border-cyan-300/40 shadow-lg"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-cyan-500/50 rounded-full"></div>
            </motion.div>
          ))}

          {/* Connecting bonds */}
          <svg className="absolute inset-0 w-full h-full">
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
              <motion.line
                key={i}
                x1="50%"
                y1="50%"
                x2={`${50 + 35 * Math.cos((angle * Math.PI) / 180)}%`}
                y2={`${50 + 35 * Math.sin((angle * Math.PI) / 180)}%`}
                stroke="rgba(147, 51, 234, 0.4)"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.1
                }}
              />
            ))}
          </svg>
        </motion.div>

        {/* Floating DNA sequences */}
        <div className="absolute -top-20 -right-20">
          <motion.div
            className="text-xs font-mono text-purple-500/40"
            animate={{
              y: [0, -10, 0],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ATCG-GCTA
          </motion.div>
        </div>

        <div className="absolute -bottom-20 -left-20">
          <motion.div
            className="text-xs font-mono text-blue-500/40"
            animate={{
              y: [0, 10, 0],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          >
            TGCA-CGAT
          </motion.div>
        </div>

        {/* AI Processing indicators */}
        <motion.div
          className="absolute -right-32 top-1/2 -translate-y-1/2"
          animate={{
            opacity: [0, 1, 0],
            x: [0, 20, 40]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut"
          }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-green-500 to-transparent"></div>
          </div>
        </motion.div>

        {/* Neural network connections */}
        <svg className="absolute inset-0 w-full h-full scale-150 pointer-events-none">
          <motion.path
            d="M 150 100 Q 200 150 150 200"
            fill="none"
            stroke="rgba(99, 102, 241, 0.2)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.path
            d="M 150 300 Q 100 250 150 200"
            fill="none"
            stroke="rgba(139, 92, 246, 0.2)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.5
            }}
          />
        </svg>
      </div>

      {/* Background particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400/50 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}