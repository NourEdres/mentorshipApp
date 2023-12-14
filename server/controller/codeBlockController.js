const CodeBlock = require('../model/CodeBlock');

exports.getCodeBlocks = async (req, res) => {
  try {
    const codeBlocks = await CodeBlock.find({});
    res.json(codeBlocks);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getCodeBlock = async (req, res) => {
  try {
    const codeBlock = await CodeBlock.findById(req.params.id);
    res.json(codeBlock);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createCodeBlock = async (req, res) => {
  try {
    const { title, correctCode, code } = req.body;

    const newCodeBlock = new CodeBlock({ title, correctCode, code });
    const savedCodeBlock = await newCodeBlock.save();

    res.status(201).json(savedCodeBlock);
  } catch (error) {
    console.error('Error in createCodeBlock:', error);

    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: "Invalid data format.", details: error.message });
    }

    res.status(500).json({ message: "An error occurred while creating the code block.", details: error.message });
  }
};

exports.updateCodeBlock = async (req, res) => {
  try {
    const { title, code } = req.body;

    // Validate the input
    if (!title || !code) {
      return res.status(400).json({ message: "Title and code are required." });
    }

    // Find the code block in the database
    const codeBlock = await CodeBlock.findById(req.params.id);

    // Update the code block
    codeBlock.title = title;
    codeBlock.code = code;

    // Save the updated code block
    const savedCodeBlock = await codeBlock.save();

    // Send success response
    res.json(savedCodeBlock);
  } catch (error) {
    console.error('Error in updateCodeBlock:', error);
    
    // Determine if it's a validation error
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: "Invalid data format." });
    }

    // Send generic error response for other types of errors
    res.status(500).json({ message: "An error occurred while updating the code block." });
  }
};
