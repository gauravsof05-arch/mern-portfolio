const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true, // used in the URL, e.g. /projects/task-manager-app
    },
    description: {
      type: String,
      required: true,
    },
    techStack: {
      type: [String], // array of strings, e.g. ['React', 'Node.js', 'MongoDB']
      required: true,
    },
    thumbnail: {
      type: String, // Cloudinary image URL
      required: true,
    },
    githubUrl: {
      type: String,
    },
    liveUrl: {
      type: String,
    },
    featured: {
      type: Boolean,
      default: false, // lets you pin top projects to the homepage
    },
    order: {
      type: Number,
      default: 0, // controls display order
    },
  },
  { timestamps: true } // adds createdAt and updatedAt automatically
);

module.exports = mongoose.model('Project', projectSchema);