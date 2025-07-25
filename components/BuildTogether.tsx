"use client";

import { useState } from "react";

export default function BuildTogether() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [contactMethod, setContactMethod] = useState("email");
  const [phone, setPhone] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const interestOptions = [
    "Programmable Therapies",
    "AI-First R&D",
    "Novel Therapeutic Modalities",
    "Drug Discovery Partnerships",
    "Platform Licensing",
    "Investment Opportunities"
  ];

  const handleInterestToggle = (interest: string) => {
    setInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          contactMethod,
          interests,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      
      // Reset form
      setEmail("");
      setName("");
      setPhone("");
      setInterests([]);
      setMessage("");
      setSubmitStatus("success");
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };
  const coreModules = [
    {
      name: "SpectraScan Agent",
      description: "AI-driven discovery across 10,000+ daily papers and 214M+ protein structures",
      navigateTo: "#spectrascan"
    },
    {
      name: "Spectrity's EvalStack", 
      description: "Multi-agent system for evaluating biological viability, chemical feasibility, and clinical translatability",
      navigateTo: "#evalstack"
    },
    {
      name: "SpectraInsight Agent",
      description: "Market intelligence analyzing deal flow, competitor pipelines, and strategic opportunities",
      navigateTo: "#spectrainsight"
    },
    {
      name: "Spectrity's Translational Readiness Agent",
      description: "Forward-facing simulations assessing execution risk and commercial fit",
      navigateTo: "#translational"
    }
  ];

  const handleModuleClick = (navigateTo: string) => {
    const element = document.querySelector(navigateTo);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="mx-auto max-w-7xl">
        {/* Main Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 px-4 sm:px-0">
            🤝 Let's Build the Next Generation of Therapeutics — Together
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            We're looking to collaborate with scientists, biotech teams, and pharma innovators who want to move faster — with clarity, confidence, and computational precision.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto mt-4 px-4 sm:px-0">
            If you're exploring programmable therapies, AI-first R&D, or novel therapeutic modalities — we'd love to connect.
          </p>
        </div>

        <div className="border-t border-gray-200 my-16"></div>

        {/* Smarter Way Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              🧠 A Smarter Way to Discover
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Spectrity isn't just using AI — we've architected a modular intelligence platform that learns, adapts, and reasons across biology, chemistry, and clinical translation.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 my-16"></div>

        {/* Why Spectrity Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            🔍 Why Spectrity's Intelligence is Purpose-Built
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="flex items-start gap-4">
                <span className="text-3xl">⚙️</span>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    Engineered for Real Drug Development
                  </h4>
                  <p className="text-gray-600">
                    Our models are trained for therapeutic workflows — not retrofitted from generic AI.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🧩</span>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">
                    Modular Intelligence, Not One-Size-Fits-All
                  </h4>
                  <p className="text-gray-600">
                    Each module is specialized, interpretable, and optimized for a distinct layer of drug discovery.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🧠</span>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                    Expert Oversight at Every Layer
                  </h4>
                  <p className="text-gray-600">
                    Human-in-the-loop design ensures every decision can be explained, refined, and trusted.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🧪</span>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-700 transition-colors">
                    Resilient Learning on Imperfect Data
                  </h4>
                  <p className="text-gray-600">
                    Our system is built to thrive even when labels are sparse — leveraging synthetic data and failure-mode learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 my-16"></div>

        {/* Core Modules Summary */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4 px-4 sm:px-0">
            🔬 Spectrity's Core Modules
          </h3>
          <p className="text-center text-sm sm:text-base text-gray-600 mb-8 sm:mb-12 px-4 sm:px-0">
            <span className="inline-flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
              Click any module to explore its capabilities in detail
            </span>
          </p>
          
          <div id="contact-form" className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {coreModules.map((module, index) => (
              <div 
                key={index}
                onClick={() => handleModuleClick(module.navigateTo)}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group cursor-pointer active:scale-95 hover:scale-105"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {module.name}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {module.description}
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-all duration-300 group-hover:translate-x-1 flex-shrink-0 ml-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 my-16"></div>

        {/* Final CTA */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            🚀 We Don't Just Discover Faster — We Discover Smarter
          </h3>
          <p className="text-xl text-gray-700 mb-2">
            Let's reduce friction, not just timelines.
          </p>
          <p className="text-xl text-gray-700 mb-12">
            Let's validate earlier, fail cheaper, and succeed with clarity.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              Let's Start a Conversation
            </h3>
            <p className="text-gray-600">
              Tell us how you'd like to explore the future of therapeutics together
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-gray-200">
            {/* Name Field */}
            <div className="mb-8">
              <label htmlFor="name" className="block text-base font-semibold text-gray-900 mb-3">
                What should we call you? *
              </label>
              <input
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg text-gray-900 placeholder-gray-400"
                placeholder="Dr. Sarah Chen"
              />
            </div>

            {/* Contact Preference */}
            <div className="mb-8">
              <label className="block text-base font-semibold text-gray-900 mb-3">
                How would you prefer we reach out? *
              </label>
              <div className="flex flex-wrap gap-3 mb-4">
                <button
                  type="button"
                  onClick={() => setContactMethod("email")}
                  className={`px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                    contactMethod === "email"
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md scale-105"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200 hover:shadow-md"
                  }`}
                >
                  Email
                </button>
                <button
                  type="button"
                  onClick={() => setContactMethod("phone")}
                  className={`px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                    contactMethod === "phone"
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md scale-105"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200 hover:shadow-md"
                  }`}
                >
                  Phone
                </button>
                <button
                  type="button"
                  onClick={() => setContactMethod("both")}
                  className={`px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                    contactMethod === "both"
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md scale-105"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200 hover:shadow-md"
                  }`}
                >
                  Either works
                </button>
              </div>
              
              <div className="mt-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg text-gray-900 placeholder-gray-400"
                  placeholder="sarah.chen@biotech.com"
                />
                <p className="text-xs text-gray-500 mt-1">We'll always need your email to send you updates</p>
              </div>
              
              {(contactMethod === "phone" || contactMethod === "both") && (
                <div className="mt-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number {contactMethod === "phone" ? "*" : "(Optional)"}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required={contactMethod === "phone"}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg text-gray-900 placeholder-gray-400"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              )}
            </div>

            {/* Interest Areas */}
            <div className="mb-8">
              <label className="block text-base font-semibold text-gray-900 mb-3">
                What brings you to Spectrity? (Select all that apply)
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {interestOptions.map((interest) => (
                  <label
                    key={interest}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                      interests.includes(interest)
                        ? "border-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-md"
                        : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={interests.includes(interest)}
                      onChange={() => handleInterestToggle(interest)}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    />
                    <span className={`font-medium text-sm sm:text-base ${
                      interests.includes(interest) ? "text-gray-900" : "text-gray-800"
                    }`}>{interest}</span>
                  </label>
                ))}
              </div>
            </div>
            
            {/* Message */}
            <div className="mb-8">
              <label htmlFor="message" className="block text-base font-semibold text-gray-900 mb-3">
                Anything specific you'd like to discuss?
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-lg text-gray-900 placeholder-gray-400"
                placeholder="Share your vision, challenges, or questions..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 sm:py-4 px-6 rounded-xl font-semibold text-white text-base sm:text-lg transition-all duration-300 ${
                isSubmitting 
                  ? "bg-gray-400 cursor-not-allowed" 
                  : "bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] shadow-lg"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending your message...
                </span>
              ) : (
                "Start the Conversation"
              )}
            </button>
            
            {submitStatus === "success" && (
              <div className="mt-6 p-5 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center">
                <p className="font-semibold mb-1">Perfect! We've received your message.</p>
                <p className="text-sm">Expect to hear from us within 24 hours.</p>
              </div>
            )}
            
            {submitStatus === "error" && (
              <div className="mt-6 p-5 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center">
                <p className="font-semibold mb-1">Oops! Something went wrong.</p>
                <p className="text-sm">Please try again or email us directly at contact@spectrity.bio</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}