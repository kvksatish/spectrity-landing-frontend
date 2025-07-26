"use client";

// Skeleton that exactly matches SpectraScan section dimensions
export function SpectraScanSkeleton() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 overflow-hidden" style={{backgroundColor: '#fcfcfd'}}>
      <div className="mx-auto max-w-7xl px-2 sm:px-4">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content Skeleton */}
          <div className="space-y-8 animate-pulse">
            <div className="space-y-6">
              <div className="mb-8">
                <div className="h-4 bg-white rounded w-64 mb-4"></div>
                <div className="h-12 bg-white rounded w-80 mb-4"></div>
                <div className="h-px bg-white w-64"></div>
              </div>
              <div className="h-6 bg-white rounded w-full mb-4"></div>
              <div className="h-6 bg-white rounded w-5/6"></div>
            </div>
            
            <div className="space-y-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg mx-auto sm:mx-0"></div>
                  <div className="text-center sm:text-left flex-1">
                    <div className="h-6 bg-white rounded w-48 mb-2 mx-auto sm:mx-0"></div>
                    <div className="h-4 bg-white rounded w-full mb-2"></div>
                    <div className="h-4 bg-white rounded w-3/4 mx-auto sm:mx-0"></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-6 bg-white rounded-lg">
              <div className="h-4 bg-white rounded w-full mb-2"></div>
              <div className="h-4 bg-white rounded w-5/6"></div>
            </div>
          </div>

          {/* Right Globe Skeleton */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[650px] xl:h-[700px] w-full flex items-center justify-center overflow-hidden">
            <div className="w-80 h-80 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Skeleton that exactly matches ScientificStack section
export function ScientificStackSkeleton() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-pulse">
          <div className="h-12 bg-white rounded w-64 mx-auto mb-4"></div>
          <div className="h-6 bg-white rounded w-96 mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto animate-pulse">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="h-12 bg-gray-50 rounded w-12 mx-auto mb-4"></div>
              <div className="h-6 bg-gray-50 rounded w-3/4 mx-auto mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-50 rounded w-full"></div>
                <div className="h-4 bg-gray-50 rounded w-5/6"></div>
                <div className="h-4 bg-gray-50 rounded w-4/5"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-pulse">
          <div className="h-16 bg-white rounded w-full max-w-4xl mx-auto"></div>
        </div>
      </div>
    </section>
  );
}

// Skeleton that exactly matches MarketInsight section
export function MarketInsightSkeleton() {
  return (
    <section className="py-24 px-4 overflow-hidden" style={{backgroundColor: '#fcfcfd'}}>
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Globe Skeleton */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[650px] xl:h-[700px] w-full flex items-center justify-center order-2 lg:order-1 overflow-hidden">
            <div className="w-80 h-80 bg-white rounded-full animate-pulse"></div>
          </div>

          {/* Content Skeleton */}
          <div className="space-y-8 order-1 lg:order-2 animate-pulse">
            <div className="space-y-6">
              <div className="mb-8">
                <div className="h-4 bg-white rounded w-64 mb-4"></div>
                <div className="h-12 bg-white rounded w-80"></div>
                <div className="h-px bg-white w-64 mt-4"></div>
              </div>
              <div className="space-y-4">
                <div className="h-6 bg-white rounded w-full"></div>
                <div className="h-6 bg-white rounded w-5/6"></div>
              </div>
            </div>
            
            <div className="space-y-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="h-5 bg-white rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-white rounded w-full"></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-white rounded-lg">
              <div className="h-4 bg-white rounded w-full mb-2"></div>
              <div className="h-4 bg-white rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Skeleton for TranslationalReadiness section
export function TranslationalReadinessSkeleton() {
  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-pulse">
          <div className="h-12 bg-white rounded w-80 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto animate-pulse">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="h-8 bg-gray-50 rounded w-3/4 mb-6"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-50 rounded w-full"></div>
                <div className="h-4 bg-gray-50 rounded w-5/6"></div>
                <div className="h-4 bg-gray-50 rounded w-4/5"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Skeleton for BuildTogether section
export function BuildTogetherSkeleton() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="mx-auto max-w-7xl">
        <div className="animate-pulse">
          {/* Main Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="h-16 bg-white rounded w-96 mx-auto mb-8"></div>
            <div className="h-6 bg-white rounded w-80 mx-auto mb-4"></div>
            <div className="h-4 bg-white rounded w-72 mx-auto"></div>
          </div>
          
          {/* Why Spectrity Section */}
          <div className="mb-20">
            <div className="h-12 bg-white rounded w-64 mx-auto mb-12"></div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="h-6 bg-gray-50 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-50 rounded w-full"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Core Modules */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <div className="h-10 bg-white rounded w-64 mx-auto mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border shadow">
                  <div className="h-6 bg-gray-50 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-50 rounded w-full"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="h-12 bg-white rounded w-64 mx-auto mb-8"></div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-12 bg-gray-50 rounded"></div>
                ))}
                <div className="h-32 bg-gray-50 rounded"></div>
                <div className="h-12 bg-gray-50 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}