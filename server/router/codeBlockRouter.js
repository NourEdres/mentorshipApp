const express = require('express');
const router = express.Router();
const codeBlockController = require('../controller/codeBlockController');

router.get('/', codeBlockController.getCodeBlocks);
router.get('/:id', codeBlockController.getCodeBlock);
router.post('/', codeBlockController.createCodeBlock);
router.put('/:id', codeBlockController.updateCodeBlock);



module.exports = router;
