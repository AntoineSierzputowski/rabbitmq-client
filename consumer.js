const { connect } = require('./connection');

async function consume(queueName, callback) {
    const channel = await connect();
    await channel.assertQueue(queueName, { durable: true });

    await channel.consume(queueName, async (msg) => {
        if (msg !== null) {
            try {
                const data = JSON.parse(msg.content.toString());
                await callback(data);
                channel.ack(msg);
            } catch (err) {
                console.error('Erreur traitement message:', err);
            }
        }
    });
}

module.exports = { consume };
