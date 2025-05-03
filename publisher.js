const { connect } = require('./connection');

async function publish(queueName, data) {
    const channel = await connect();
    await channel.assertQueue(queueName, { durable: true });

    return new Promise((resolve, reject) => {
        const sent = channel.sendToQueue(queueName, Buffer.from(JSON.stringify(data)), { persistent: true }, (err) => (err ? reject(err) : resolve()));
        if (!sent) reject(new Error('Send failed'));
    });
}

module.exports = { publish };
