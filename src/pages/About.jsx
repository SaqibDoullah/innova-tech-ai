
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Globe, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import aiEngineeringImg from '@/assets/images/ai-engineering.jpg';
import strategyConsultingImg from '@/assets/images/strategy-consulting.jpg';
import customerSuccessImg from '@/assets/images/customer-success.jpg';


const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We stay at the forefront of AI technology to deliver cutting-edge solutions."
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "Every solution is tailored to meet our clients' unique business needs."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Empowering businesses worldwide with intelligent automation."
    }
  ];

  const stats = [
    { number: "500+", label: "Businesses Transformed" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "AI Support" },
    { number: "50+", label: "Countries Served" }
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
              <span className="gradient-text">About Innova Tech AI</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are pioneers in AI-driven business transformation, dedicated to creating intelligent solutions 
              that revolutionize how companies operate and engage with their customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-background to-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Target className="h-8 w-8 text-blue-400" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Innova Tech AI is a future-ready technology agency focused on delivering advanced AI solutions 
                  to businesses globally. We specialize in AI Chatbots, AI Voice Callers, and AI Automation tools 
                  that boost productivity, reduce operational cost, and create smart customer experiences.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  With tailored solutions for every industry, we bring intelligent transformation to your operations, 
                  ensuring you stay ahead in the rapidly evolving digital landscape.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Eye className="h-8 w-8 text-purple-400" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To become the global leader in AI automation solutions, empowering every business to achieve 
                  unprecedented efficiency and customer satisfaction through intelligent technology.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We envision a world where AI seamlessly integrates into business operations, creating more 
                  time for innovation, creativity, and human connection.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
                Our <span className="gradient-text">Core Values</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-effect hover:bg-white/10 transition-all duration-300 group h-full">
                    <CardHeader className="text-center">
                      <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <value.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl text-white">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300 text-center">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
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
                Our Impact in Numbers
              </h2>
              <p className="text-xl text-blue-100">
                Trusted by businesses worldwide
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-2"
                >
                  <div className="text-4xl md:text-6xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-background to-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-16"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">
                <span className="gradient-text">Expert Team</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our diverse team of AI specialists, engineers, and business strategists work together 
                to deliver exceptional results for our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="glass-effect">
                <CardHeader className="text-center">
                  <img  className="w-24 h-24 rounded-full mx-auto mb-4" alt="AI Engineer working on advanced algorithms" src= {aiEngineeringImg}  />
                  <CardTitle className="text-white">AI Engineering</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-center">
                    World-class engineers building the next generation of AI solutions
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardHeader className="text-center">
                  <img  className="w-24 h-24 rounded-full mx-auto mb-4" alt="Business strategist analyzing data" src= {strategyConsultingImg} />
                  <CardTitle className="text-white">Strategy & Consulting</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-center">
                    Strategic minds helping businesses maximize their AI investment
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardHeader className="text-center">
                  <img  className="w-24 h-24 rounded-full mx-auto mb-4" alt="Customer success manager helping clients" src= {customerSuccessImg} />
                  <CardTitle className="text-white">Customer Success</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-center">
                    Dedicated support ensuring your AI solutions deliver maximum value
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
