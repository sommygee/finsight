import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ id, title, excerpt, date, author }) => {
  return (
    <article className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>{author}</span>
        <span>{date}</span>
      </div>
      <Link
        to={`/blog/${id}`}
        className="mt-4 inline-block text-brand-primary font-medium hover:underline"
      >
        Read More →
      </Link>
    </article>
  );
};

export default BlogCard;
