const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('../models/Project');
const Blog = require('../models/Blog');

dotenv.config();

const projects = [
  {
    title: 'Task Management App',
    slug: 'task-management-app',
    description: 'A full-stack task management application with team collaboration, real-time updates, and role-based access control. Built to handle multi-tenant workspaces where teams can create projects, assign tasks, and track progress.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT'],
    thumbnail: 'https://via.placeholder.com/600x400?text=Task+Manager',
    githubUrl: 'https://github.com/gauravdev/task-manager',
    liveUrl: 'https://gaurav-task-manager.vercel.app',
    featured: true,
    order: 1,
  },
  {
    title: 'E-Commerce Platform',
    slug: 'ecommerce-platform',
    description: 'A complete e-commerce solution with product catalog, cart management, Stripe payment integration, and order tracking. Includes an admin panel for inventory management.',
    techStack: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    thumbnail: 'https://via.placeholder.com/600x400?text=E-Commerce',
    githubUrl: 'https://github.com/gauravdev/ecommerce-app',
    liveUrl: 'https://gaurav-ecommerce.vercel.app',
    featured: true,
    order: 2,
  },
  {
    title: 'Real-Time Chat Application',
    slug: 'realtime-chat-app',
    description: 'A WebSocket-based chat application supporting private messaging, group chats, and typing indicators. Built with scalability in mind using Redis for session management.',
    techStack: ['React', 'Socket.io', 'Node.js', 'Express', 'MongoDB', 'Redis'],
    thumbnail: 'https://via.placeholder.com/600x400?text=Chat+App',
    githubUrl: 'https://github.com/gauravdev/chat-app',
    liveUrl: 'https://gaurav-chat-app.vercel.app',
    featured: false,
    order: 3,
  },
];

const blogs = [
  {
    title: 'Why I Switched to the MERN Stack',
    slug: 'why-i-switched-to-mern',
    summary: 'A look at my journey learning full-stack development and why MongoDB, Express, React, and Node.js became my go-to stack.',
    content: '## Introduction\n\nWhen I started my development journey...\n\n## Why MongoDB\n\n...\n\n## Conclusion\n\n...',
    coverImage: 'https://via.placeholder.com/800x400?text=MERN+Stack',
    tags: ['MERN', 'Career', 'JavaScript'],
    published: true,
  },
  {
    title: 'Building Scalable REST APIs with Express',
    slug: 'building-scalable-rest-apis',
    summary: 'Best practices I follow when structuring Express APIs for production, including error handling, validation, and rate limiting.',
    content: '## Introduction\n\nA well-structured API...\n\n## Folder Structure\n\n...\n\n## Conclusion\n\n...',
    coverImage: 'https://via.placeholder.com/800x400?text=REST+APIs',
    tags: ['Node.js', 'Express', 'Backend'],
    published: true,
  },
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected for seeding...');

    await Project.deleteMany();
    await Blog.deleteMany();
    console.log('Old data cleared...');

    await Project.insertMany(projects);
    await Blog.insertMany(blogs);
    console.log('Seed data inserted successfully!');

    process.exit();
  } catch (error) {
    console.error(`Error seeding data: ${error.message}`);
    process.exit(1);
  }
};

seedData();