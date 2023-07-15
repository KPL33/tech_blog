const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('signup', { layout: 'main' });
});

// Handle login form submission
router.post('/', async (req, res) => {
  try {
    res.redirect('/dashboard');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;