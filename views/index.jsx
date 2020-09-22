const React = require("react");

function Index(props) {
	return (
		<div>
			{props.messages.map(renderMessage)}
			<NewMessage />
		</div>
	);
}

function renderMessage(message) {
	return <div>{`${message.added} ${message.user}: ${message.text}`}</div>;
}

function NewMessage(props) {
	return (
		<form action="/new">
			<input type="submit" name="newMessage" value="New Message"/>
		</form>
	);
}

module.exports = Index;
