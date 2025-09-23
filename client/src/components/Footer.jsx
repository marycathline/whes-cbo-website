import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
<<<<<<< HEAD
import logo from '../assets/logo.png'; 
=======
import logo from '../assets/logo.jpg'; 
>>>>>>> f9b6c8ae3fa8909e84750c322093353bbd2b02a6

export default function Footer() {
  return (
    <footer className="bg-sky-600 text-white py-12 mt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8 items-start">

        {/* Logo & Tagline */}
        <div>
          <img src={logo} alt="WHESS logo" className="h-16 mb-2" />
          <p className="text-sm">Empowering Widowers. Uplifting Elderly. Restoring Dignity.</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold mb-2 text-white">Follow Us</h4>
          <div className="space-y-2 text-sm">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-whessBlue no-underline"
            >
              <Facebook size={18} /> Facebook
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-whessBlue no-underline"
            >
              <Twitter size={18} /> Twitter
            </a>
            <a 
              href="mailto:info@whesskenya.org" 
              className="flex items-center gap-2 hover:text-whessBlue no-underline"
            >
              <Mail size={18} /> Email Us
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2 text-white">Quick Links</h4>
          <ul className="text-sm space-y-2">
            <li><Link to="/" className="hover:text-green-600 no-underline">Home</Link></li>
            <li><Link to="/about" className="hover:text-green-600 no-underline">About</Link></li>
            <li><Link to="/ourwork" className="hover:text-green-600 no-underline">Programs</Link></li>
            <li><Link to="/getinvolved" className="hover:text-green-600 no-underline">Get Involved</Link></li>
            <li><Link to="/blogs" className="hover:text-green-600 no-underline">Blogs</Link></li>
            <li><Link to="/gallery" className="hover:text-green-600 no-underline">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-green-600 no-underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h4 className="font-semibold mb-2 text-white">Contact</h4>
          <p className="text-sm flex items-start gap-2"><MapPin size={18} /> WHESS HQ, Nairobi, Kenya</p>
          <p className="text-sm flex items-start gap-2"><Phone size={18} /> +254 722 708 780 / +254 732 287 848</p>
          <p className="text-sm flex items-start gap-2"><Mail size={18} /> info@whesskenya.org</p>
        </div>

        {/* Map */}
        <div className="col-span-1">
          <iframe
            title="Google Map - Kisumu"
            className="w-full h-64 mt-4 rounded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35869067154!2d36.682579007468966!3d-1.3028602786330847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1753563378963!5m2!1sen!2ske"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-white-500 mt-10 border-t pt-4">
        &copy; {new Date().getFullYear()} WHESS Kenya. All rights reserved.
      </div>
    </footer>
  );
}
