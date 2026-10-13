import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import API from '../api/axios';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

function Navbar() {
  async function handleResumeClick() {
    try {
      await API.post('/stats/resume-download');
    } catch (err) {
      console.error('Failed to track download', err);
    }

    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Gaurav_Resume.pdf';
    link.click();
  }

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/70 backdrop-blur border-b border-gray-800 text-white px-6 py-4 flex gap-6 items-center">
      {links.map(function (item) {
        return (
          <motion.div
            key={item.to}
            whileHover={{ y: -3, scale: 1.12, rotateX: 15 }}
            style={{ transformPerspective: 600 }}
          >
            <Link to={item.to} className="hover:text-blue-400">
              {item.label}
            </Link>
          </motion.div>
        );
      })}

      <motion.button
        onClick={handleResumeClick}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="ml-auto bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md text-sm font-medium shadow-lg shadow-blue-600/30"
      >
        Download Resume
      </motion.button>
    </nav>
  );
}

export default Navbar;