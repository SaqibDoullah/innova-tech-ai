
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
/*
  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };
*/

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
      const res = await fetch('https://innova-backend-uj3n.onrender.com/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      toast({ title: '✅ Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      const data = await res.json().catch(() => ({}));
      toast({ 
        title: '❌ Failed to send message.', 
        description: data?.error || ''
      });
    }
  } catch (err) {
    console.error(err);
    toast({ title: '❌ Server error.' });
  }
};


  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@innovatechai.com",
      description: "Send us your questions anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (346) 501-1343",
      description: "Speak with our AI experts"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Houston, TX",
      description: "Our headquarters location"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "24/7 Support",
      description: "We're always here to help"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="gradient-text">Let's Build Your AI Future</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with AI? Contact us now and let's discuss 
              how our intelligent solutions can revolutionize your operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-gradient-to-b from-background to-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Send Us a Message</CardTitle>
                  <CardDescription className="text-gray-300">
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-white">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-white">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                          className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-white">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What can we help you with?"
                        required
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-white">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project and requirements..."
                        rows={6}
                        required
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
                <p className="text-lg text-gray-300">
                  We're here to help you succeed. Reach out through any of these channels 
                  and let's start building your AI-powered future together.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="glass-effect hover:bg-white/10 transition-all duration-300 group">
                      <CardContent className="p-6 text-center space-y-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                          <info.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{info.title}</h3>
                          <p className="text-blue-400 font-medium">{info.content}</p>
                          <p className="text-sm text-gray-400">{info.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Free Consultation CTA
              <Card className="glass-effect bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Schedule a Free Consultation</h3>
                    <p className="text-gray-300">
                      Book a 30-minute call with our AI experts to discuss your specific needs
                    </p>
                  </div>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6"
                    onClick={handleScheduleConsultation}
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Free Consultation
                  </Button>
                </CardContent>
              </Card>

              {/* Social Media Links 
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold text-white">Follow Us</h3>
                <div className="flex justify-center space-x-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                    <span className="text-white font-bold">f</span>
                  </div>
                  <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                    <span className="text-white font-bold">t</span>
                  </div>
                  <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors cursor-pointer">
                    <span className="text-white font-bold">in</span>
                  </div>
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                    <span className="text-white font-bold">ig</span>
                  </div>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Our <span className="gradient-text">Location</span>
            </h2>
            <div className="bg-gray-800 rounded-lg p-8 max-w-4xl mx-auto">
              <img  
                className="w-full h-64 object-cover rounded-lg" 
                alt="Modern office building in San Francisco"
               src="https://images.unsplash.com/photo-1631498539536-54cd61318e4d" />
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">Innova Tech AI </h3>
                <p className="text-gray-300">Houston, Texas</p>
                <p className="text-sm text-gray-400 mt-2">
                  Located in Sugar Land district of Houston
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
