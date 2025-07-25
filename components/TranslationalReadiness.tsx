"use client";

export default function TranslationalReadiness() {

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="mb-8 group cursor-pointer inline-block">
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider transition-colors duration-300 group-hover:text-gray-800">
                From Simulation to Signing
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 transition-all duration-300 group-hover:text-gray-700">
                Spectrity's Translational Readiness Agent
              </h2>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent max-w-md mx-auto transition-all duration-300 group-hover:max-w-full group-hover:via-gray-600"></div>
          </div>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            <span className="font-semibold">De-risks execution.</span> <span className="font-semibold">Accelerates partnering.</span>
          </p>
          
          <div className="mt-6 max-w-4xl mx-auto bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:bg-white/90 hover:border-indigo-300 group cursor-pointer">
            <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
              Spectrity's Translational Readiness Agent is an AI module within the Spectrity platform. It runs forward-facing simulations and commercial-fit assessments to ensure the most viable and partner-ready programs rise to the top.
            </p>
          </div>
          
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-6">
            Before a trial begins — and before a buyer sees a deck — Spectrity's AI runs deep simulations to evaluate both operational risk and partnerability.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Content Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Execution Risk Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:ring-2 hover:ring-red-400 hover:ring-opacity-50 cursor-pointer group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-100 to-orange-100 p-3 transition-all duration-300 group-hover:from-red-200 group-hover:to-orange-200 group-hover:rotate-3">
                  <svg className="w-full h-full text-red-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-red-700">Execution Risk</h3>
              </div>
              
              <p className="text-gray-700 mb-6">
                Digital twin models assess CRO capacity, CMC complexity, site readiness, and systemic disruption risk to flag trial fragility early.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600 transition-all duration-300 hover:text-gray-900 hover:translate-x-2">
                  <svg className="w-5 h-5 text-red-500 transition-transform duration-300 hover:scale-125" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>CRO capacity modeling</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 transition-all duration-300 hover:text-gray-900 hover:translate-x-2">
                  <svg className="w-5 h-5 text-red-500 transition-transform duration-300 hover:scale-125" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>CMC complexity analysis</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 transition-all duration-300 hover:text-gray-900 hover:translate-x-2">
                  <svg className="w-5 h-5 text-red-500 transition-transform duration-300 hover:scale-125" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Site readiness assessment</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 transition-all duration-300 hover:text-gray-900 hover:translate-x-2">
                  <svg className="w-5 h-5 text-red-500 transition-transform duration-300 hover:scale-125" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Disruption risk forecasting</span>
                </div>
              </div>
            </div>

            {/* Strategic Fit Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:ring-2 hover:ring-blue-400 hover:ring-opacity-50 cursor-pointer group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 p-3 transition-all duration-300 group-hover:from-blue-200 group-hover:to-purple-200 group-hover:rotate-3">
                  <svg className="w-full h-full text-blue-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-700">Strategic Fit</h3>
              </div>
              
              <p className="text-gray-700 mb-6">
                Our agent packages each asset with pharma-specific decks, term sheets, and analog-driven justifications — optimizing for modality fit, portfolio synergy, and deal appetite.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600 transition-all duration-300 hover:text-gray-900 hover:translate-x-2">
                  <svg className="w-5 h-5 text-blue-500 transition-transform duration-300 hover:scale-125" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Pharma-specific decks</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 transition-all duration-300 hover:text-gray-900 hover:translate-x-2">
                  <svg className="w-5 h-5 text-blue-500 transition-transform duration-300 hover:scale-125" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Automated term sheets</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 transition-all duration-300 hover:text-gray-900 hover:translate-x-2">
                  <svg className="w-5 h-5 text-blue-500 transition-transform duration-300 hover:scale-125" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Portfolio synergy analysis</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 transition-all duration-300 hover:text-gray-900 hover:translate-x-2">
                  <svg className="w-5 h-5 text-blue-500 transition-transform duration-300 hover:scale-125" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Deal appetite optimization</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Banner */}
          <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-[1.02] cursor-pointer group">
            <h4 className="text-2xl font-bold mb-4 transition-transform duration-300 group-hover:scale-110">The Result</h4>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-3 transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6 transition-transform duration-300 hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <span className="text-lg font-medium">Fewer trial delays</span>
              </div>
              <div className="hidden md:block w-px h-8 bg-white/30 transition-all duration-300 group-hover:h-10"></div>
              <div className="flex items-center gap-3 transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6 transition-transform duration-300 hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="text-lg font-medium">Faster BD conversations</span>
              </div>
              <div className="hidden md:block w-px h-8 bg-white/30 transition-all duration-300 group-hover:h-10"></div>
              <div className="flex items-center gap-3 transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6 transition-transform duration-300 hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 00-2 2v6a2 2 0 002 2h2a1 1 0 100-2H6V7h5v10h1a1 1 0 110 2h-1a2 2 0 01-2-2V7a2 2 0 00-2-2H4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg font-medium">Clear path from simulation to signing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}