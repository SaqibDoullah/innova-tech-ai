
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What’s the difference between a chatbot and a voice caller?",
      answer: "A chatbot is text-based, interacting through websites, WhatsApp, or social media. It’s great for instant replies and handling many chats at once. A voice caller uses speech recognition and synthesis to hold natural phone conversations — ideal for booking, customer support, and situations where voice is preferred."
    
    },
    {
      question: "What industries do you serve, and can solutions be customized?",
      answer: "We work with all industries — healthcare, e-commerce, real estate, finance, education, hospitality, and more. Every solution is fully customized to your needs, brand voice, and industry requirements."
    },
    {
      question: "Can I integrate AI tools with my CRM or calendar?",
      answer: "Yes — our AI solutions can be integrated with a wide range of CRM and calendar systems, provided they support secure API or automation connections. We ensure smooth, reliable, and secure data flow between your AI tools and existing business systems, with full compatibility checks before implementation."
    },
    {
      question: "How do I update or retrain my AI bot?",
      answer: "We handle updates for you as part of your monthly maintenance plan — including minor changes to conversation flows, responses, and business details. If you require major updates or significant new features beyond the monthly scope, these will be billed separately. The AI also learns from interactions over time, and our team is available for both routine and large-scale adjustments."
    },
    {
      question: "Do you offer ongoing support and analytics?",
      answer: "Yes. You get support, real-time analytics, monthly performance reports, and recommendations to optimize results."
    },
    {
      question: "How secure is customer data with your AI solutions?",
      answer: "We follow strict data protection practices to keep customer information safe. This includes enterprise-grade encryption for all interactions, secure data storage, and regular system security checks. We never share or sell your data, and you have full control over how it is used and retained."
    },
    {
      question: "How long does it take to implement an AI solution?",
      answer: "Implementation timelines vary based on complexity, but most basic AI chatbot deployments take 1-2 weeks, while comprehensive voice caller systems typically require 2-4 weeks. This includes initial consultation, custom configuration, integration setup, testing, and training. We provide a detailed timeline during our initial consultation and keep you updated throughout the process. For urgent deployments, we offer expedited implementation services."
    },
    {
      question: "What kind of ROI can I expect from AI automation?",
      answer: "Most chatbots launch in 1–2 weeks; voice callers take 4–6 weeks, including consultation, setup, integration, and testing. Expedited services are available."
    },
    {
      question: "What ROI can I expect from AI automation?",
      answer: "Many clients see ROI in 3–6 months — reduced response times, lower operational costs, more sales, and higher customer satisfaction. We provide ROI projections and track results."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

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
            <div className="flex items-center justify-center space-x-4">
              <HelpCircle className="h-12 w-12 text-blue-400" />
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="gradient-text">Frequently Asked Questions</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Find answers to common questions about our AI solutions, implementation process, 
              and how we can help transform your business operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gradient-to-b from-background to-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect hover:bg-white/5 transition-all duration-300">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                        {faq.question}
                      </h3>
                      {openFAQ === index ? (
                        <ChevronUp className="h-6 w-6 text-blue-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-blue-400 flex-shrink-0" />
                      )}
                    </button>
                    
                    {openFAQ === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6"
                      >
                        <div className="border-t border-white/10 pt-4">
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-300">
                Our team is here to help you find the perfect AI solution for your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="glass-effect">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                    <HelpCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Live Chat Support</h3>
                  <p className="text-gray-300">Get instant answers from our AI experts</p>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto">
                    <HelpCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Schedule a Call</h3>
                  <p className="text-gray-300">Book a free consultation with our team</p>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                    <HelpCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Email Support</h3>
                  <p className="text-gray-300">Send us your questions anytime</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
