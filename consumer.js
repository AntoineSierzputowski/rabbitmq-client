const { connect } = require('./connection');

async function consume(queueName, callback) {
    const channel = await connect();
    console.log('✅ Connected to RabbitMQ');

    await channel.assertQueue(queueName, { durable: true });
    console.log('✅ Queue asserted');

    channel.on('close', () => {
        console.log('❌ Channel closed unexpectedly');
    });

    channel.on('error', (err) => {
        console.log('❌ Channel error:', err);
    });

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
    console.log('✅ Consumer set up successfully');
}

module.exports = { consume };
