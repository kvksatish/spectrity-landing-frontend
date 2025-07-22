export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-16">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative z-10 max-w-5xl">
          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-7xl">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Spectrity
            </span>
          </h1>
          <p className="mb-8 text-lg text-gray-300 sm:text-xl">
            Empowering your digital transformation with cutting-edge solutions
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 font-semibold transition-transform hover:scale-105">
              Get Started
            </button>
            <button className="rounded-lg border border-gray-700 px-8 py-3 font-semibold transition-colors hover:border-gray-500 hover:bg-gray-900">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold">Our Features</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 backdrop-blur">
              <div className="mb-4 h-12 w-12 rounded-lg bg-blue-500/20 p-3">
                <svg className="h-full w-full text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Lightning Fast</h3>
              <p className="text-gray-400">
                Experience blazing-fast performance with our optimized infrastructure
              </p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 backdrop-blur">
              <div className="mb-4 h-12 w-12 rounded-lg bg-purple-500/20 p-3">
                <svg className="h-full w-full text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Secure by Design</h3>
              <p className="text-gray-400">
                Your data is protected with enterprise-grade security measures
              </p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 backdrop-blur">
              <div className="mb-4 h-12 w-12 rounded-lg bg-green-500/20 p-3">
                <svg className="h-full w-full text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Cloud Native</h3>
              <p className="text-gray-400">
                Built for the cloud with scalability and reliability in mind
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold">Ready to Get Started?</h2>
          <p className="mb-8 text-lg text-gray-300">
            Join thousands of satisfied customers who trust Spectrity
          </p>
          <button className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-10 py-4 text-lg font-semibold transition-transform hover:scale-105">
            Start Your Journey
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4">
        <div className="mx-auto max-w-6xl text-center text-gray-400">
          <p>&copy; 2024 Spectrity. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}