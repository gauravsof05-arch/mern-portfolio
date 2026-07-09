import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../api/axios';

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await API.get('/blogs');
        setBlogs(response.data);
      } catch (err) {
        setError('Failed to load blog posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p className="text-gray-400">Loading posts...</p>;
  if (error) return <p className="text-red-400">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="flex flex-col gap-6">
        {blogs.map((blog) => (
          <Link
            key={blog._id}
            to={`/blog/${blog.slug}`}
            className="bg-gray-800 rounded-lg p-5 hover:bg-gray-700 transition"
          >
            <h2 className="text-2xl font-semibold">{blog.title}</h2>
            <p className="text-gray-400 mt-2">{blog.summary}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-purple-600 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-3">
              {blog.views} views
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog;