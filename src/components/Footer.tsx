
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stitch-blue text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">StitchSync</h3>
            <p className="mb-6 text-gray-300">
              Connecting talented women stitchers with customers for quality custom tailoring.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-stitch-pink transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-stitch-pink transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-stitch-pink transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-stitch-pink transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-white transition">About Us</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-white transition">How It Works</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-white transition">Features</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition">Testimonials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">FAQ</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Refund Policy</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="mr-3" />
                <a href="mailto:info@stitchsync.com" className="text-gray-300 hover:text-white transition">info@stitchsync.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-white transition">+91 98765 43210</a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1" />
                <span className="text-gray-300">
                  123 Stitch Street, Fashion District,<br />
                  Mumbai, India - 400001
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 StitchSync. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition">Terms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
