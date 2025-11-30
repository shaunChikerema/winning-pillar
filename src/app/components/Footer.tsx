export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Winning Pillar</h3>
            <p className="text-gray-400 mb-4">
              Your trusted insurance partner in Botswana. 
              Protecting what matters most.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info - Placeholders */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📞 +267 [Phone Number]</li>
              <li>📧 [Email Address]</li>
              <li>📍 [Office Address]</li>
              <li className="pt-4">
                <div className="flex space-x-4">
                  {/* Social media icons - placeholder */}
                  <a href="#" className="hover:text-white transition">FB</a>
                  <a href="#" className="hover:text-white transition">IG</a>
                  <a href="#" className="hover:text-white transition">TW</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Winning Pillar Insurance Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}