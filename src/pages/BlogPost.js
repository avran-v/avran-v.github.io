import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
      <main className="w-full">
        <div className="flex flex-col items-center mt-5 w-full">
          <article className="prose prose-slate lg:prose-lg mx-auto px-4">
            <ReactMarkdown>{post}</ReactMarkdown>
          </article>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;
