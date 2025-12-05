const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Jenkins CI/CD Pipeline! building Docker images and Container');
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});

