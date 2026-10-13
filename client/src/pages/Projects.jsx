import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../api/axios';
import TiltCard from '../components/TiltCard';
import Reveal3D from '../components/Reveal3D';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchProjects() {
      try {
        const response = await API.get('/projects');
        setProjects(response.data);
      } catch (err) {
        setError('Failed to load projects');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) return <p className="text-gray-400">Loading projects...</p>;
  if (error) return <p className="text-red-400">{error}</p>;

  return (
    <div>
      <Reveal3D>
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      </Reveal3D>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(function (project) {
          return (
            <Reveal3D key={project._id}>
              <TiltCard className="rounded-xl">
                <Link
                  to={'/projects/' + project.slug}
                  className="block bg-gray-800/80 rounded-xl p-4 border border-gray-700 shadow-2xl"
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
                          className="text-xs bg-blue-600/80 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </Link>
              </TiltCard>
            </Reveal3D>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;