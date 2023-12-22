const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

router.post('/admin/add-question', quizController.addQuestion);
router.delete('/admin/remove-question/:id', quizController.removeQuestion);
router.get('/questions', quizController.getQuestions);
router.post('/submit-answer', quizController.submitAnswer);

module.exports = router;
