require('dotenv').config();
const amqp = require('amqplib');

let connection;
let channel;

async function connect() {
    if (channel) return channel;

    const url = process.env.RABBITMQ_URL || 'amqp://localhost:5672';

    connection = await amqp.connect(url);
    channel = await connection.createConfirmChannel();
    return channel;
}

module.exports = { connect };
