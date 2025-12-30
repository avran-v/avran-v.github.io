import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ className }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/assets/blogposts/index.json')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching blog posts:', error));
  }, []);

  return (
    <div className={className}>
      <main className="w-full">
        <div className="flex flex-col items-center mt-5 w-full">
          <p className="text-center mb-4">Welcome to my blog!</p>
          <div className="w-2/3">
            {posts.map((post, index) => (
              <Link 
                to={`/blog/${post.slug}`} 
                key={index}
                className="block mb-6 p-4 border rounded-lg hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.date}</p>
                <p className="mt-2">{post.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Blog;
