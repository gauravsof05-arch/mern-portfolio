import { useState } from 'react';
import { motion } from 'framer-motion';
import API from '../api/axios';
import Reveal3D from '../components/Reveal3D';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      await API.post('/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err.response?.data?.message || 'Something went wrong. Please try again.'
      );
    }
  }

  return (
    <div className="max-w-lg mx-auto">
      <Reveal3D>
        <h1 className="text-4xl font-bold mb-6">Get In Touch</h1>
      </Reveal3D>

      {status === 'success' && (
        <p className="bg-green-800 text-green-200 p-3 rounded-md mb-4">
          Message sent successfully. I will get back to you soon.
        </p>
      )}

      {status === 'error' && (
        <p className="bg-red-800 text-red-200 p-3 rounded-md mb-4">{errorMsg}</p>
      )}

      <Reveal3D>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-gray-800/60 border border-gray-700 rounded-xl p-6 shadow-2xl"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-gray-900 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-gray-900 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            minLength={10}
            rows={5}
            className="bg-gray-900 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <motion.button
            type="submit"
            disabled={status === 'submitting'}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 disabled:cursor-not-allowed px-4 py-2 rounded-md font-medium shadow-lg shadow-blue-600/30"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>
      </Reveal3D>
    </div>
  );
}

export default Contact;