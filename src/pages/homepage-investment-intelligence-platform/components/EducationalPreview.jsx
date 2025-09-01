import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const EducationalPreview = () => {
  const [currentCourse, setCurrentCourse] = useState(0);

  const courses = [
    {
      id: 1,
      title: "Investment Fundamentals",
      description: "Master the basics of investing, from stocks and bonds to portfolio diversification strategies.",
      thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
      duration: "4 hours",
      lessons: 12,
      level: "Beginner",
      progress: 0,
      instructor: "Dr. Sarah Williams",
      rating: 4.9,
      students: 15420
    },
    {
      id: 2,
      title: "Technical Analysis Mastery",
      description: "Learn to read charts, identify patterns, and make data-driven trading decisions.",
      thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=250&fit=crop",
      duration: "6 hours",
      lessons: 18,
      level: "Intermediate",
      progress: 35,
      instructor: "Michael Chen",
      rating: 4.8,
      students: 12350
    },
    {
      id: 3,
      title: "Risk Management Strategies",
      description: "Protect your investments with advanced risk assessment and management techniques.",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      duration: "5 hours",
      lessons: 15,
      level: "Advanced",
      progress: 78,
      instructor: "Emily Rodriguez",
      rating: 4.9,
      students: 8920
    },
    {
      id: 4,
      title: "Cryptocurrency Investing",
      description: "Navigate the digital asset landscape with confidence and strategic insight.",
      thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
      duration: "3 hours",
      lessons: 10,
      level: "Intermediate",
      progress: 12,
      instructor: "David Park",
      rating: 4.7,
      students: 9840
    }
  ];

  const learningPaths = [
    {
      name: "Complete Beginner",
      courses: 8,
      duration: "32 hours",
      icon: "BookOpen"
    },
    {
      name: "Active Trader",
      courses: 12,
      duration: "48 hours",
      icon: "TrendingUp"
    },
    {
      name: "Portfolio Manager",
      courses: 10,
      duration: "40 hours",
      icon: "PieChart"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCourse((prev) => (prev + 1) % courses?.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Learn from the Best
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive Learning Academy offers expert-led courses designed to take you from beginner to advanced investor.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Course Showcase */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="relative">
                <Image
                  src={courses?.[currentCourse]?.thumbnail}
                  alt={courses?.[currentCourse]?.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(courses?.[currentCourse]?.level)}`}>
                    {courses?.[currentCourse]?.level}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                  {courses?.[currentCourse]?.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {courses?.[currentCourse]?.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {courses?.[currentCourse]?.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Icon name="PlayCircle" size={16} />
                      <span>{courses?.[currentCourse]?.lessons} lessons</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Users" size={16} />
                      <span>{courses?.[currentCourse]?.students?.toLocaleString()} students</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" size={16} color="#F59E0B" className="fill-current" />
                    <span className="text-sm font-medium">{courses?.[currentCourse]?.rating}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                {courses?.[currentCourse]?.progress > 0 && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{courses?.[currentCourse]?.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-brand-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${courses?.[currentCourse]?.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    by {courses?.[currentCourse]?.instructor}
                  </div>
                  <Button variant="outline" size="sm" iconName="Play" iconPosition="left">
                    {courses?.[currentCourse]?.progress > 0 ? 'Continue' : 'Start Course'}
                  </Button>
                </div>
              </div>
            </div>

            {/* Course Navigation */}
            <div className="flex justify-center space-x-2 mt-6">
              {courses?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCourse(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentCourse ? 'bg-brand-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Learning Paths */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Structured Learning Paths
            </h3>
            <p className="text-gray-600 mb-8">
              Follow curated learning paths designed for your experience level and investment goals.
            </p>

            <div className="space-y-4">
              {learningPaths?.map((path, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={path?.icon} size={24} color="var(--color-brand-primary)" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900">{path?.name}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{path?.courses} courses</span>
                        <span>•</span>
                        <span>{path?.duration}</span>
                      </div>
                    </div>
                    <Icon name="ArrowRight" size={20} color="#6B7280" />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link to="/market-explorer-research-center">
                <Button 
                  variant="default" 
                  size="lg" 
                  fullWidth 
                  iconName="GraduationCap" 
                  iconPosition="left"
                >
                  Explore Learning Academy
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Expert Courses</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25K+</div>
              <div className="text-blue-100">Active Learners</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.8</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Completion Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalPreview;