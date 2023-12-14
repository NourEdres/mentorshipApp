const mongoose = require('mongoose');

const codeBlockSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  correctCode: {
    type: String,
  },
  code: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('CodeBlock', codeBlockSchema);
