
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Phone, Zap, MessageSquare, Calendar, BarChart3, Settings, CheckCircle, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';

const Services = () => {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDemoClick = () => {
    setIsDialogOpen(true);
  };

  const handlePlayDemo = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const services = [
    {
      icon: Bot,
      title: "AI Chatbots",
      description: "Intelligent conversational AI that transforms customer interactions across all platforms.",
      features: [
        "Website integration with seamless user experience",
        "WhatsApp Business API integration",
        "Facebook Messenger automation",
        "Multi-language support",
        "24/7 automated customer service",
        "Lead qualification and nurturing",
        "Custom conversation flows"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "AI Voice Callers",
      description: "Advanced voice agents that handle calls with human-like conversation capabilities.",
      features: [
        "Appointment booking and scheduling",
        "Customer service and support calls",
        "Lead qualification and follow-up",
        "Survey and feedback collection",
        "Payment reminders and collections",
        "Natural language processing",
        "Voice recognition and synthesis",
        "Call analytics and reporting"
      ],
      gradient: "from-purple-500 to-pink-500",
      hasDemo: true
    },
    {
      icon: Zap,
      title: "AI Automation",
      description: "Streamline your workflows with intelligent automation that learns and adapts.",
      features: [
        "Workflow automation and optimization",
        "Data processing and analysis",
        "Email marketing automation",
        "Social media management",
        "Inventory management",
        "Report generation",
        "Task scheduling and reminders",
        "Integration with existing tools"
      ],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const additionalFeatures = [
    {
      icon: MessageSquare,
      title: "Multi-Platform Integration",
      description: "Seamlessly connect across all your communication channels"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Automated appointment booking with calendar integration"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Detailed insights and performance metrics"
    },
    {
      icon: Settings,
      title: "Custom Configuration",
      description: "Tailored solutions for your specific business needs"
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
              <span className="gradient-text">Our AI Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive suite of AI-powered tools designed to revolutionize 
              your business operations and customer engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-background to-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {service.hasDemo && (
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                      {/* 
                      <DialogTrigger asChild>
                        <Button 
                          className={`bg-gradient-to-r ${service.gradient} hover:opacity-90 text-lg px-8 py-6`}
                          onClick={handleDemoClick}
                        >
                          <Play className="mr-2 h-5 w-5" />
                          Click to Demo our AI Caller
                        </Button>
                      </DialogTrigger>*/}
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle className="flex items-center space-x-2">
                            <Phone className="h-6 w-6 text-purple-400" />
                            <span>AI Voice Caller Demo</span>
                          </DialogTitle>
                          <DialogDescription>
                            Experience our AI voice technology in action. Click play to hear a sample conversation.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex flex-col items-center space-y-4 py-6">
                          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                            <Phone className="h-12 w-12 text-white" />
                          </div>
                          <Button 
                            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90"
                            onClick={handlePlayDemo}
                          >
                            <Play className="mr-2 h-4 w-4" />
                            Play Demo
                          </Button>
                          <p className="text-sm text-gray-400 text-center">
                            This demo showcases our AI caller handling appointment booking with natural conversation flow.
                          </p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <Card className="glass-effect p-8">
                    <div className="space-y-6">
                      <img  
                        className="w-full h-64 object-cover rounded-lg" 
                        alt={`${service.title} interface demonstration`}
                       src="https://images.unsplash.com/photo-1675023035272-3426884896f8" />
                      <div className="text-center">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          See {service.title} in Action
                        </h3>
                        <p className="text-gray-400">
                          Real-world implementation delivering measurable results
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-16"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                <span className="gradient-text">Additional Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Every solution comes with powerful features designed to maximize your ROI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-effect hover:bg-white/10 transition-all duration-300 group h-full">
                    <CardHeader className="text-center">
                      <div className="mx-auto w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300 text-center">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section 
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100">
              Let's discuss which AI solution is perfect for your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6"
                onClick={() => toast({
                  title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
                })}
              >
                Schedule Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
                onClick={() => toast({
                  title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
                })}
              >
                Request Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>*/}
    </div>
  );
};

export default Services;
