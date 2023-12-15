const jwt = require('jsonwebtoken'); 
const express = require('express');
const { User } = require('./models');
const userRoutes = require('./routes/user.routes');
const categoriesRoutes = require('./routes/categories.routes');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/categories', categoriesRoutes);
app.use('/user', userRoutes);

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
 
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const payload = {
    id: user.id,
    username: user.username,
    admin: false,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '24h',
  });

  res.status(200).json({ token });
});
app.post('/user', userRoutes);

module.exports = app;