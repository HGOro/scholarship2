const router = require("express").Router();

const UserRoutes 	= require("./user");
const AccountRoutes = require("./account");
const QuizRoutes    = require("./quiz");


router.use("/user", UserRoutes);
router.use("/account", AccountRoutes);
router.use("/quiz", QuizRoutes);


module.exports = router;
