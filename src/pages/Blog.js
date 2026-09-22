import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = ({ className }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/assets/blogposts/index.json')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <div className={className}>
      <main className="min-h-screen bg-sage">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-12">Writing</h1>
          
          <div className="space-y-6">
            {blogs.map((blog, index) => (
              <Link 
                to={`/blog/${blog.slug}`}
                key={index}
                className="block bg-sage rounded-lg p-6 transition-all"
              >
                <h2 className="text-xl font-semibold text-gray-900 hover:text-blue-600">{blog.title}</h2>
                <p className="text-sm text-gray-600 mt-1">{blog.date}</p>
                <p className="text-gray-700 mt-3">{blog.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
