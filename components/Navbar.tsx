"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import navbarData from "@/data/navbar.json";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { logo, navigation, cta, styles } = navbarData;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : ''
    }`}>
      <div className={styles.container}>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={logo.href} className="flex items-center space-x-3">
              <Image 
                src={logo.image} 
                alt="Spectrity Logo" 
                width={48} 
                height={48}
                className="h-12 w-12"
                priority
              />
              <Image 
                src={logo.title} 
                alt={logo.text}
                width={240} 
                height={64}
                className="h-20 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link 
                  key={item.id} 
                  href={item.href} 
                  className={styles.navLink.base}
                >
                  <span className="relative">
                    {item.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              ))}
              <Link href={cta.href} className={`ml-4 ${cta.style.base}`}>
                {cta.label}
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={styles.mobileButton}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className={styles.mobileMenu}>
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={styles.navLink.mobile}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href={cta.href} 
              className={cta.style.mobile}
              onClick={() => setIsMenuOpen(false)}
            >
              {cta.label}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}