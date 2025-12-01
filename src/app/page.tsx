'use client';

import { ArrowRight, Shield, Clock, FileCheck, Phone, ChevronRight, Users, Award, CheckCircle2, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile-First Navbar */}
      <nav className="border-b border-gray-200 bg-white fixed w-full top-0 z-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-600" />
              <span className="text-lg font-semibold text-gray-900">Winning Pillar</span>
            </div>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Services</a>
              <a href="#about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">About</a>
              <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Contact</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                Get a Quote
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col gap-3">
                <a href="#services" className="text-sm font-medium text-gray-600 hover:text-gray-900 py-2">Services</a>
                <a href="#about" className="text-sm font-medium text-gray-600 hover:text-gray-900 py-2">About</a>
                <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 py-2">Contact</a>
                <button className="bg-blue-600 text-white px-4 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition w-full mt-2">
                  Get a Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Mobile Optimized */}
      <section className="pt-24 pb-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white text-blue-700 px-4 py-2 rounded-lg text-xs font-medium mb-6 border border-blue-200 shadow-sm">
              <Award className="w-4 h-4" />
              Licensed & Regulated by NBFIRA
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Life insurance that protects your family's future
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
              Comprehensive life coverage through our partnership with Hollard Life. Simple, transparent, and built for peace of mind.
            </p>
            
            {/* Mobile-First CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 active:scale-98">
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-xl font-medium hover:border-gray-400 transition flex items-center justify-center gap-2 active:scale-98">
                <Phone className="w-5 h-5" />
                Call Us Now
              </button>
            </div>
          </div>

          {/* Trust Indicators - Mobile Stack */}
          <div className="mt-12 flex flex-col sm:flex-row sm:flex-wrap gap-4 max-w-4xl mx-auto justify-center">
            <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl border border-gray-200 shadow-sm">
              <Award className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-sm font-medium text-gray-700">Licensed Insurance Broker</span>
            </div>
            <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl border border-gray-200 shadow-sm">
              <Shield className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-sm font-medium text-gray-700">Regulated by NBFIRA</span>
            </div>
            <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl border border-gray-200 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-sm font-medium text-gray-700">Hollard Life Partner</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Card Stack on Mobile */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Life insurance coverage tailored to your needs
            </h2>
            <p className="text-lg text-gray-600">
              From term life to whole life policies, comprehensive solutions through Hollard Life.
            </p>
          </div>

          <div className="flex flex-col gap-6 max-w-5xl mx-auto">
            {/* Term Life Insurance */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-600 hover:shadow-xl transition active:scale-[0.99]">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Term Life Insurance</h3>
                  <p className="text-base text-gray-600 mb-4 leading-relaxed">
                    Affordable coverage for a specific period. Ideal for young families seeking maximum protection within budget.
                  </p>
                  <a href="#contact" className="text-blue-600 font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More
                    <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Whole Life Insurance */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-600 hover:shadow-xl transition active:scale-[0.99]">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Whole Life Insurance</h3>
                  <p className="text-base text-gray-600 mb-4 leading-relaxed">
                    Lifelong protection with cash value accumulation. Build wealth while securing your family's future.
                  </p>
                  <a href="#contact" className="text-blue-600 font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More
                    <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Family Protection */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-600 hover:shadow-xl transition active:scale-[0.99]">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Protection Plans</h3>
                  <p className="text-base text-gray-600 mb-4 leading-relaxed">
                    Comprehensive coverage for your entire family. Protect multiple members under one policy with savings.
                  </p>
                  <a href="#contact" className="text-blue-600 font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More
                    <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Mobile Optimized */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why clients choose Winning Pillar
            </h2>
            <p className="text-lg text-gray-600">
              Decades of expertise with modern service standards.
            </p>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Claims Processing</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Streamlined claims with dedicated support. Most claims resolved within 48-72 hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Expertise</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Based in Botswana with deep understanding of local regulations and needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Dedicated Support</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Personal advisor available to answer questions and provide guidance whenever needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process - Mobile Card Flow */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Getting covered is simple
            </h2>
            <p className="text-lg text-gray-600">
              Three straightforward steps to protection.
            </p>
          </div>

          <div className="flex flex-col gap-8 max-w-3xl mx-auto">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0 text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Reach out by phone, email, or contact form. We'll schedule a consultation to discuss your needs.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0 text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Get Your Quote</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  We'll assess your needs and provide detailed quotes from Hollard Life. Compare and choose what fits.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0 text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">You're Protected</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Coverage begins immediately once approved. We handle paperwork and provide ongoing support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Mobile Horizontal Scroll */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Trusted across Botswana
            </h2>
            <p className="text-base text-gray-600">Swipe to see more reviews</p>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex-shrink-0 w-[85vw] sm:w-[450px] snap-center">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                "Professional service and quick claim processing. Winning Pillar handled everything smoothly. Highly recommended."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="text-base font-semibold text-gray-900">Thabo Mokgosi</p>
                  <p className="text-sm text-gray-500">Business Owner</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex-shrink-0 w-[85vw] sm:w-[450px] snap-center">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                "Best insurance agency in Botswana. They explained all options and found perfect coverage for my family."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="text-base font-semibold text-gray-900">Keabetswe Khumo</p>
                  <p className="text-sm text-gray-500">Teacher</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex-shrink-0 w-[85vw] sm:w-[450px] snap-center">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                "Transparent pricing and honest advice. They helped me find the right coverage without overselling."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="text-base font-semibold text-gray-900">Mpho Setlhare</p>
                  <p className="text-sm text-gray-500">Entrepreneur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Mobile Bottom Sheet Style */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-blue-600 rounded-3xl p-10 text-center text-white shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to get protected?
            </h2>
            <p className="text-lg text-blue-50 mb-8 max-w-xl mx-auto">
              Schedule a free consultation. No obligation, just honest advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-medium hover:bg-blue-50 transition inline-flex items-center justify-center gap-2 active:scale-98 shadow-lg">
                Request Your Quote
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition inline-flex items-center justify-center gap-2 active:scale-98">
                <Phone className="w-5 h-5" />
                Call Us Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Mobile Simplified */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-6 h-6 text-blue-400" />
                <span className="text-lg font-semibold text-white">Winning Pillar</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Professional life insurance solutions for Botswana.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white text-sm mb-3">Services</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition">Term Life</a></li>
                  <li><a href="#" className="hover:text-white transition">Whole Life</a></li>
                  <li><a href="#" className="hover:text-white transition">Family Plans</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm mb-3">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition">Contact</a></li>
                  <li><a href="#" className="hover:text-white transition">Careers</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-xs text-gray-500 text-center mb-3">
              © 2024 Winning Pillar. All rights reserved.
            </p>
            <div className="flex justify-center gap-4 text-xs">
              <a href="#" className="text-gray-400 hover:text-white transition">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}