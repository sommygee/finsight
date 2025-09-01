import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactForm = () => {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [responseTime, setResponseTime] = useState('');
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  
  const topics = [
    { value: 'general', label: 'General Questions', time: '24 hours' },
    { value: 'technical', label: 'Technical Support', time: '12 hours' },
    { value: 'partnership', label: 'Partnership Inquiries', time: '48 hours' },
    { value: 'media', label: 'Media Relations', time: '48 hours' }
  ];

  const watchedTopic = watch('topic');
  
  React.useEffect(() => {
    const topic = topics?.find(t => t?.value === watchedTopic);
    setResponseTime(topic?.time || '');
  }, [watchedTopic]);

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    // Handle form submission
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h2>
        <p className="text-gray-600">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Basic Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <Input
              {...register('firstName', { required: 'First name is required' })}
              placeholder="Enter your first name"
              error={errors?.firstName?.message}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <Input
              {...register('lastName', { required: 'Last name is required' })}
              placeholder="Enter your last name"
              error={errors?.lastName?.message}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <Input
              type="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address'
                }
              })}
              placeholder="Enter your email"
              error={errors?.email?.message}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <Input
              {...register('phone')}
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        {/* Topic Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Inquiry Type *
          </label>
          <select
            {...register('topic', { required: 'Please select a topic' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
          >
            <option value="">Select inquiry type...</option>
            {topics?.map((topic) => (
              <option key={topic?.value} value={topic?.value}>
                {topic?.label}
              </option>
            ))}
          </select>
          {errors?.topic && (
            <p className="text-red-500 text-sm mt-1">{errors?.topic?.message}</p>
          )}
          {responseTime && (
            <div className="flex items-center space-x-2 mt-2 text-sm text-gray-600">
              <Icon name="Clock" size={16} />
              <span>Expected response time: {responseTime}</span>
            </div>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            {...register('message', { required: 'Please enter your message' })}
            rows="6"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent resize-vertical"
            placeholder="Describe your inquiry in detail..."
          ></textarea>
          {errors?.message && (
            <p className="text-red-500 text-sm mt-1">{errors?.message?.message}</p>
          )}
        </div>

        {/* Priority Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Priority Level
          </label>
          <div className="flex space-x-4">
            {['Low', 'Medium', 'High', 'Urgent']?.map((priority) => (
              <label key={priority} className="flex items-center">
                <input
                  type="radio"
                  value={priority?.toLowerCase()}
                  {...register('priority')}
                  className="text-brand-primary"
                />
                <span className="ml-2 text-sm text-gray-700">{priority}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            variant="default"
            size="lg"
            className="w-full bg-brand-primary hover:bg-brand-primary/90"
            iconName="Send"
            iconPosition="right"
          >
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;