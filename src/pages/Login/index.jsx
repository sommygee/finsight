import React from "react";
import Navigation from "../navigation-landing-page/components/Navigation";
import Footer from "components/ui/Footer";
import LoginForm from "./components/LoginForm";

const LoginPage = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Navigation />

      {/* Add space below navbar */}
      <main className="min-h-screen flex flex-col justify-center items-center bg-gray-50 pt-32 pb-16">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-center text-brand-primary mb-8">
            Welcome Back
          </h2>
          <LoginForm />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default LoginPage;
