import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../../components/ui/Navbar";
import Footer from "../../components/ui/Footer";
import Image from "../../components/AppImage";

// Fake blog posts (you can later replace with API or DB)
const posts = [
  {
    id: 1,
    title: "The Rise of AI in Investment Strategies",
    content: `
      Artificial Intelligence (AI) is changing the way we think about investing.
      From predictive analytics to automated trading bots, AI offers tools that
      help investors make smarter, data-driven decisions.
      
      At FinSight, our AI-driven platform analyzes market signals, news sentiment,
      and historical data to recommend strategies tailored to your goals.
      
      Whether you're a beginner or an expert, AI can enhance your ability to spot
      opportunities and manage risks effectively.
    `,
    author: "Jane Doe",
    date: "Sept 2, 2025",
    image:
      "https://images.unsplash.com/photo-1661961112549-f3e1f6a6f4b6?w=1600&h=800&fit=crop",
  },
  {
    id: 2,
    title: "5 Tips for Building a Strong Portfolio",
    content: `
      A strong portfolio balances risk and reward. Here are five key tips:

      1. Diversify across industries and asset types.
      2. Rebalance periodically to maintain alignment with goals.
      3. Focus on long-term growth rather than short-term speculation.
      4. Keep an emergency fund separate from your investments.
      5. Monitor global events that may affect your assets.

      By following these strategies, you’ll build a portfolio designed to last.
    `,
    author: "John Smith",
    date: "Aug 28, 2025",
    image:
      "https://images.unsplash.com/photo-1522204501871-9c925421675b?w=1600&h=800&fit=crop",
  },
  {
    id: 3,
    title: "Why Long-Term Thinking Wins in Investing",
    content: `
      Markets fluctuate in the short term, but long-term strategies win.
      Investors who hold quality assets and resist emotional decisions
      consistently outperform those chasing quick gains.

      The key is patience, discipline, and sticking to a well-researched plan.
      Remember: time in the market beats timing the market.
    `,
    author: "Sarah Lee",
    date: "Aug 20, 2025",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&h=800&fit=crop",
  },
];

const BlogPost = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Post not found.</p>
      </div>
    );
  }

  // Find related posts (exclude current one)
  const related = posts.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="text-sm text-blue-100">
            By <span className="font-semibold">{post.author}</span> • {post.date}
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-6 -mt-12">
        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
          <Image
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <article className="prose prose-lg max-w-none text-gray-800">
          {post.content.split("\n").map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </article>

        {/* Author Box */}
        <div className="mt-12 bg-white shadow-md rounded-2xl p-6 border border-gray-100 flex items-center space-x-4">
          <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
            {post.author[0]}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{post.author}</h4>
            <p className="text-sm text-gray-600">
              Investment writer & FinSight contributor
            </p>
          </div>
        </div>
      </main>

      {/* Related Articles */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {related.map((rel) => (
              <Link
                key={rel.id}
                to={`/blog/${rel.id}`}
                className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition p-6"
              >
                <Image
                  src={rel.image}
                  alt={rel.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {rel.title}
                </h3>
                <p className="text-sm text-gray-600">
                  By {rel.author} • {rel.date}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
