"use client";

import Link from "next/link";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { useProgressiveLoading } from '@/hooks/useProgressiveLoading';
import LoadingScreen from '@/components/LoadingScreen';
import { 
  SpectraScanSkeleton, 
  ScientificStackSkeleton, 
  MarketInsightSkeleton, 
  TranslationalReadinessSkeleton, 
  BuildTogetherSkeleton 
} from '@/components/SkeletonLoaders';

// Lazy load Hero with priority loading
const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: true
});

// Lazy load heavy components
const RotatingEarth = dynamic(() => import("@/components/RotatingEarth"), {
  ssr: false
});

const ScientificStack = dynamic(() => import("@/components/ScientificStack"), {
  ssr: false
});

const MarketInsight = dynamic(() => import("@/components/MarketInsight"), {
  ssr: false
});

const TranslationalReadiness = dynamic(() => import("@/components/TranslationalReadiness"), {
  ssr: false
});

const BuildTogether = dynamic(() => import("@/components/BuildTogether"), {
  ssr: false
});

export default function Home() {
  const {
    isInitialLoading,
    isTransitioning,
    shouldLoadHero,
    shouldLoadSpectraScan,
    shouldLoadEvalStack,
    shouldLoadMarketInsight,
    shouldLoadTranslational,
    shouldLoadContact,
  } = useProgressiveLoading();

  // Show loading screen during initial load
  if (isInitialLoading) {
    return (
      <div className={`${isTransitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-800 ease-out`}>
        <LoadingScreen />
      </div>
    );
  }

  return (
    <main id="top" className="opacity-0 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
      {/* Hero Section */}
      {shouldLoadHero ? (
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            <div className="animate-pulse text-center">
              <div className="h-16 bg-gray-200 rounded-lg w-96 mx-auto mb-8"></div>
              <div className="h-8 bg-gray-200 rounded-lg w-80 mx-auto mb-4"></div>
              <div className="flex gap-4 justify-center">
                <div className="h-12 bg-gray-200 rounded-xl w-40"></div>
                <div className="h-12 bg-gray-200 rounded-xl w-32"></div>
              </div>
            </div>
          </div>
        }>
          <Hero />
        </Suspense>
      ) : (
        <div className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
          <div className="animate-pulse text-center">
            <div className="h-16 bg-gray-200 rounded-lg w-96 mx-auto mb-8"></div>
            <div className="h-8 bg-gray-200 rounded-lg w-80 mx-auto mb-4"></div>
            <div className="flex gap-4 justify-center">
              <div className="h-12 bg-gray-200 rounded-xl w-40"></div>
              <div className="h-12 bg-gray-200 rounded-xl w-32"></div>
            </div>
          </div>
        </div>
      )}
      
      {/* SpectraScan Agent Section with Globe */}
      {shouldLoadSpectraScan ? (
        <section id="spectrascan" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 overflow-hidden" style={{backgroundColor: '#fcfcfd'}}>
          <div className="mx-auto max-w-7xl px-2 sm:px-4">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div>
                    {/* Professional header section */}
                    <div className="mb-8 group cursor-pointer">
                      <div className="mb-4">
                        <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider transition-colors duration-300 group-hover:text-gray-800">Advanced AI Asset Discovery Platform</p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 transition-all duration-300 group-hover:text-gray-700">
                          SpectraScan Agent
                        </h2>
                      </div>
                      <div className="h-px bg-gradient-to-r from-gray-400 to-transparent max-w-md transition-all duration-300 group-hover:max-w-full group-hover:from-gray-600"></div>
                    </div>
                    
                    {/* Professional description */}
                    <div className="prose prose-sm sm:prose-lg max-w-none">
                      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                        The exponential growth in biomedical data requires a fundamental shift in research methodology. Traditional approaches cannot process the volume, velocity, and variety of modern scientific information.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4 group sm:hover:transform sm:hover:scale-105 transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 p-3 group-hover:bg-blue-200 transition-colors mx-auto sm:mx-0">
                      <svg className="w-full h-full text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">AI-Driven Discovery</h3>
                      <p className="text-gray-700 mb-2 text-sm sm:text-base">
                        The world produces <span className="font-semibold text-gray-900 bg-blue-50 px-2 py-1 rounded">10,000+ medical papers daily</span> and <span className="font-semibold text-gray-900 bg-purple-50 px-2 py-1 rounded">214M+ protein structures</span> exist in AlphaFold and many more
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 font-medium">
                        Human teams can no longer keep pace - AI is essential
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 group sm:hover:transform sm:hover:scale-105 transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-100 p-3 group-hover:bg-purple-200 transition-colors mx-auto sm:mx-0">
                      <svg className="w-full h-full text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Programmable Therapeutics</h3>
                      <p className="text-gray-700 mb-2 text-sm sm:text-base">
                        Researchers face <span className="font-semibold text-gray-900 bg-purple-50 px-2 py-1 rounded">millions of genetic variants</span> and <span className="font-semibold text-gray-900 bg-blue-50 px-2 py-1 rounded">terabytes of multi-omics data</span>
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 font-medium">
                        Manual analysis is impossible - AI enables precision at scale
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 group sm:hover:transform sm:hover:scale-105 transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-cyan-100 p-3 group-hover:bg-cyan-200 transition-colors mx-auto sm:mx-0">
                      <svg className="w-full h-full text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Bioengineering Insights</h3>
                      <p className="text-gray-700 mb-2 text-sm sm:text-base">
                        Hidden within <span className="font-semibold text-gray-900 bg-cyan-50 px-2 py-1 rounded">thousands of drug patents</span> and <span className="font-semibold text-gray-900 bg-red-50 px-2 py-1 rounded">failed clinical trials</span> lie crucial insights
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 font-medium">
                        Only AI can systematically extract these buried lessons
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-200 animate-fade-in animation-delay-700">
                  <p className="text-center text-sm sm:text-base text-gray-800 font-medium">
                    <svg className="inline-block w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    AI accelerates all traditional research methods — transforming <span className="text-red-600 font-semibold">months of manual work</span> into <span className="text-green-600 font-semibold">hours of automated analysis</span>
                  </p>
                </div>
              </div>

              {/* Right Earth Globe */}
              <div className="relative h-[400px] md:h-[500px] lg:h-[650px] xl:h-[700px] w-full flex items-center justify-center overflow-hidden">
                <Suspense fallback={
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="animate-pulse">
                      <div className="w-80 h-80 bg-blue-100 rounded-full"></div>
                    </div>
                  </div>
                }>
                  <RotatingEarth />
                </Suspense>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <SpectraScanSkeleton />
      )}

      {/* EvalStack Section */}
      {shouldLoadEvalStack ? (
        <div id="evalstack">
          <Suspense fallback={<ScientificStackSkeleton />}>
            <ScientificStack />
          </Suspense>
        </div>
      ) : (
        <ScientificStackSkeleton />
      )}

      {/* Market Insight Agent Section */}
      {shouldLoadMarketInsight ? (
        <div id="spectrainsight">
          <Suspense fallback={<MarketInsightSkeleton />}>
            <MarketInsight />
          </Suspense>
        </div>
      ) : (
        <MarketInsightSkeleton />
      )}

      {/* Translational Readiness Agent Section */}
      {shouldLoadTranslational ? (
        <div id="translational">
          <Suspense fallback={<TranslationalReadinessSkeleton />}>
            <TranslationalReadiness />
          </Suspense>
        </div>
      ) : (
        <TranslationalReadinessSkeleton />
      )}

      {/* Summary Section */}
      <section id="summary" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
            The Future of Therapeutics is Here
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
            Our AI-powered platform combines cutting-edge technology with deep biological understanding to accelerate drug discovery and development. From target identification to clinical translation, we provide the tools and insights needed to bring life-saving therapeutics to market faster than ever before.
          </p>
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Let's Build the Next Generation of Therapeutics — Together
            </h3>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
              Join the revolution in biotechnology. Whether you're a researcher, pharmaceutical company, or biotech startup, Spectrity.bio provides the AI infrastructure to transform your drug discovery pipeline.
            </p>
            <Link 
              href="#contact-form" 
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white text-base sm:text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-800"
            >
              Start Your Journey
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      {shouldLoadContact ? (
        <div id="contact">
          <Suspense fallback={<BuildTogetherSkeleton />}>
            <BuildTogether />
          </Suspense>
        </div>
      ) : (
        <BuildTogetherSkeleton />
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <p className="text-sm sm:text-base text-gray-600 font-medium text-center md:text-left">
                &copy; 2024 Spectrity.bio. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-4 md:gap-6">
              <Link href="#spectrascan" className="text-xs sm:text-sm md:text-base text-gray-600 hover:text-blue-700 font-medium transition-colors">
                SpectraScan Agent
              </Link>
              <Link href="#evalstack" className="text-xs sm:text-sm md:text-base text-gray-600 hover:text-blue-700 font-medium transition-colors">
                Spectrity's EvalStack
              </Link>
              <Link href="#spectrainsight" className="text-xs sm:text-sm md:text-base text-gray-600 hover:text-blue-700 font-medium transition-colors">
                SpectraInsight Agent
              </Link>
              <Link href="#translational" className="text-xs sm:text-sm md:text-base text-gray-600 hover:text-blue-700 font-medium transition-colors">
                Translational Readiness
              </Link>
              <Link href="#summary" className="text-xs sm:text-sm md:text-base text-gray-600 hover:text-blue-700 font-medium transition-colors">
                Explore Us
              </Link>
              <Link href="#contact-form" className="text-xs sm:text-sm md:text-base text-gray-600 hover:text-blue-700 font-medium transition-colors">
                Contact Us
              </Link>
              <a href="mailto:team@spectrity.bio" className="text-xs sm:text-sm md:text-base text-gray-600 hover:text-blue-700 font-medium transition-colors">
                team@spectrity.bio
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}