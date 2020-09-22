const express = require('express');
const router = express.Router();

router.get("/", function (req, res, next){
	res.render("form");
})

router.post("/", function (req, res, next){
	const messages = req.app.get("messages");
	const text = req.body.message;
	const user = req.body.user;

	messages.push({text, user, added: new Date()});
	
	res.redirect("/");
})

module.exports = router;