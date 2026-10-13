import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import API from '../api/axios';
import TiltCard from '../components/TiltCard';
import Reveal3D from '../components/Reveal3D';

function ProjectDetail() {
  const params = useParams();
  const slug = params.slug;
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(
    function () {
      async function fetchProject() {
        try {
          const response = await API.get('/projects/' + slug);
          setProject(response.data);
        } catch (err) {
          setError('Project not found');
          console.error(err);
        } finally {
          setLoading(false);
        }
      }

      fetchProject();
    },
    [slug]
  );

  if (loading) return <p className="text-gray-400">Loading project...</p>;
  if (error) return <p className="text-red-400">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto">
      <Link to="/projects" className="text-blue-400 hover:underline">
        Back to Projects
      </Link>

      <div className="mt-4 mb-6">
        <TiltCard strength={6} className="rounded-lg">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="rounded-lg w-full h-64 object-cover"
          />
        </TiltCard>
      </div>

      <Reveal3D>
        <h1 className="text-4xl font-bold mb-3">{project.title}</h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map(function (tech) {
            return (
              <span key={tech} className="text-sm bg-blue-600 px-3 py-1 rounded-full">
                {tech}
              </span>
            );
          })}
        </div>
      </Reveal3D>

      <Reveal3D>
        <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>
      </Reveal3D>

      <Reveal3D>
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
      </Reveal3D>
    </div>
  );
}

export default ProjectDetail;