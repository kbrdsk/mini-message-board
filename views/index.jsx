const React = require("react");

function Index(props) {
	return <div>{props.messages.map(renderMessage)}</div>;
}

function renderMessage(message) {
	return <div>{`${message.added} ${message.user}: ${message.text}`}</div>;
}

module.exports = Index;
