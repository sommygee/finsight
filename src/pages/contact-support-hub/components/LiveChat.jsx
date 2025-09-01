import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LiveChat = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [averageResponseTime, setAverageResponseTime] = useState('2 minutes');
  const [queuePosition, setQueuePosition] = useState(0);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900">Live Chat Support</h3>
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}></div>
          <span className={`text-sm font-medium ${isOnline ? 'text-green-600' : 'text-red-600'}`}>
            {isOnline ? 'Online' : 'Offline'}
          </span>
        </div>
      </div>

      {isOnline ? (
        <div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <Icon name="MessageCircle" size={20} color="#059669" />
              <div>
                <h4 className="font-semibold text-green-800 mb-1">Chat Available</h4>
                <p className="text-sm text-green-700">
                  Our support team is ready to help you right away.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Average response time:</span>
              <span className="font-medium text-gray-900">{averageResponseTime}</span>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Queue position:</span>
              <span className="font-medium text-gray-900">
                {queuePosition === 0 ? 'No wait' : `${queuePosition} ahead`}
              </span>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Estimated wait:</span>
              <span className="font-medium text-gray-900">
                {queuePosition === 0 ? 'Connect now' : `${queuePosition * 3} minutes`}
              </span>
            </div>
          </div>

          <Button
            variant="default"
            size="lg"
            className="w-full bg-green-600 hover:bg-green-700 text-white"
            iconName="MessageCircle"
            iconPosition="left"
          >
            Start Live Chat
          </Button>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              By starting a chat, you agree to our{' '}
              <a href="/privacy" className="text-brand-primary hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      ) : (
        <div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <Icon name="Clock" size={20} color="#DC2626" />
              <div>
                <h4 className="font-semibold text-red-800 mb-1">Currently Offline</h4>
                <p className="text-sm text-red-700">
                  Our chat support is currently unavailable. We'll be back during business hours.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">Alternative Support Options</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>📧 Email: support@finsight.com</p>
              <p>📞 Phone: +1 (555) 123-4567</p>
              <p>🕒 Business Hours: Mon-Fri, 9AM-6PM EST</p>
            </div>
          </div>

          <Button
            variant="outline"
            size="lg"
            className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
            iconName="Mail"
            iconPosition="left"
            disabled
          >
            Chat Unavailable
          </Button>
        </div>
      )}

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-900 mb-2">Before you chat...</h4>
        <div className="text-sm text-blue-700 space-y-1">
          <p>• Have your account information ready</p>
          <p>• Describe your issue clearly</p>
          <p>• Screenshots can help resolve technical issues</p>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;