import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Users, Award, Globe, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Empathy First",
      description: "We believe in creating a safe, supportive environment where every woman feels heard, understood, and valued.",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Professional Excellence",
      description: "Our platform meets the highest standards of professional care, with certified counselors and evidence-based approaches.",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Building strong networks of support where women can connect, share experiences, and grow together.",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Backed by research and real-world success stories, our approach has helped thousands of women regain their confidence.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Women Helped" },
    { number: "500+", label: "NGO Partners" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section id="about" className="section bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6"
            >
              <Globe className="w-4 h-4 mr-2" />
              Serving North America Since 2020
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Our Mission to Protect and Empower
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              VibeTalk was founded with a clear mission: to provide professional-grade protection and support 
              for women facing PUA manipulation tactics. We work closely with NGOs and women's protection 
              organizations across North America to deliver comprehensive solutions that make a real difference.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Expert Team
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our multidisciplinary team includes licensed therapists, technology experts, and women's rights advocates 
              who are dedicated to creating the most effective anti-PUA platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Licensed Therapists</h4>
              <p className="text-gray-600 text-sm">
                Certified professionals specializing in trauma recovery and women's mental health
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Technology Experts</h4>
              <p className="text-gray-600 text-sm">
                AI specialists and security professionals ensuring platform safety and effectiveness
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Advocacy Leaders</h4>
              <p className="text-gray-600 text-sm">
                Women's rights advocates with decades of experience in protection and empowerment
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 