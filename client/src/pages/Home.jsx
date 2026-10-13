import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import API from '../api/axios';
import Hero3D from '../components/Hero3D';
import TiltCard from '../components/TiltCard';
import Reveal3D from '../components/Reveal3D';

function Home() {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    async function fetchFeatured() {
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
    }

    fetchFeatured();
  }, []);

  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-blue-400 font-medium mb-2">Welcome to my portfolio</p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Hi, I am{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Gaurav
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            React Js Developer with 6 plus years of experience building fast,
            scalable and good looking web applications.
          </p>
          <div className="flex gap-4">
            <motion.div whileHover={{ scale: 1.08, y: -3 }}>
              <Link
                to="/projects"
                className="block bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-md font-medium shadow-lg shadow-blue-600/30"
              >
                View My Work
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.08, y: -3 }}>
              <Link
                to="/contact"
                className="block bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-md font-medium border border-gray-700"
              >
                Get In Touch
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <Hero3D />
        </motion.div>
      </section>

      <section className="py-12">
        <Reveal3D>
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        </Reveal3D>

        {loading && <p className="text-gray-400">Loading...</p>}

        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map(function (project) {
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
                        className="rounded-md mb-3 w-full h-48 object-cover"
                      />
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                        {project.description}
                      </p>
                    </Link>
                  </TiltCard>
                </Reveal3D>
              );
            })}
          </div>
        )}

        <Reveal3D>
          <div className="text-center mt-10">
            <Link to="/projects" className="text-blue-400 hover:underline">
              View all projects
            </Link>
          </div>
        </Reveal3D>
      </section>
    </div>
  );
}

export default Home;