const socket = require(`zmq`).socket(`push`);
const address = process.env.ZMQ_BIND_ADDRESS || `tcp://*:3000`;

console.log(`Listening at ${address}`);
socket.bindSync(address);

const sendMessage = function () {
	const message = `Ping`;
	console.log(`Sending '${message}'`);
	socket.send(message);
};

setInterval(sendMessage, 2000);
