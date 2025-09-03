import React, { useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
      // Here you can also call your backend/email API if needed
    }
  };

  return (
    <div>
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-brand-secondary outline-none flex-1"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-white text-brand-primary rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Subscribe
          </button>
        </form>
      ) : (
        <p className="text-green-200 font-medium">
          ✅ Thanks for subscribing! You’ll start receiving updates soon.
        </p>
      )}
    </div>
  );
};

export default NewsletterForm;
