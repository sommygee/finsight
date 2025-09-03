import React from "react";
import Navbar from "../../components/ui/Navbar"; // ✅ same as homepage
import Footer from "../../components/ui/Footer";
import BlogHero from "./components/BlogHero";
import BlogCard from "./components/BlogCard";
import NewsletterForm from "../../components/ui/NewsletterForm";

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: "The Rise of AI in Investment Strategies",
      excerpt:
        "Discover how artificial intelligence is transforming the financial world and helping investors make smarter, faster decisions.",
      author: "Jane Doe",
      date: "Sept 2, 2025",
    },
    {
      id: 2,
      title: "5 Tips for Building a Strong Portfolio",
      excerpt:
        "From diversification to risk management, learn the essential strategies to keep your portfolio strong and resilient.",
      author: "John Smith",
      date: "Aug 28, 2025",
    },
    {
      id: 3,
      title: "Why Long-Term Thinking Wins in Investing",
      excerpt:
        "Patience pays off. Here’s why long-term strategies consistently outperform short-term speculation.",
      author: "Sarah Lee",
      date: "Aug 20, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Blog Hero */}
      <BlogHero />

      {/* Blog Content */}
      <main className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </main>
            {/* Subscribe CTA */}
      <section className="bg-brand-primary text-white py-16">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-6">
            Subscribe to our newsletter for the latest investment insights,
            strategies, and updates from FinSight.
          </p>

          {/* Newsletter Form */}
          <NewsletterForm />
        </div>
      </section>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BlogPage;
