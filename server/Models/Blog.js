const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  author: { type: String, required: true },
  tags: [{ type: String }],
  content: { type: String },
  image: { type: String },
});

module.exports = mongoose.model('Blog', blogSchema);
