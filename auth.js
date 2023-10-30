const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = 'yourSecretKey'; // Change this to a secure secret key

// Sample user data, replace with your user data storage logic
const users = [
  {
    username: 'user1',
    password: '$2b$10$H5fDx0C5J8Kgd3VcOqfVIu6bAAmApG8UGLX5U3uL0HokTzImQFMZy' // Hashed password of 'password1'
  },
  // Add more users as needed
];

// Function to authenticate a user
const authenticateUser = async (username, password) => {
  const user = users.find(u => u.username === username);
  if (user && bcrypt.compareSync(password, user.password)) {
    return user;
  }
  return null;
};

// Function to generate a JWT token
const generateToken = (user) => {
  return jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });
};

module.exports = {
  authenticateUser,
  generateToken
};
