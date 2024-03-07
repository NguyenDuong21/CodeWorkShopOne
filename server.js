'use strict';

const express = require('express');
const os = require('os');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  const clientIp = req.header('x-forwarded-for');
  const elbIP = req.socket.remoteAddress;
  const containerdIp = req.socket.localAddress;
  const containerName = os.hostname();
  res.json({
    serviceName: "Duongnx v2 v2",
    clientIp,
    elbIP,
    containerdIp,
    containerName
  })
});

app.get('/users', (req, res) => {
  const clientIp = req.header('x-forwarded-for');
  const elbIP = req.socket.remoteAddress;
  const containerdIp = req.socket.localAddress;
  const containerName = os.hostname();
  res.json({
    message: "This is from user request",
    serviceName: "Duongnx v2 v2",
    clientIp,
    elbIP,
    containerdIp,
    containerName
  })
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
