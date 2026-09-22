import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const BlogPost = ({ className }) => {
  const [post, setPost] = useState('');
  const { slug } = useParams();

  useEffect(() => {
    fetch(`/assets/blogposts/${slug}.md`)
      .then(response => response.text())
      .then(text => setPost(text))
      .catch(error => console.error('Error fetching blog post:', error));
  }, [slug]);

  return (
    <div className={className}>
      <main className="min-h-screen bg-sage">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Link to="/blog" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
            ← Back to Writing
          </Link>
          <article className="prose prose-slate lg:prose-lg max-w-none bg-sage rounded-lg p-8">
            <ReactMarkdown>{post}</ReactMarkdown>
          </article>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;
