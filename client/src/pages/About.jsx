import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const skills = [
  'JavaScript',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'Redux',
  'Tailwind CSS',
  'REST APIs',
  'Git',
  'Docker',
];

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-3xl mx-auto"
    >

      <h1 className="text-4xl font-bold mb-6">
        About Me
      </h1>

      <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
        <img
          src="/profile.jpg"
          alt="Gaurav"
          className="w-40 h-40 rounded-full object-cover border-4 border-gray-700"
        />
        <div>
          <p className="text-gray-300 leading-relaxed">
            Hi, I am Gaurav, a MERN Stack Developer with over 5 years of experience building full-stack web applications.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            I specialize in React, Node.js, Express, and MongoDB, and I enjoy turning complex problems into clean, maintainable code.
          </p>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map(function (skill) {
            return (
              <span key={skill} className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            );
          })}
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Experience
        </h2>
        <div className="border-l-2 border-gray-700 pl-4">
          <h3 className="text-lg font-medium">
            Application Developer
          </h3>
          <p className="text-gray-400 text-sm">
            TELUS INTERNATIONAL, APRIL 2022 to MAY 2025
          </p>
          <p className="text-gray-300 mt-2">
            DESIGNED AND DELIVERED SCALABLE FULL-STACK APPLICATIONS USING JAVASCRIPT, REACT AND NODE.JS IN
            PRODUCTION ENVIRONMENTS.
            BUILT MODULAR BACKEND SERVICES AND REST APIS SUPPORTING COMMUNICATION-HEAVY WORKFLOWS AND
            BUSINESS-CRITICAL INTEGRATIONS.
            CONTRIBUTED TO REAL-TIME COMMUNICATION CAPABILITIES USING WEBSOCKET / SOCKET.IO- PATTERNS.
            IMPLEMENTED EVENT-DRIVEN SERVICE INTERACTIONS USING ASYNCHRONOUS WORKFLOWS AND PUB/SUB
            MESSAGING CONCEPTS.
            DEVELOPED SECURE API INTEGRATIONS USING OAUTH-BASED AUTHENTICATION AND AUTHORIZATION
            PATTERNS.
            OPTIMIZED APPLICATION PERFORMANCE THROUGH DATABASE TUNING, EFFICIENT API DESIGN, CACHING
            STRATEGIES, AND DEBUGGING.
            WORKED WITH SCALABLE DATA SYSTEMS LEVERAGING MONGODB, WITH EXPOSURE TO POSTGRESQL AND
            REDIS-BACKED PATTERNS.
            CONTRIBUTED TO AUTOMATED TESTING, VALIDATION STRATEGIES, AND AI-ASSISTED TEST GENERATION TO
            IMPROVE SOFTWARE QUALITY.
            DELIVERED PRODUCTION-READY FEATURES IN AGILE/SCRUM SQUADS THROUGH CODE REVIEWS, SPRINT
            PLANNING, AND ITERATIVE RELEASES.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Find Me Online
        </h2>
        <div className="flex gap-6 text-2xl">
          <a href="https://github.com/gauravsof05-arch" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/gaurav-kumar-43ab9b417/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaLinkedin />
          </a>
          <a href="mailto:youremail@example.com" className="hover:text-blue-400">
            <FaEnvelope />
          </a>
        </div>
      </div>

    </motion.div>
  );
}

export default About;