import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Trusted Insurance Partner
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Protecting what matters most to you and your family
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Get a Quote
              </Link>
              <Link 
                href="/services" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Insurance Solutions We Offer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-3">Home Insurance</h3>
              <p className="text-gray-600 mb-4">
                Protect your home and belongings from unexpected events.
              </p>
              <Link href="/services" className="text-blue-600 font-semibold hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold mb-3">Auto Insurance</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive coverage for your vehicle and peace of mind on the road.
              </p>
              <Link href="/services" className="text-blue-600 font-semibold hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-3">Life Insurance</h3>
              <p className="text-gray-600 mb-4">
                Secure your family's financial future with our life insurance plans.
              </p>
              <Link href="/services" className="text-blue-600 font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Winning Pillar?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="font-bold mb-2">Trusted Locally</h3>
              <p className="text-gray-600">Serving Botswana families and businesses</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="font-bold mb-2">Fast Claims</h3>
              <p className="text-gray-600">Quick and efficient claim processing</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="font-bold mb-2">Competitive Rates</h3>
              <p className="text-gray-600">Best value for comprehensive coverage</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="font-bold mb-2">Personal Service</h3>
              <p className="text-gray-600">Dedicated agents who care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Protected?</h2>
          <p className="text-xl mb-8">Contact us today for a free consultation and quote</p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Contact Us Now
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}