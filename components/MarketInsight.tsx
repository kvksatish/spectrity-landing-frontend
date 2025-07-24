'use client'

import dynamic from 'next/dynamic'

const MarketInsightGlobe = dynamic(() => import('./MarketInsightGlobe'), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center">Loading...</div>
})

const insightFactors = [
  {
    icon: '🏥',
    title: 'Unmet clinical need',
    description: 'AI analyzes patient populations, disease burden, and treatment gaps to quantify the real demand',
    color: 'blue'
  },
  {
    icon: '🎯',
    title: 'Competitive landscape',
    description: 'Maps existing therapies, pipeline assets, and market dynamics to identify strategic positioning',
    color: 'purple'
  },
  {
    icon: '🛡️',
    title: 'IP and patent positioning',
    description: 'Evaluates freedom to operate, patent strength, and exclusivity periods for maximum protection',
    color: 'cyan'
  },
  {
    icon: '💰',
    title: 'Reimbursement pathways',
    description: 'Assesses payer landscapes, pricing precedents, and access strategies across key markets',
    color: 'green'
  },
  {
    icon: '🔬',
    title: 'Clinical development complexity',
    description: 'Predicts trial design requirements, timeline, costs, and regulatory hurdles for efficient planning',
    color: 'orange'
  },
  {
    icon: '📊',
    title: 'Market size and projected financials',
    description: 'Models revenue potential, market penetration, and ROI scenarios with data-driven precision',
    color: 'red'
  }
]

export default function MarketInsight() {
  return (
    <section className="py-24 px-4 overflow-hidden" style={{backgroundColor: '#fcfcfd'}}>
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Globe Visualization */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[650px] xl:h-[700px] w-full flex items-center justify-center order-2 lg:order-1 overflow-hidden">
            <MarketInsightGlobe />
          </div>

          {/* Right Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <div>
                {/* Professional header section */}
                <div className="mb-8 group cursor-pointer">
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider transition-colors duration-300 group-hover:text-gray-800">
                      Finds not just what works — but what wins
                    </p>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 transition-all duration-300 group-hover:text-gray-700">
                      SpectraInsight Agent
                    </h2>
                  </div>
                  <div className="h-px bg-gradient-to-r from-gray-400 to-transparent max-w-md transition-all duration-300 group-hover:max-w-full group-hover:from-gray-600"></div>
                </div>
                
                {/* Professional description */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    After identifying scientifically viable targets, Spectrity evaluates their real-world potential through our Market Insight Agent.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    This AI module uncovers the strongest commercial signals and surfaces the most promising opportunities based on:
                  </p>
                </div>
              </div>
            </div>
            
            {/* Insight Factors */}
            <div className="space-y-4">
              {insightFactors.map((factor, index) => (
                <div 
                  key={index}
                  className="flex gap-4 group hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-${factor.color}-100 p-3 group-hover:bg-${factor.color}-200 transition-colors flex items-center justify-center`}>
                    <span className="text-xl">{factor.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{factor.title}</h3>
                    <p className="text-sm text-gray-600">{factor.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bottom highlight */}
            <div className="mt-8 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-200">
              <p className="text-center text-gray-800 font-medium">
                <svg className="inline-block w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Each candidate is scored not just for its <span className="text-blue-600 font-semibold">biology</span>, but for its <span className="text-purple-600 font-semibold">business viability</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}