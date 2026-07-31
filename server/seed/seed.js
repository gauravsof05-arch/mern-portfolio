const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('../models/Project');
const Blog = require('../models/Blog');

dotenv.config();

const projects = const projects = [
  {
    title: 'ShopEasy',
    slug: 'shopeasy',
    description: 'A full-stack shopping cart application with complete backend and frontend. Features JWT authentication with bcrypt password hashing, protected cart routes, and Mongoose models for products, users, and orders. The frontend uses React with Redux Toolkit for state management, Axios for API calls, and localStorage for persistent token storage.',
    techStack: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Bcrypt'],
    thumbnail: '/ShopEasy.png',
    githubUrl: 'https://github.com/gauravsof05-arch/ShoppingCart',
    liveUrl: 'https://shopping-cart-i91n9http-gaurav-dev1.vercel.app/',
    featured: true,
    order: 1,
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