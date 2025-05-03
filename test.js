require('dotenv').config();
const { publish, consume } = require('./index');

(async () => {
    await publish('test', { msg: '📦 Test from rabbitmq-client' });

    await consume('test', async (data) => {
        console.log('✅  Message received from rabbitmq-client:', data);
    });
})();
