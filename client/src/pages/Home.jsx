import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../api/axios';

function Home() {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const response = await API.get('/projects');
        const featured = response.data.filter(function (p) {
          return p.featured;
        });
        setFeaturedProjects(featured);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  return (
    <div>
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold mb-4">Hi, I am Gaurav</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          A MERN Stack Developer with 5 plus years of experience building full-stack web applications.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <Link to="/projects" className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-md font-medium">
            View My Work
          </Link>
          <Link to="/contact" className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-md font-medium">
            Get In Touch
          </Link>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>

        {loading && <p className="text-gray-400">Loading...</p>}

        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map(function (project) {
              return (
                <Link
                  key={project._id}
                  to={"/projects/" + project.slug}
                  className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition"
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="rounded-md mb-3 w-full h-48 object-cover"
                  />
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </Link>
              );
            })}
          </div>
        )}

        <div className="text-center mt-8">
          <Link to="/projects" className="text-blue-400 hover:underline">
            View all projects
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;