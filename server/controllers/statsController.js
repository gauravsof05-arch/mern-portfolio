const Stats = require('../models/Stats');

// @desc    Increment resume download count
// @route   POST /api/stats/resume-download
const trackResumeDownload = async (req, res) => {
  try {
    // findOneAndUpdate with upsert: true means "if no stats doc exists yet, create one"
    const stats = await Stats.findOneAndUpdate(
      {},
      { $inc: { resumeDownloads: 1 } },
      { new: true, upsert: true }
    );
    res.status(200).json(stats);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get stats (admin use)
// @route   GET /api/stats
const getStats = async (req, res) => {
  try {
    const stats = await Stats.findOne();
    res.status(200).json(stats || { resumeDownloads: 0 });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { trackResumeDownload, getStats };