const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const serverless = require('serverless-http');
const connectDB = require('../config/db');

dotenv.config();
connectDB();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/projects', require('../routes/projectRoutes'));
app.use('/api/blogs', require('../routes/blogRoutes'));
app.use('/api/contact', require('../routes/contactRoutes'));
app.use('/api/stats', require('../routes/statsRoutes'));

app.get('/', (req, res) => {
  res.json({ message: 'Portfolio API is running' });
});

module.exports = app;
module.exports.handler = serverless(app);