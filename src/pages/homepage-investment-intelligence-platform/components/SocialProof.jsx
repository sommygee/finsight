import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProof = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const metrics = [
    {
      value: "500K+",
      label: "Portfolios Created",
      icon: "PieChart",
      description: "Active investment portfolios managed on our platform"
    },
    {
      value: "95%",
      label: "User Satisfaction",
      icon: "Heart",
      description: "Users rate their experience as excellent"
    },
    {
      value: "15K+",
      label: "Assets Tracked",
      icon: "TrendingUp",
      description: "Stocks, bonds, and crypto assets available"
    },
    {
      value: "24/7",
      label: "Market Coverage",
      icon: "Globe",
      description: "Real-time data from global markets"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Software Engineer",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      content: "FinSight transformed how I approach investing. The AI insights helped me optimize my portfolio and I\'ve seen a 23% improvement in returns over 6 months.",
      rating: 5,
      portfolio: "$45K"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Marketing Director",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      content: "The learning modules are incredible. I went from knowing nothing about investing to confidently managing a diversified portfolio worth over $80K.",
      rating: 5,
      portfolio: "$82K"
    },
    {
      id: 3,
      name: "Emily Johnson",
      role: "Financial Analyst",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      content: "As a finance professional, I'm impressed by the depth of analytics. The risk assessment tools and market insights are institutional-grade quality.",
      rating: 5,
      portfolio: "$125K"
    },
    {
      id: 4,
      name: "David Park",
      role: "Entrepreneur",
      avatar: "https://randomuser.me/api/portraits/men/38.jpg",
      content: "The paper trading feature let me test strategies risk-free. Now I\'m managing my real portfolio with confidence and seeing consistent gains.",
      rating: 5,
      portfolio: "$67K"
    }
  ];

  const trustBadges = [
    { name: "SEC Compliant", icon: "Shield" },
    { name: "Bank-Level Security", icon: "Lock" },
    { name: "FINRA Regulated", icon: "Award" },
    { name: "SOC 2 Certified", icon: "CheckCircle" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Success Metrics */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Trusted by Investors Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Join a growing community of successful investors who have transformed their financial future with FinSight.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics?.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={metric?.icon} size={28} color="white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric?.value}</div>
                <div className="text-lg font-semibold text-gray-700 mb-1">{metric?.label}</div>
                <div className="text-sm text-gray-500">{metric?.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">What Our Users Say</h3>
            <p className="text-gray-600">Real stories from real investors</p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials?.map((testimonial) => (
                  <div key={testimonial?.id} className="w-full flex-shrink-0">
                    <div className="max-w-4xl mx-auto text-center">
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial?.rating)]?.map((_, i) => (
                          <Icon key={i} name="Star" size={20} color="#F59E0B" className="fill-current" />
                        ))}
                      </div>
                      
                      <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed italic">
                        "{testimonial?.content}"
                      </blockquote>
                      
                      <div className="flex items-center justify-center space-x-4">
                        <Image
                          src={testimonial?.avatar}
                          alt={testimonial?.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="text-left">
                          <div className="font-semibold text-gray-900">{testimonial?.name}</div>
                          <div className="text-gray-600 text-sm">{testimonial?.role}</div>
                        </div>
                        <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                          Portfolio: {testimonial?.portfolio}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial ? 'bg-brand-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Regulated & Secure</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {trustBadges?.map((badge, index) => (
              <div key={index} className="flex items-center space-x-2 text-gray-600">
                <Icon name={badge?.icon} size={20} color="#059669" />
                <span className="font-medium">{badge?.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;