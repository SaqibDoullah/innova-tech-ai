import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Phone, Zap, Users, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { useEffect } from 'react';
import VapiWidget from '@/components/VapiWidget';
import { useNavigate } from 'react-router-dom';





const Home = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleBookDemo = () => {
    navigate('/contact');
  };
  
  const handleContact = () => {
    navigate('/contact');
  };

  const features = [
    {
      icon: Bot,
      title: "AI Chatbots",
      description: "Intelligent conversational AI for websites, WhatsApp, Facebook, and CRM integration."
    },
    {
      icon: Phone,
      title: "AI Voice Callers",
      description: "Advanced voice agents for appointments, customer service, and lead qualification."
    },
    {
      icon: Zap,
      title: "AI Automation",
      description: "Streamline workflows and eliminate repetitive tasks with smart automation."
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Boost Productivity",
      description: "Increase efficiency by 300% with intelligent automation"
    },
    {
      icon: Users,
      title: "Better Customer Experience",
      description: "24/7 support with personalized AI interactions"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime"
    }
  ];
/*
  useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
  script.defer = true;
  script.async = true;

  script.onload = () => {
    window.vapiInstance = window.vapiSDK.run({
      apiKey: "6a6e06cc-12dc-43d0-93e3-31a091847001",
      assistant: "8753d5ca-c1d8-4900-a37d-1caa6ad94c60",
      config: {
        position: "bottom-right", // Available: top-left, top-right, bottom-left, bottom-right
        showButton: false
      },
    });
  };

  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  };
}, []);

*/

  return (
    <>
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 hero-pattern overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2"
                >
                  <Bot className="h-5 w-5 text-blue-400" />
                  <span className="text-blue-400 text-sm font-medium">Next-Gen AI Solutions</span>
                </motion.div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                  <span className="gradient-text">Empowering Businesses</span>
                  <br />
                  <span className="text-white">with Smart AI Automation</span>
                </h1>
                
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Transform your operations with cutting-edge AI chatbots, voice callers, and automation tools. 
                  Boost productivity, reduce costs, and create exceptional customer experiences.
                </p>
              </div>

               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/*
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 pulse-glow"
                  onClick={handleGetStarted}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                */}
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6"
                  onClick={handleBookDemo}
                >
                  Book a Demo
                </Button>
                
                {/* VapiWidget rendered outside the scrollable content */}
                <VapiWidget
                  apiKey="6a6e06cc-12dc-43d0-93e3-31a091847001"
                  assistantId="8753d5ca-c1d8-4900-a37d-1caa6ad94c60"
                />

              </div>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 floating-animation">
            <div className="w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
          </div>
          <div className="absolute top-40 right-20 floating-animation" style={{ animationDelay: '2s' }}>
            <div className="w-16 h-16 bg-purple-500/20 rounded-full blur-xl"></div>
          </div>
          <div className="absolute bottom-20 left-1/4 floating-animation" style={{ animationDelay: '4s' }}>
            <div className="w-12 h-12 bg-cyan-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-background to-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">
                <span className="gradient-text">About Innova Tech AI</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Innova Tech AI is a future-ready technology agency focused on delivering advanced AI solutions 
                to businesses globally. We specialize in AI Chatbots, AI Voice Callers, and AI Automation tools 
                that boost productivity, reduce operational cost, and create smart customer experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-effect hover:bg-white/10 transition-all duration-300 group">
                    <CardHeader className="text-center">
                      <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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

      {/* Benefits Section */}
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
                Why Choose <span className="gradient-text">Innova Tech AI</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses that have transformed their operations with our AI solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center space-y-4"
                >
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center">
                    <benefit.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100">
              Start your AI journey today and experience the future of business automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/*
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6"
                /*onClick={handleGetStarted}
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              */}
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
                  onClick={handleContact}
                >
                  Contact Us
                </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  </>
  );
};

export default Home;
