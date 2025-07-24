'use client'

import { useState } from 'react'

const stackSteps = [
  {
    id: 1,
    icon: '🎯',
    title: 'Target Identification & Validation',
    description: 'We identify disease-relevant proteins through literature mining, genomics, and proteomics. 3D structures are predicted using experimental data (X-ray, NMR, cryo-EM) or in silico methods like homology modeling and ab initio folding.',
    highlight: 'X-ray, NMR, cryo-EM',
    color: 'blue'
  },
  {
    id: 2,
    icon: '🧬',
    title: 'Binding Site Analysis',
    description: 'Our AI analyzes structural cavities, interaction hotspots, and allosteric sites — mapping surface properties such as electrostatics and hydrophobicity.',
    highlight: 'structural cavities & hotspots',
    color: 'purple'
  },
  {
    id: 3,
    icon: '🧪',
    title: 'Virtual Screening & Molecular Docking',
    description: 'We dock millions of compounds or fragments using structure-based and AI-assisted methods (deep learning, GNNs), scoring each for predicted affinity and interaction fit.',
    highlight: 'millions of compounds',
    color: 'cyan'
  },
  {
    id: 4,
    icon: '🧷',
    title: 'Binding Affinity & Pose Prediction',
    description: 'Molecular dynamics simulations model flexibility and predict pose stability and binding energy. Ensemble ML scoring ensures pose reliability across environments.',
    highlight: 'molecular dynamics',
    color: 'blue'
  },
  {
    id: 5,
    icon: '☣️',
    title: 'In Silico Toxicity Assessment',
    description: 'Our models flag genotoxicity, cardiotoxicity, hepatotoxicity, and other risks using chemical fingerprints and deep-learning-based classifiers (e.g., ADMETLab 3.0).',
    highlight: 'ADMETLab 3.0',
    color: 'red'
  },
  {
    id: 6,
    icon: '💊',
    title: 'ADME / Pharmacokinetics Modeling',
    description: 'We simulate how each molecule behaves in the body — absorption, distribution, metabolism, and excretion — with PBPK/QSP frameworks and multitask ML trained on pharmacological data.',
    highlight: 'PBPK/QSP frameworks',
    color: 'purple'
  },
  {
    id: 7,
    icon: '🔁',
    title: 'Iterative Compound Optimization',
    description: 'Compounds are refined using de novo generation, analog growing, and fragment linking — optimizing for affinity, safety, and PK with every cycle.',
    highlight: 'de novo generation',
    color: 'cyan'
  },
  {
    id: 8,
    icon: '🧩',
    title: 'Model Orchestration & Data Infrastructure',
    description: 'All processes are automated through orchestrated pipelines, integrated with lab data, and governed by FAIR data principles for reproducibility and continuous learning.',
    highlight: 'FAIR data principles',
    color: 'blue'
  }
]

export default function ScientificStack() {
  const [activeStep, setActiveStep] = useState<number>(1)

  return (
    <section className="py-24 px-4 overflow-hidden" style={{backgroundColor: '#fcfcfd'}}>
      <div className="mx-auto max-w-7xl">
        {/* Header - Matching SpectraScan Agent style */}
        <div className="space-y-8 max-w-4xl">
          <div className="space-y-6">
            <div>
              {/* Professional header section */}
              <div className="mb-8 group cursor-pointer">
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider transition-colors duration-300 group-hover:text-gray-800">
                    From Target to Therapeutic — Fully In Silico
                  </p>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 transition-all duration-300 group-hover:text-gray-700">
                    🧠 Spectrity's Scientific Evaluation Stack
                  </h2>
                </div>
                <div className="h-px bg-gradient-to-r from-gray-400 to-transparent max-w-md transition-all duration-300 group-hover:max-w-full group-hover:from-gray-600"></div>
              </div>
              
              {/* Professional description */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Our comprehensive in silico platform transforms drug discovery through eight automated stages, from initial target identification to final therapeutic optimization — all powered by cutting-edge AI and molecular simulation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-16 mb-12 max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-1 bg-gray-200 rounded-full"></div>
            </div>
            <div className="absolute inset-0 flex items-center">
              <div 
                className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500"
                style={{ width: `${(activeStep / 8) * 100}%` }}
              ></div>
            </div>
            <div className="relative flex justify-between">
              {stackSteps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                    activeStep >= step.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-110'
                      : 'bg-white border-2 border-gray-300 text-gray-500 hover:border-gray-400'
                  }`}
                >
                  {step.id}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Step Display */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className={`w-20 h-20 rounded-2xl bg-${stackSteps[activeStep - 1].color}-100 p-5 flex items-center justify-center`}>
                  <span className="text-3xl">{stackSteps[activeStep - 1].icon}</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-4">
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    Step {activeStep} of 8
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-1">
                    {stackSteps[activeStep - 1].title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {stackSteps[activeStep - 1].description}
                </p>
                <div className="inline-flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className={`font-semibold text-gray-900 bg-${stackSteps[activeStep - 1].color}-50 px-3 py-1 rounded-full text-sm`}>
                    {stackSteps[activeStep - 1].highlight}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {stackSteps.map((step, index) => (
            <div
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                activeStep === step.id
                  ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-300 shadow-md transform scale-105'
                  : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{step.icon}</span>
                <span className={`text-sm font-bold ${
                  activeStep === step.id ? 'text-blue-600' : 'text-gray-400'
                }`}>
                  Step {step.id}
                </span>
              </div>
              <h4 className={`text-sm font-semibold ${
                activeStep === step.id ? 'text-gray-900' : 'text-gray-700'
              }`}>
                {step.title}
              </h4>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-12">
          <button
            onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
            disabled={activeStep === 1}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeStep === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            Previous Step
          </button>
          <button
            onClick={() => setActiveStep(Math.min(8, activeStep + 1))}
            disabled={activeStep === 8}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeStep === 8
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg'
            }`}
          >
            Next Step
          </button>
        </div>

        {/* Bottom Note */}
        <div className="mt-16 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-200 max-w-3xl mx-auto">
          <p className="text-center text-gray-800 font-medium">
            <svg className="inline-block w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            All processes are <span className="text-blue-600 font-semibold">automated</span> and <span className="text-purple-600 font-semibold">AI-powered</span> for maximum efficiency
          </p>
        </div>
      </div>
    </section>
  )
}