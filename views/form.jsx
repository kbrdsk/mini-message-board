const React = require("react");

function Form(props) {
	return <form action="/new" method="POST">
		<input type="text" name="user" placeholder="Username"/>
		<input type="text" name="message" placeholder="Message"/>
		<input type="submit" name="submit"/>
	</form>;
}

module.exports = Form;
