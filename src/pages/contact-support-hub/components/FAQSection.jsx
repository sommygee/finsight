import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        {
          question: 'How do I create an account?',
          answer: 'Creating an account is simple. Click the "Sign Up" button, enter your email and create a password. You\'ll receive a verification email to activate your account.'
        },
        {
          question: 'What investment tools are available?',
          answer: 'We offer portfolio analysis, market research tools, AI-powered insights, backtesting capabilities, and real-time market data across multiple asset classes.'
        },
        {
          question: 'Is my financial data secure?',
          answer: 'Yes, we use bank-level encryption and security measures. Your data is protected with 256-bit SSL encryption and we never store your actual banking credentials.'
        }
      ]
    },
    {
      category: 'Account & Billing',
      questions: [
        {
          question: 'What subscription plans are available?',
          answer: 'We offer three plans: Basic (free), Professional ($29/month), and Enterprise ($99/month). Each includes different levels of features and support.'
        },
        {
          question: 'Can I cancel my subscription anytime?',
          answer: 'Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period, and no further charges will occur.'
        },
        {
          question: 'Do you offer refunds?',
          answer: 'We offer a 30-day money-back guarantee for all paid plans. If you\'re not satisfied, contact support for a full refund.'
        }
      ]
    },
    {
      category: 'Technical Support',
      questions: [
        {
          question: 'Why is my portfolio data not updating?',
          answer: 'Portfolio data typically updates every 15 minutes during market hours. If you\'re experiencing delays, try refreshing your browser or check our system status page.'
        },
        {
          question: 'Which browsers are supported?',
          answer: 'We support the latest versions of Chrome, Firefox, Safari, and Edge. For optimal performance, we recommend using Chrome or Firefox.'
        },
        {
          question: 'How do I reset my password?',
          answer: 'Click "Forgot Password" on the login page, enter your email address, and follow the instructions in the reset email we send you.'
        }
      ]
    }
  ];

  const filteredFAQs = faqs?.map(category => ({
    ...category,
    questions: category?.questions?.filter(faq => 
      faq?.question?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      faq?.answer?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    )
  }))?.filter(category => category?.questions?.length > 0);

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const faqKey = `${categoryIndex}-${questionIndex}`;
    setOpenFAQ(openFAQ === faqKey ? null : faqKey);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        
        {/* Search Bar */}
        <div className="relative">
          <Icon 
            name="Search" 
            size={20} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
          />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e?.target?.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
          />
        </div>
      </div>
      <div className="space-y-8">
        {filteredFAQs?.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              {category?.category}
            </h3>
            
            <div className="space-y-3">
              {category?.questions?.map((faq, questionIndex) => {
                const faqKey = `${categoryIndex}-${questionIndex}`;
                const isOpen = openFAQ === faqKey;
                
                return (
                  <div key={questionIndex} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900">{faq?.question}</span>
                      <Icon 
                        name={isOpen ? "ChevronUp" : "ChevronDown"} 
                        size={20} 
                        className="text-gray-500 flex-shrink-0 ml-4"
                      />
                    </button>
                    
                    {isOpen && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">{faq?.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {filteredFAQs?.length === 0 && (
        <div className="text-center py-8">
          <Icon name="Search" size={48} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Results Found</h3>
          <p className="text-gray-600">Try different search terms or browse our categories above.</p>
        </div>
      )}
      <div className="mt-8 p-6 bg-gray-50 rounded-lg text-center">
        <h4 className="font-semibold text-gray-900 mb-2">Still need help?</h4>
        <p className="text-gray-600 mb-4">
          Can't find the answer you're looking for? Our support team is here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-primary/90 transition-colors">
            <Icon name="MessageCircle" size={16} />
            <span>Start Live Chat</span>
          </button>
          <button className="inline-flex items-center space-x-2 px-4 py-2 border border-brand-primary text-brand-primary rounded-lg hover:bg-brand-primary/10 transition-colors">
            <Icon name="Mail" size={16} />
            <span>Send Email</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;