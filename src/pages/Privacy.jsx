import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, UserCheck, FileText, Globe, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Privacy = () => {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Personal Information: We collect information you provide directly, such as your name, email address, phone number, and company details when you register for our services or contact us.",
        "Usage Data: We automatically collect information about how you use our AI tools, including interaction logs, feature usage, and performance metrics to improve our services.",
        "Communication Data: When you contact our support team or participate in surveys, we retain records of these communications to provide better service."
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "Service Provision: We use your information to provide, maintain, and improve our AI solutions, including chatbots, voice callers, and automation tools.",
        "Customer Support: Your information helps us respond to your inquiries, provide technical support, and resolve any issues you may encounter.",
        "Service Improvement: We analyze usage patterns and feedback to enhance our AI models, develop new features, and optimize performance.",
        "Communication: We may send you service-related notifications, updates about new features, and important security information.",
        "Legal Compliance: We process your information as necessary to comply with legal obligations and protect our rights and interests."
      ]
    },
    {
      icon: Lock,
      title: "Data Protection and Security",
      content: [
        "We take your data privacy seriously and use strong encryption to keep it safe—both during transfer and storage.",
        "Your data is never shared without your consent, unless required by law or needed to provide services like payment processing.",
        "AI interactions may be recorded for quality purposes, but your personal information is anonymized.",
        "We also perform regular security checks to keep our systems secure and reliable."
      ]
    },
    {
      icon: FileText,
      title: "Data Retention",
      content: [
        "Account Data: We retain your account information for as long as your account is active or as needed to provide you services.",
        "Usage Logs: AI interaction logs are retained for up to 2 years for service improvement and quality assurance purposes.",
        "Support Records: Customer support communications are retained for 3 years to maintain service quality and resolve future issues.",
        "Legal Compliance: Some data may be retained longer if required by law or for legitimate business purposes such as fraud prevention.",
        "Data Deletion: Upon account termination, we will delete or anonymize your personal information within 30 days, except where retention is required by law."
      ]
    },
    {
      icon: AlertCircle,
      title: "Cookies and Tracking",
      content: [
        "Essential Cookies: We use necessary cookies to provide basic website functionality, maintain your session, and ensure security.",
        "Analytics Cookies: We use analytics cookies to understand how visitors interact with our website and improve user experience.",
        "Preference Cookies: These cookies remember your settings and preferences to provide a personalized experience.",
        "Marketing Cookies: With your consent, we may use marketing cookies to show you relevant advertisements and measure campaign effectiveness.",
        "Cookie Control: You can control cookie settings through your browser preferences, though disabling certain cookies may affect website functionality."
      ]
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
            <div className="flex items-center justify-center space-x-4">
              <Shield className="h-12 w-12 text-blue-400" />
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="gradient-text">Privacy Policy</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Your privacy is fundamental to everything we do. This policy explains how we collect, 
              use, and protect your information when you use Innova Tech AI services.
            </p>
            <div className="text-sm text-gray-400">
              Last updated: December 17, 2024
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-gradient-to-b from-background to-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <section.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-white">{section.title}</CardTitle>
                        <CardDescription className="text-gray-400">
                          Important information about {section.title.toLowerCase()}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {section.content.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex} className="text-gray-300 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Questions About <span className="gradient-text">Your Privacy</span>?
              </h2>
              <p className="text-xl text-gray-300">
                We're here to help you understand how we protect your information
              </p>
            </div>

            <Card className="glass-effect max-w-2xl mx-auto">
              <CardContent className="p-8 text-center space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">Contact Our Privacy Team</h3>
                  <p className="text-gray-300">
                    For privacy-related questions, data requests, or concerns about how we handle your information
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Eye className="h-5 w-5 text-blue-400" />
                    <span className="text-blue-400 font-medium">privacy@innovatechai.io</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Shield className="h-5 w-5 text-blue-400" />
                    <span className="text-blue-400 font-medium">+1 (346) 558-4940</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Globe className="h-5 w-5 text-blue-400" />
                    <span className="text-blue-400 font-medium">Houston, TX</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm text-gray-400">
                    We typically respond to privacy inquiries within 48 hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Compliance Section 
      <section className="py-20 bg-gradient-to-b from-background to-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="gradient-text">Compliance & Certifications</span>
              </h2>
              <p className="text-xl text-gray-300">
                We maintain the highest standards of privacy and security compliance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="glass-effect">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">GDPR Compliant</h3>
                  <p className="text-gray-300">Full compliance with European data protection regulations</p>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto">
                    <Lock className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">SOC 2 Certified</h3>
                  <p className="text-gray-300">Audited security controls and data protection measures</p>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                    <UserCheck className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">CCPA Compliant</h3>
                  <p className="text-gray-300">California Consumer Privacy Act compliance and rights</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
      */}
    </div>
  );
};

export default Privacy;