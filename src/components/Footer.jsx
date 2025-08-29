import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gradient-to-t from-gray-900 to-background border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Bot className="h-8 w-8 text-blue-400" />
                <Zap className="h-4 w-4 text-cyan-400 absolute -top-1 -right-1" />
              </div>
              <span className="text-xl font-bold gradient-text">Innova Tech AI</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering businesses with smart AI automation solutions that boost productivity and create exceptional customer experiences.
            </p>
            {/* <div className="flex space-x-4"> 
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-white font-semibold mb-4 block">Quick Links</span>
            <div className="space-y-2">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors block">Home</Link>
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors block">About Us</Link>
              <Link to="/services" className="text-gray-400 hover:text-white transition-colors block">Services</Link>
              <Link to="/faqs" className="text-gray-400 hover:text-white transition-colors block">FAQs</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <span className="text-white font-semibold mb-4 block">Services</span>
            <div className="space-y-2">
              <span className="text-gray-400 block">AI Chatbots</span>
              <span className="text-gray-400 block">AI Voice Callers</span>
              <span className="text-gray-400 block">AI Automation</span>
              <span className="text-gray-400 block">CRM Integration</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <span className="text-white font-semibold mb-4 block">Contact</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400 text-sm">info@innovatechai.io</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400 text-sm">+1 (346) 558-4940</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400 text-sm">Houston, TX</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Innova Tech AI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;