import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, Shield } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Executive Director",
      organization: "Women's Protection Network",
      content: "VibeTalk has transformed how we support women in our community. The platform's professional approach and comprehensive tools have helped us increase our success rate by 40% in just six months.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Dr. Maria Rodriguez",
      role: "Clinical Director",
      organization: "North American Women's Health Alliance",
      content: "As a healthcare professional, I appreciate VibeTalk's evidence-based approach. The platform provides the tools we need to deliver professional-grade support while maintaining the highest standards of care.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Jennifer Chen",
      role: "Program Manager",
      organization: "Safe Haven Foundation",
      content: "The analytics and reporting features have been invaluable for our organization. We can now track outcomes and demonstrate our impact to funders with concrete data and success stories.",
      rating: 5,
      avatar: "JC"
    },
    {
      name: "Amanda Thompson",
      role: "Counselor",
      organization: "Women's Empowerment Center",
      content: "The real-time protection features and emergency alert system give our clients peace of mind. They know help is always available when they need it most.",
      rating: 5,
      avatar: "AT"
    },
    {
      name: "Dr. Lisa Williams",
      role: "Research Director",
      organization: "National Women's Rights Coalition",
      content: "VibeTalk's commitment to privacy and security is exceptional. Our clients feel safe using the platform, which is crucial for building trust and encouraging engagement.",
      rating: 5,
      avatar: "LW"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our NGO partners about how VibeTalk is making a difference in their communities 
            and helping them provide better support to women in need.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Testimonial Card */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 relative">
            <Quote className="w-12 h-12 text-purple-400 absolute top-8 left-8 opacity-20" />
            
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                "{currentTestimonial.content}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  {currentTestimonial.avatar}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">{currentTestimonial.name}</div>
                  <div className="text-gray-600">{currentTestimonial.role}</div>
                  <div className="text-purple-600 font-medium">{currentTestimonial.organization}</div>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-center space-x-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </motion.button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex ? 'bg-purple-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Trusted by Leading Organizations
            </h3>
            <p className="text-gray-600">
              Partnering with NGOs across North America
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              "Women's Protection Network",
              "North American Women's Health Alliance", 
              "Safe Haven Foundation",
              "Women's Empowerment Center"
            ].map((org, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-medium text-gray-700">{org}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">NGO Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10,000+</div>
              <div className="text-gray-600">Women Protected</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 