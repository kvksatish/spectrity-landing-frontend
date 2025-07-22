import Hero from "@/components/Hero";
import BiotechVisualization from "@/components/BiotechVisualization";

export default function Home() {
  return (
    <main>
      <Hero />
      
      {/* Features Section with Globe */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Science</h2>
                <p className="text-xl text-gray-600">
                  Combining cutting-edge AI with advanced biology to revolutionize therapeutic discovery
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 p-3">
                    <svg className="w-full h-full text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Driven Discovery</h3>
                    <p className="text-gray-600">
                      Advanced machine learning algorithms accelerate therapeutic discovery and optimization
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-100 p-3">
                    <svg className="w-full h-full text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Programmable Therapeutics</h3>
                    <p className="text-gray-600">
                      Design molecules with precise targeting and controlled therapeutic effects
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-cyan-100 p-3">
                    <svg className="w-full h-full text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Bioengineering</h3>
                    <p className="text-gray-600">
                      Integrate biological systems with computational design for breakthrough innovations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Biotech Visualization */}
            <div className="relative h-[500px] lg:h-[600px]">
              <BiotechVisualization />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900">Partner with Us</h2>
          <p className="mb-8 text-lg text-gray-700">
            Join us in revolutionizing healthcare through intelligent molecular design
          </p>
          <button className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-10 py-4 text-lg font-semibold text-white transition-transform hover:scale-105 shadow-lg">
            Start Collaboration
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-4 bg-white">
        <div className="mx-auto max-w-6xl text-center text-gray-600">
          <p>&copy; 2024 Spectrity.bio. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}