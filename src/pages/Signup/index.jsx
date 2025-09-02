import React from "react";
import Navigation from "pages/navigation-landing-page/components/Navigation";
import Footer from "components/ui/Footer";
import SignupForm from "./components/SignupForm";

const SignupPage = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Navigation />

      {/* Add space below navbar */}
      <main className="min-h-screen flex flex-col justify-center items-center bg-gray-50 pt-32 pb-16">
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-brand-primary mb-8">
            Create Your Account
          </h2>
          <SignupForm />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default SignupPage;
