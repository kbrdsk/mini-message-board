const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
	const messages = req.app.get("messages");
	res.render("index", { title: "Mini Messageboard", messages: messages });
});

module.exports = router;
