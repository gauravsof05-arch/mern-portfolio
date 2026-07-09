import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import API from '../api/axios';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await API.get('/projects');
        setProjects(response.data);
      } catch (err) {
        setError('Failed to load projects');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p className="text-gray-400">Loading projects...</p>;
  if (error) return <p className="text-red-400">{error}</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(function (project) {
          return (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Link
                to={'/projects/' + project.slug}
                className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition block"
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="rounded-md mb-3 w-full h-40 object-cover"
                />
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.techStack.map(function (tech) {
                    return (
                      <span
                        key={tech}
                        className="text-xs bg-blue-600 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;