import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../api/axios';
import TiltCard from '../components/TiltCard';
import Reveal3D from '../components/Reveal3D';

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchBlogs() {
      try {
        const response = await API.get('/blogs');
        setBlogs(response.data);
      } catch (err) {
        setError('Failed to load blog posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  if (loading) return <p className="text-gray-400">Loading posts...</p>;
  if (error) return <p className="text-red-400">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto">
      <Reveal3D>
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
      </Reveal3D>

      <div className="flex flex-col gap-8">
        {blogs.map(function (blog) {
          return (
            <Reveal3D key={blog._id}>
              <TiltCard strength={6} className="rounded-lg">
                <Link
                  to={'/blog/' + blog.slug}
                  className="block bg-gray-800/80 rounded-lg p-5 border border-gray-700 shadow-2xl"
                >
                  <h2 className="text-2xl font-semibold">{blog.title}</h2>
                  <p className="text-gray-400 mt-2">{blog.summary}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {blog.tags.map(function (tag) {
                      return (
                        <span
                          key={tag}
                          className="text-xs bg-purple-600 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                  <p className="text-sm text-gray-500 mt-3">{blog.views} views</p>
                </Link>
              </TiltCard>
            </Reveal3D>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;