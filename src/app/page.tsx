'use client';

import { ArrowRight, Shield, Clock, FileCheck, Phone, ChevronRight, Users, Award, CheckCircle2, Menu, X, Star } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Premium Navbar */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md fixed w-full top-0 z-50 shadow-sm">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900">Winning Pillar</span>
            </div>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-50 rounded-lg transition"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">Services</a>
              <a href="#about" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">About</a>
              <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">Contact</a>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-200 active:scale-95">
                Get a Quote
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100 bg-white">
              <div className="flex flex-col gap-2">
                <a href="#services" className="text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg transition">Services</a>
                <a href="#about" className="text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg transition">About</a>
                <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg transition">Contact</a>
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:shadow-lg transition-all mt-2 active:scale-95">
                  Get a Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white text-blue-700 px-4 py-2 rounded-full text-xs font-semibold mb-6 border border-blue-100 shadow-md">
              <Award className="w-4 h-4" />
              Licensed & Regulated by NBFIRA
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Life insurance that protects your family's future
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Comprehensive life coverage through our partnership with Hollard Life. Simple, transparent, and built for peace of mind.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-200 flex items-center justify-center gap-2 active:scale-95">
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white border-2 border-gray-200 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:border-gray-300 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 active:scale-95">
                <Phone className="w-5 h-5" />
                Call Us Now
              </button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
              <Award className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-sm font-semibold text-gray-700">Licensed Insurance Broker</span>
            </div>
            <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
              <Shield className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-sm font-semibold text-gray-700">Regulated by NBFIRA</span>
            </div>
            <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-sm font-semibold text-gray-700">Hollard Life Partner</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Life insurance coverage tailored to your needs
            </h2>
            <p className="text-lg text-gray-600">
              From term life to whole life policies, comprehensive solutions through Hollard Life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-600 hover:shadow-2xl transition-all duration-300 active:scale-[0.98]">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Term Life Insurance</h3>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Affordable coverage for a specific period. Ideal for young families seeking maximum protection within budget.
              </p>
              <a href="#contact" className="text-blue-600 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>

            <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-600 hover:shadow-2xl transition-all duration-300 active:scale-[0.98]">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Whole Life Insurance</h3>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Lifelong protection with cash value accumulation. Build wealth while securing your family's future.
              </p>
              <a href="#contact" className="text-blue-600 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>

            <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-600 hover:shadow-2xl transition-all duration-300 active:scale-[0.98]">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Family Protection Plans</h3>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Comprehensive coverage for your entire family. Protect multiple members under one policy with savings.
              </p>
              <a href="#contact" className="text-blue-600 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Why clients choose Winning Pillar
            </h2>
            <p className="text-lg text-gray-600">
              Decades of expertise with modern service standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Claims Processing</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Streamlined claims with dedicated support. Most claims resolved within 48-72 hours.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Expertise</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Based in Botswana with deep understanding of local regulations and needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dedicated Support</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Personal advisor available to answer questions and provide guidance whenever needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Getting covered is simple
            </h2>
            <p className="text-lg text-gray-600">
              Three straightforward steps to protection.
            </p>
          </div>

          <div className="flex flex-col gap-8 max-w-3xl mx-auto">
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl flex items-center justify-center font-bold flex-shrink-0 text-xl shadow-lg shadow-blue-600/30">
                1
              </div>
              <div className="pt-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Reach out by phone, email, or contact form. We'll schedule a consultation to discuss your needs.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl flex items-center justify-center font-bold flex-shrink-0 text-xl shadow-lg shadow-blue-600/30">
                2
              </div>
              <div className="pt-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Get Your Quote</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  We'll assess your needs and provide detailed quotes from Hollard Life. Compare and choose what fits.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl flex items-center justify-center font-bold flex-shrink-0 text-xl shadow-lg shadow-blue-600/30">
                3
              </div>
              <div className="pt-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">You're Protected</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Coverage begins immediately once approved. We handle paperwork and provide ongoing support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
              Trusted across Botswana
            </h2>
            <p className="text-base text-gray-600">Real stories from our satisfied clients</p>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:grid md:grid-cols-3 md:overflow-visible">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow flex-shrink-0 w-[85vw] sm:w-[450px] md:w-auto snap-center">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                "Professional service and quick claim processing. Winning Pillar handled everything smoothly. Highly recommended."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-blue-700 font-bold text-lg">TM</span>
                </div>
                <div>
                  <p className="text-base font-bold text-gray-900">Thabo Mokgosi</p>
                  <p className="text-sm text-gray-500">Business Owner</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow flex-shrink-0 w-[85vw] sm:w-[450px] md:w-auto snap-center">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                "Best insurance agency in Botswana. They explained all options and found perfect coverage for my family."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-blue-700 font-bold text-lg">KK</span>
                </div>
                <div>
                  <p className="text-base font-bold text-gray-900">Keabetswe Khumo</p>
                  <p className="text-sm text-gray-500">Teacher</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow flex-shrink-0 w-[85vw] sm:w-[450px] md:w-auto snap-center">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                "Transparent pricing and honest advice. They helped me find the right coverage without overselling."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-blue-700 font-bold text-lg">MS</span>
                </div>
                <div>
                  <p className="text-base font-bold text-gray-900">Mpho Setlhare</p>
                  <p className="text-sm text-gray-500">Entrepreneur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl shadow-blue-600/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                Ready to get protected?
              </h2>
              <p className="text-lg text-blue-50 mb-10 max-w-xl mx-auto">
                Schedule a free consultation. No obligation, just honest advice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 hover:shadow-xl transition-all duration-200 inline-flex items-center justify-center gap-2 active:scale-95">
                  Request Your Quote
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-200 inline-flex items-center justify-center gap-2 active:scale-95">
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-white">Winning Pillar</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-md">
                Professional life insurance solutions for Botswana. Licensed and regulated by NBFIRA, partnering with Hollard Life to protect your family's future.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white text-sm mb-4">Services</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition">Term Life Insurance</a></li>
                <li><a href="#" className="hover:text-white transition">Whole Life Insurance</a></li>
                <li><a href="#" className="hover:text-white transition">Family Protection Plans</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white text-sm mb-4">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                © 2024 Winning Pillar. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
              </div>
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
        .bg-grid-pattern {
          background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
}