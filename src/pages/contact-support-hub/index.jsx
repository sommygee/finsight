import React from 'react';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import FAQSection from './components/FAQSection';
import LiveChat from './components/LiveChat';
import Navbar from "../../components/ui/Navbar"; 
import Footer from "components/ui/Footer";

const ContactSupportHub = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-primary to-blue-700 text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Contact & Support Hub
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with our team for assistance, partnerships, or general inquiries. 
            We're here to help you succeed in your investment journey.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          
          {/* Contact Information & Live Chat */}
          <div className="space-y-8">
            <ContactInfo />
            <LiveChat />
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-20">
          <FAQSection />
        </div>
      
      </div>
        {/*footer */}
        <Footer />
    </div>
  );
};

export default ContactSupportHub;