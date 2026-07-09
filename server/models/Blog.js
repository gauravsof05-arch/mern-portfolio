const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Blog title is required'],
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true, // used in URL, e.g. /blog/why-i-switched-to-mern
    },
    summary: {
      type: String,
      required: true, // short preview shown on the blog list page
    },
    content: {
      type: String,
      required: true, // full Markdown content
    },
    coverImage: {
      type: String, // Cloudinary URL
    },
    tags: {
      type: [String], // e.g. ['MERN', 'MongoDB', 'Career']
      default: [],
    },
    published: {
      type: Boolean,
      default: true, // lets you draft posts without deleting them
    },
    views: {
      type: Number,
      default: 0, // increments each time someone reads the post
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Blog', blogSchema);