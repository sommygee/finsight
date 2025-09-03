import React from "react";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-brand-primary mb-6">Contact Us</h2>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Have questions, feedback, or partnership ideas? Our team is here to help you.
          Choose the option that best fits your needs, and we’ll get back to you quickly.
        </p>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">💬 Support</h3>
            <p className="text-gray-600 mb-4">Need help with your account or using FinSight?</p>
            <Link 
              to="/contact-support-hub" 
              className="inline-block px-5 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-secondary transition"
            >
              Get Support
            </Link>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">📧 Email</h3>
            <p className="text-gray-600 mb-4">General inquiries or questions? Reach us via email.</p>
            <a 
              href="mailto:support@finsight.com" 
              className="inline-block px-5 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-secondary transition"
            >
              Email Us
            </a>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">🤝 Partnerships</h3>
            <p className="text-gray-600 mb-4">Interested in collaborating or business opportunities?</p>
            <a 
              href="mailto:partners@finsight.com" 
              className="inline-block px-5 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-secondary transition"
            >
              Contact Partnerships
            </a>
          </div>
        </div>

        {/* Optional Contact Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8 border max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Send us a Message</h3>
          <form className="grid gap-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
            <textarea 
              placeholder="Your Message" 
              rows="4"
              className="border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-brand-primary"
            ></textarea>
            <button 
              type="submit" 
              className="bg-brand-primary text-white py-3 px-6 rounded-lg hover:bg-brand-secondary transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
