"use client";

import Hero from "@/components/Hero";
import ScientificStack from "@/components/ScientificStack";
import MarketInsight from "@/components/MarketInsight";
import TranslationalReadiness from "@/components/TranslationalReadiness";
import BuildTogether from "@/components/BuildTogether";
import dynamic from 'next/dynamic';

const RotatingEarth = dynamic(() => import("@/components/RotatingEarth"), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center">Loading...</div>
});

export default function Home() {
  return (
    <main>
      <Hero />
      
      {/* Features Section with Globe */}
      <section className="py-24 px-4 overflow-hidden" style={{backgroundColor: '#fcfcfd'}}>
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div>
                  {/* Professional header section */}
                  <div className="mb-8 group cursor-pointer">
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-wider transition-colors duration-300 group-hover:text-gray-800">Advanced AI Asset Discovery Platform</p>
                      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 transition-all duration-300 group-hover:text-gray-700">
                        SpectraScan Agent
                      </h2>
                    </div>
                    <div className="h-px bg-gradient-to-r from-gray-400 to-transparent max-w-md transition-all duration-300 group-hover:max-w-full group-hover:from-gray-600"></div>
                  </div>
                  
                  {/* Professional description */}
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      The exponential growth in biomedical data requires a fundamental shift in research methodology. Traditional approaches cannot process the volume, velocity, and variety of modern scientific information.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4 group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 p-3 group-hover:bg-blue-200 transition-colors">
                    <svg className="w-full h-full text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Driven Discovery</h3>
                    <p className="text-gray-700 mb-2 text-base">
                      The world produces <span className="font-semibold text-gray-900 bg-blue-50 px-2 py-1 rounded">10,000+ medical papers daily</span> and <span className="font-semibold text-gray-900 bg-purple-50 px-2 py-1 rounded">214M+ protein structures</span> exist in AlphaFold and many more
                    </p>
                    <p className="text-sm text-gray-600 font-medium">
                      Human teams can no longer keep pace - AI is essential
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-100 p-3 group-hover:bg-purple-200 transition-colors">
                    <svg className="w-full h-full text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Programmable Therapeutics</h3>
                    <p className="text-gray-700 mb-2 text-base">
                      Researchers face <span className="font-semibold text-gray-900 bg-purple-50 px-2 py-1 rounded">millions of genetic variants</span> and <span className="font-semibold text-gray-900 bg-blue-50 px-2 py-1 rounded">terabytes of multi-omics data</span>
                    </p>
                    <p className="text-sm text-gray-600 font-medium">
                      Manual analysis is impossible - AI enables precision at scale
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-cyan-100 p-3 group-hover:bg-cyan-200 transition-colors">
                    <svg className="w-full h-full text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Bioengineering Insights</h3>
                    <p className="text-gray-700 mb-2 text-base">
                      Hidden within <span className="font-semibold text-gray-900 bg-cyan-50 px-2 py-1 rounded">thousands of drug patents</span> and <span className="font-semibold text-gray-900 bg-red-50 px-2 py-1 rounded">failed clinical trials</span> lie crucial insights
                    </p>
                    <p className="text-sm text-gray-600 font-medium">
                      Only AI can systematically extract these buried lessons
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-200 animate-fade-in animation-delay-700">
                <p className="text-center text-gray-800 font-medium">
                  <svg className="inline-block w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  AI accelerates all traditional research methods — transforming <span className="text-red-600 font-semibold">months of manual work</span> into <span className="text-green-600 font-semibold">hours of automated analysis</span>
                </p>
              </div>
            </div>

            {/* Right Earth Globe */}
            <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
              <RotatingEarth />
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Evaluation Stack Section */}
      <ScientificStack />

      {/* Market Insight Agent Section */}
      <MarketInsight />

      {/* Translational Readiness Agent Section */}
      <TranslationalReadiness />

      {/* Build Together Section */}
      <BuildTogether />

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-4 bg-white">
        <div className="mx-auto max-w-6xl text-center text-gray-600">
          <p>&copy; 2024 Spectrity.bio. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}