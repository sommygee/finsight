import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: 'Mail',
      title: 'Email Support',
      info: 'support@finsight.com',
      description: '24/7 email support',
      action: 'mailto:support@finsight.com'
    },
    {
      icon: 'Phone',
      title: 'Phone Support',
      info: '+1 (555) 123-4567',
      description: 'Mon-Fri, 9AM-6PM EST',
      action: 'tel:+15551234567'
    },
    {
      icon: 'MapPin',
      title: 'Office Location',
      info: '123 Financial District',
      description: 'New York, NY 10004',
      action: null
    },
    {
      icon: 'MessageCircle',
      title: 'Live Chat',
      info: 'Available Now',
      description: 'Average response: 2 min',
      action: null
    }
  ];

  const socialLinks = [
    { icon: 'Twitter', url: 'https://twitter.com/finsight', label: 'Twitter' },
    { icon: 'Linkedin', url: 'https://linkedin.com/company/finsight', label: 'LinkedIn' },
    { icon: 'Facebook', url: 'https://facebook.com/finsight', label: 'Facebook' },
    { icon: 'Youtube', url: 'https://youtube.com/finsight', label: 'YouTube' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
      
      <div className="space-y-4 mb-8">
        {contactMethods?.map((method, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="bg-brand-primary/10 p-2 rounded-lg">
              <Icon name={method?.icon} size={20} color="#1e40af" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">{method?.title}</h4>
              <p className="text-brand-primary font-medium">{method?.info}</p>
              <p className="text-sm text-gray-600">{method?.description}</p>
            </div>
            {method?.action && (
              <Button
                as="a"
                href={method?.action}
                variant="ghost"
                size="sm"
                className="text-brand-primary hover:bg-brand-primary/10"
              >
                <Icon name="ExternalLink" size={16} />
              </Button>
            )}
          </div>
        ))}
      </div>

      <div>
        <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
        <div className="flex space-x-3">
          {socialLinks?.map((social, index) => (
            <Button
              key={index}
              as="a"
              href={social?.url}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="sm"
              className="text-gray-600 hover:text-brand-primary hover:bg-brand-primary/10"
            >
              <Icon name={social?.icon} size={18} />
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} color="#1e40af" />
          <div>
            <h4 className="font-semibold text-blue-900 mb-1">Business Hours</h4>
            <div className="text-sm text-blue-700 space-y-1">
              <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
              <p>Saturday: 10:00 AM - 4:00 PM EST</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;