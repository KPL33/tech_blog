const router = require('express').Router();
const loginRoutes = require('./loginRoutes');
const postRoutes = require('./postRoutes');
const signupRoutes = require('./signupRoutes');

router.use('/login', loginRoutes);
router.use('/post', postRoutes);
router.use('/signup', signupRoutes);

module.exports = router;