# @4vs/rabbitmq-client

A lightweight Node.js wrapper around `amqplib` to easily publish and consume messages with RabbitMQ using queues.

---

## ✨ Features

-   Simple API for publishing and consuming messages
-   Uses confirm channels for safe delivery
-   Queue auto-assertion and JSON encoding
-   Ready for use in microservices

---

## 📦 Installation

### Via GitHub

```bash
npm install https://github.com/AntoineSierzputowski/rabbitmq-client
```

## 🔧 Environment Configuration

This package uses dotenv to read the RabbitMQ connection string. Create a .env file in the root of your project (or set the variable directly):

```bash
RABBITMQ_URL=amqp://localhost:5672
```

## 🚀 How to Use

#### Import the client

```
const { publish, consume } = require('@4vs/rabbitmq-client');
```

#### Publish a message

```
await publish('my-queue', { message: 'Hello, RabbitMQ' });
```

#### Consume messages

```
await consume('my-queue', async (data) => {
  console.log('Received:', data);
});
```

## 🧪 Testing the Package

```
node node_modules/@4vs/rabbitmq-client/test.js
```
