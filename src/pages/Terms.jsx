
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, Lock, Users, CreditCard, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Terms = () => {
  const sections = [
    {
      icon: FileText,
      title: "Use of AI Tools",
      content: [
        "Our AI tools are provided for legitimate business purposes only. Users must not attempt to reverse engineer, modify, or redistribute our AI models.",
        "You are responsible for ensuring that your use of our AI tools complies with all applicable laws and regulations in your jurisdiction.",
        "We reserve the right to monitor usage patterns to ensure compliance with these terms and to improve our services.",
        "Any misuse of our AI tools, including but not limited to generating harmful, illegal, or inappropriate content, will result in immediate termination of services."
      ]
    },
    {
      icon: Users,
      title: "Ownership of Content",
      content: [
        "You retain ownership of all content you input into our AI systems, including training data, conversation logs, and custom configurations.",
        "Innova Tech AI retains ownership of all proprietary AI models, algorithms, and underlying technology.",
        "Any improvements or modifications made to our AI systems based on your usage remain the property of Innova Tech AI.",
        "You grant us a limited license to use your content solely for the purpose of providing and improving our services."
      ]
    },
    {
      icon: Lock,
      title: "Data Protection and User Privacy",
      content: [
        "We implement industry-standard encryption and security measures to protect your data at all times.",
        "Your data is never shared with third parties without your explicit consent, except as required by law.",
        "All AI interactions are logged for quality assurance and improvement purposes, but personal information is anonymized.",
        "We ensure the highest level of data protection."
      ]
    },
    {
      icon: Shield,
      title: "Service Level Agreements",
      content: [
        "We guarantee 99.9% uptime for all AI services, with automatic failover systems in place.",
        "Response times for AI chatbots are typically under 10 seconds, with voice callers responding within 5 second.",
        "We provide 24/7 AI agent support for instant assistance, while in-person technical support is available during business hours.", 
        "Critical issues are addressed within 1 hour, and general inquiries within 24 hours.",
        "Scheduled maintenance will be announced at least 48 hours in advance, typically performed during low-traffic periods.",
      ]
    },
    {
      icon: CreditCard,
      title: "Payment and Subscription Policy",
      content: [
        "All subscriptions are billed monthly or annually in advance, depending on your chosen plan.",
        "Prices are subject to change with 15 days' written notice. Existing subscribers will be grandfathered for their current billing cycle.",
        "Payment is due within 30 days of invoice date. Late payments may result in service suspension.",
        "We accept major credit cards, bank transfers, and enterprise purchase orders for qualified businesses.",
        "All fees are non-refundable except as specifically outlined in our refund policy below."
      ]
    },
    {
      icon: AlertTriangle,
      title: "Termination and Refund Policy",
      content: [
        "Either party may terminate this agreement with 30 days' written notice.",
        "Immediate termination may occur in cases of breach of terms, non-payment, or misuse of services.",
        "Refunds are available within 7 days of initial subscription for new customers who have not exceeded basic usage limits.",
        "Upon termination, you will have 30 days to export your data before it is permanently deleted from our systems.",
        "Custom development work and setup fees are non-refundable regardless of termination circumstances.",
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
                <span className="gradient-text">Terms & Conditions</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Please read these terms and conditions carefully before using our AI solutions. 
              These terms govern your use of Innova Tech AI services and protect both parties.
            </p>
            <div className="text-sm text-gray-400">
              Last updated: December 17, 2024
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
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
                          Important information regarding {section.title.toLowerCase()}
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

      {/* Additional Legal Information */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Additional <span className="gradient-text">Legal Information</span>
              </h2>
              <p className="text-xl text-gray-300">
                Important details about our legal framework and your rights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Governing Law</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    We comply with relevant government standards to ensure the protection and lawful handling of user data. In the event of a dispute, we will seek resolution through appropriate legal channels. We reserve the right to terminate services in cases of policy violations or unlawful use.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Limitation of Liability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    By subscribing, users give due consent to our terms. All payments are final and non-refundable, except for a one-time refund on first-time purchases within 7 days. 
                    Our liability is limited to the amount paid for the specific service in question. 
                    We are not responsible for any indirect or consequential damages.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Intellectual Property</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    All AI models, algorithms, and proprietary technology remain the exclusive 
                    property of Innova Tech AI and are protected by copyright and patent laws.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Contact for Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    For technical support and  inquiries or to report violations of these terms, contact our 
                    support team at support@innovatechai.com.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center space-y-4 pt-8 border-t border-white/10">
              <p className="text-gray-400">
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
              </p>
              <p className="text-sm text-gray-500">
                These terms may be updated periodically. Continued use of our services constitutes acceptance of any changes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
