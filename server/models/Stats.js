const mongoose = require('mongoose');

const statsSchema = new mongoose.Schema({
  resumeDownloads: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('Stats', statsSchema);