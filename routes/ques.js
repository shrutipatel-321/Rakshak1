
const express = require('express');
const router = express.Router();
const quesController = require('../controllers/quesController');

router.get('/question' , quesController.getQues);
router.post('/question' , quesController.submitAns);

module.exports = router;
