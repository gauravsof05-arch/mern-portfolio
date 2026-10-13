import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import TiltCard from '../components/TiltCard';
import Reveal3D from '../components/Reveal3D';

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
    <div className="max-w-3xl mx-auto">
      <Reveal3D>
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
      </Reveal3D>

      <Reveal3D>
        <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
          <div className="w-40 h-40 shrink-0">
            <TiltCard strength={18} className="rounded-full">
              <img
                src="/profile.jpg"
                alt="Gaurav"
                className="w-40 h-40 rounded-full object-cover border-4 border-gray-700"
              />
            </TiltCard>
          </div>
          <div>
            <p className="text-gray-300 leading-relaxed">
              Hi, I am Gaurav, a React JS Developer with over 6 years of experience building web applications User Interfaces.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              I specialize in React, Node.js, Express, and MongoDB, and I enjoy turning complex problems into clean, maintainable code.
            </p>
          </div>
        </div>
      </Reveal3D>

      <Reveal3D>
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map(function (skill) {
              return (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.2, y: -6, rotate: 3 }}
                  className="bg-gray-800 border border-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm cursor-default shadow-lg"
                >
                  {skill}
                </motion.span>
              );
            })}
          </div>
        </div>
      </Reveal3D>

      <Reveal3D>
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <TiltCard strength={5} className="rounded-lg">
            <div className="bg-gray-800/80 border border-gray-700 rounded-lg p-5">
              <h3 className="text-lg font-medium">Software Engineer</h3>
              <p className="text-gray-400 text-sm">FastLoan, June 2025 to Present</p>
              <p className="text-gray-300 mt-2">
               Single-handedly built FastLoan, a loan-lending Android application, owning the complete lifecycle — planning,
                development, testing, deployment, and maintenance.
               Planned product scope, user flows, and system architecture for two separate experiences: a customer app and an admin
                side.
               Developed the mobile frontend in React Native (Expo), building reusable, responsive components for customer and admin
                workflows.
               Designed and built the backend with Node.js, Express.js, and MongoDB, creating RESTful APIs and data models to power
                the app.
               Tested the application end to end, validating APIs with Postman and performing functional and regression testing on
                Android devices.
               Deployed and hosted the backend on AWS EC2, configured a custom domain for the API, and distributed the app to users
                via APK builds.
               Managed source code with Git/GitHub and independently handled bug fixes, enhancements, and releases
              </p>
            </div>
          </TiltCard>
          <TiltCard strength={5} className="rounded-lg">
            <div className="bg-gray-800/80 border border-gray-700 rounded-lg p-5">
              <h3 className="text-lg font-medium">Application Developer</h3>
              <p className="text-gray-400 text-sm">Telus Digitals, April 2022 to May 2025</p>
              <p className="text-gray-300 mt-2">
               Developed and maintained responsive, user-friendly React.js applications with a focus on usability, performance, and
               reliability.
               Collaborated with designers, backend developers, and QA teams to translate business and technical requirements into
               effective frontend solutions.
               Wrote clean, scalable, and maintainable code, following established development standards and best practices.
               Participated in code reviews, providing and incorporating constructive feedback to continuously improve code quality.
               Troubleshot, debugged, and resolved application issues across different browsers and environments to maintain a seamless
               user experience.
               Integrated RESTful APIs into frontend components, validating responses using Postman and Swagger documentation.
               Contributed to Agile ceremonies, including sprint planning, daily stand-ups, and retrospectives.
               Engaged with stakeholders and business teams to gather feedback and identify opportunities for product and workflow
               enhancements.
               Supported software testing by contributing to unit tests and collaborating with QA teams to validate functionality before
               deployment.
               Maintained technical documentation covering processes, guidelines, and application components.
              </p>
            </div>
          </TiltCard>
          <TiltCard strength={5} className="rounded-lg">
            <div className="bg-gray-800/80 border border-gray-700 rounded-lg p-5">
              <h3 className="text-lg font-medium">Software Developer Associate</h3>
              <p className="text-gray-400 text-sm">Talent Mine India, April 2020 to March 2022</p>
              <p className="text-gray-300 mt-2">
                Built responsive, cross-browser user interfaces using JavaScript (ES6+), React.js, HTML5, and CSS3, with a focus on
                usability and reliability.
                Collaborated with backend developers and QA teams to integrate RESTful APIs into frontend components.
                Troubleshot and resolved UI issues across browsers and devices to maintain a consistent user experience.
                Contributed to Agile ceremonies and sprint activities, including planning, stand-ups, and retrospectives.
                Logged and tracked defects, collaborating closely with developers to drive timely resolution.
              </p>
            </div>
          </TiltCard>
          
        </div>
      </Reveal3D>

      <Reveal3D>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Find Me Online</h2>
          <div className="flex gap-6 text-3xl">
            <motion.a
              whileHover={{ scale: 1.3, y: -6, rotate: 8 }}
              href="https://github.com/gauravsof05-arch"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.3, y: -6, rotate: 8 }}
              href="https://linkedin.com/in/gauravkumar-627915171"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.3, y: -6, rotate: 8 }}
              href="mailto:youremail@example.com"
              className="hover:text-blue-400"
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </div>
      </Reveal3D>
    </div>
  );
}

export default About;