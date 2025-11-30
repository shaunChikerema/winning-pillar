import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Winning Pillar</h1>
          <p className="text-xl text-blue-100">Your trusted insurance partner in Botswana</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-700 text-lg mb-4">
            [Company story placeholder - your uncle will provide this]
          </p>
          <p className="text-gray-700 text-lg mb-4">
            At Winning Pillar, we understand that insurance is more than just policies and premiums. 
            It's about protecting what matters most to you and your loved ones.
          </p>
          <p className="text-gray-700 text-lg">
            With years of experience serving the Botswana community, we've built our reputation 
            on trust, reliability, and personalized service.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To provide comprehensive, affordable insurance solutions that give our clients 
                peace of mind and financial security.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty and transparency in everything we do, 
                building lasting relationships based on trust.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in service delivery, ensuring every client 
                receives the best possible experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member Placeholder */}
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-6xl">👤</span>
              </div>
              <h3 className="text-xl font-bold mb-2">[Agent Name]</h3>
              <p className="text-gray-600 mb-2">Lead Insurance Advisor</p>
              <p className="text-gray-500 text-sm">[Years] years of experience</p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-6xl">👤</span>
              </div>
              <h3 className="text-xl font-bold mb-2">[Agent Name]</h3>
              <p className="text-gray-600 mb-2">Insurance Specialist</p>
              <p className="text-gray-500 text-sm">[Years] years of experience</p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-6xl">👤</span>
              </div>
              <h3 className="text-xl font-bold mb-2">[Agent Name]</h3>
              <p className="text-gray-600 mb-2">Client Relations</p>
              <p className="text-gray-500 text-sm">[Years] years of experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Why Clients Choose Us</h2>
          <p className="text-xl text-blue-100 mb-8">
            Years of experience, local expertise, and a commitment to putting our clients first
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Get Started Today
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}