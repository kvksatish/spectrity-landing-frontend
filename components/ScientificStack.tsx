'use client'

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

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="mb-8 group cursor-pointer inline-block">
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider transition-colors duration-300 group-hover:text-gray-800">
                Custom-Tuned Models Assess Every Molecule — From Target to Therapeutic
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 transition-all duration-300 group-hover:text-gray-700">
                Spectrity's EvalStack
              </h2>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent max-w-md mx-auto transition-all duration-300 group-hover:max-w-full group-hover:via-gray-600"></div>
          </div>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            <span className="font-semibold">Eight automated stages.</span> <span className="font-semibold">From target to therapeutic.</span>
          </p>
          
          <div className="mt-6 max-w-4xl mx-auto bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:bg-white/90 hover:border-blue-300 group cursor-pointer">
            <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
              Our comprehensive in silico platform transforms drug discovery through automated AI-powered stages, from initial target identification to final therapeutic optimization — all integrated with cutting-edge molecular simulation.
            </p>
          </div>
        </div>

        {/* Hover-based Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {stackSteps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-2xl p-6 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-${step.color}-100 p-3 transition-all duration-300 group-hover:bg-${step.color}-200 group-hover:rotate-3`}>
                  <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
                    {step.icon}
                  </span>
                </div>
                <div className="text-xs font-bold text-gray-400 group-hover:text-blue-600 transition-colors">
                  Step {step.id}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                {step.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                {step.description}
              </p>
              
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className={`font-semibold text-gray-800 bg-${step.color}-50 px-2 py-1 rounded-full text-xs transition-all duration-300 group-hover:bg-${step.color}-100`}>
                  {step.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-center text-white shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-[1.02] cursor-pointer group max-w-4xl mx-auto">
          <h4 className="text-2xl font-bold mb-4 transition-transform duration-300 group-hover:scale-110">The Result</h4>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-3 transition-all duration-300 hover:scale-110">
              <svg className="w-6 h-6 transition-transform duration-300 hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-lg font-medium">Custom-tuned models</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/30 transition-all duration-300 group-hover:h-10"></div>
            <div className="flex items-center gap-3 transition-all duration-300 hover:scale-110">
              <svg className="w-6 h-6 transition-transform duration-300 hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <span className="text-lg font-medium">Assess every molecule</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/30 transition-all duration-300 group-hover:h-10"></div>
            <div className="flex items-center gap-3 transition-all duration-300 hover:scale-110">
              <svg className="w-6 h-6 transition-transform duration-300 hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-lg font-medium">Reducing years to months</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}