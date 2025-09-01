import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Heart, BookOpen, MessageCircle, Bell, Lock, BarChart3 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Real-time Protection",
      description: "Advanced AI-powered detection system that identifies and alerts users to potential PUA tactics in real-time conversations and interactions.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Professional Support Network",
      description: "Connect with certified counselors, therapists, and support groups specifically trained in anti-PUA intervention and recovery.",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Heart,
      title: "Emotional Wellness Tracking",
      description: "Comprehensive mood and behavior tracking tools to help users monitor their emotional health and identify patterns.",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: BookOpen,
      title: "Educational Resources",
      description: "Extensive library of articles, videos, and interactive modules on recognizing and responding to manipulation tactics.",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: MessageCircle,
      title: "Anonymous Community",
      description: "Safe, moderated community where users can share experiences and support each other without fear of judgment.",
      color: "from-orange-500 to-pink-500"
    },
    {
      icon: Bell,
      title: "Emergency Alerts",
      description: "Instant notification system with emergency contacts and quick access to professional help when needed.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Lock,
      title: "Privacy & Security",
      description: "Bank-level encryption and strict privacy controls ensure all user data remains confidential and secure.",
      color: "from-gray-600 to-gray-800"
    },
    {
      icon: BarChart3,
      title: "Progress Analytics",
      description: "Detailed insights and progress reports to help users and organizations track recovery and improvement metrics.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Protection Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our professional-grade tools and resources are designed specifically for NGOs and women's protection organizations 
            to provide comprehensive support and protection against PUA tactics.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-purple-200">
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {/* 改为使用 size/color，避免依赖className */}
                  <feature.icon size={24} color="white" style={{ display: 'block' }} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Designed for Professional Organizations
              </h3>
              <p className="text-gray-600 mb-6">
                VibeTalk is built with the needs of NGOs and women's protection organizations in mind. 
                Our platform provides comprehensive tools for case management, reporting, and outcome tracking.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  HIPAA-compliant data handling
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Customizable organization dashboards
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Professional training and certification programs
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  24/7 technical support and consultation
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">Organization Dashboard</h4>
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    {/* 改为使用 size/color */}
                    <BarChart3 size={16} color="#9333ea" style={{ display: 'block' }} />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Active Users</span>
                    <span className="font-semibold text-gray-900">1,247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Cases Resolved</span>
                    <span className="font-semibold text-gray-900">892</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Success Rate</span>
                    <span className="font-semibold text-green-600">94.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Avg. Response Time</span>
                    <span className="font-semibold text-gray-900">2.3 min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 