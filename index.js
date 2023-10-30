const express = require('express');
const bodyParser = require('body-parser');
const { authenticateUser, generateToken } = require('./auth');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Endpoint for user authentication
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = authenticateUser(username, password);
  if (user) {
    const token = generateToken(user);
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
