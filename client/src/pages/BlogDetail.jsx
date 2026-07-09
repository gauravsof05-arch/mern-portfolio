import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import API from '../api/axios';

function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await API.get(`/blogs/${slug}`);
        setBlog(response.data);
      } catch (err) {
        setError('Blog post not found');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) return <p className="text-gray-400">Loading post...</p>;
  if (error) return <p className="text-red-400">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto">
      <Link to="/blog" className="text-blue-400 hover:underline">
        ← Back to Blog
      </Link>

      <h1 className="text-4xl font-bold mt-4 mb-3">{blog.title}</h1>

      <div className="flex flex-wrap gap-2 mb-4">
        {blog.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-purple-600 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-sm text-gray-500 mb-6">{blog.views} views</p>

      {/* whitespace-pre-line preserves line breaks from the content string */}
      <div className="text-gray-300 leading-relaxed whitespace-pre-line">
        {blog.content}
      </div>
    </div>
  );
}

export default BlogDetail;