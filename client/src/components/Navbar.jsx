import { Link } from 'react-router-dom';
import API from '../api/axios';

function Navbar() {
  const handleResumeClick = async () => {
    try {
      // Track the download in the backend first
      await API.post('/stats/resume-download');
    } catch (err) {
      console.error('Failed to track download', err);
      // Don't block the actual download even if tracking fails
    }

    // Trigger the actual file download
    // Place your resume PDF in client/public/resume.pdf
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Gaurav_Resume.pdf';
    link.click();
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex gap-6 items-center">
      <Link to="/" className="hover:text-blue-400">Home</Link>
      <Link to="/about" className="hover:text-blue-400">About</Link>
      <Link to="/projects" className="hover:text-blue-400">Projects</Link>
      <Link to="/blog" className="hover:text-blue-400">Blog</Link>
      <Link to="/contact" className="hover:text-blue-400">Contact</Link>
      <button
        onClick={handleResumeClick}
        className="ml-auto bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md text-sm font-medium"
      >
        Download Resume
      </button>
    </nav>
  );
}

export default Navbar;