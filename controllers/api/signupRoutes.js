const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

router.get('/', (req, res) => {
  res.render('signup', { layout: 'main' });
});

router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ message: 'Username is already taken.' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ username, password: hashedPassword });

    req.session.signupSuccess = true;

    res.redirect('/dashboard');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;