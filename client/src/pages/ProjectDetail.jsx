import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import API from '../api/axios';

function ProjectDetail() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await API.get(`/projects/${slug}`);
        setProject(response.data);
      } catch (err) {
        setError('Project not found');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  if (loading) return <p className="text-gray-400">Loading project...</p>;
  if (error) return <p className="text-red-400">{error}</p>;
  if (!project) return null;

  return (
    <div className="max-w-3xl mx-auto">
      <Link to="/projects" className="text-blue-400 hover:underline mb-4 inline-block">
        &larr; Back to Projects
      </Link>

      <img
        src={project.thumbnail}
        alt={project.title}
        className="rounded-lg w-full h-64 object-cover mb-6"
      />

      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech) => (
          <span key={tech} className="text-sm bg-blue-600 px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>

      <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>

      <div className="flex gap-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md"
          >
            View Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;