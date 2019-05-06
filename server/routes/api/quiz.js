const router = require("express").Router();
const quizController = require("../../controllers/quiz-controller");

// Matches with "/api/quiz"
router.route("/")
  .get(quizController.find)
  .post(quizController.create);

module.exports = router;
