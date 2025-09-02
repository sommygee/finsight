import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
    // 🔑 Later you can add real login logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Username */}
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="mt-1 block w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-brand-primary focus:ring focus:ring-brand-primary focus:ring-opacity-50"
          placeholder="Enter your username"
          required
        />
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="mt-1 block w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-brand-primary focus:ring focus:ring-brand-primary focus:ring-opacity-50"
          placeholder="Enter your password"
          required
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="w-full bg-brand-primary text-white py-3 px-4 rounded-lg hover:bg-brand-secondary transition"
      >
        Log In
      </button>

      {/* Link to signup */}
      <p className="text-sm text-center text-gray-600 mt-4">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-brand-primary hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
