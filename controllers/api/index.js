const router = require('express').Router();
const loginRoutes = require('./loginRoutes');
const postRoutes = require('./postRoutes');
const signupRoutes = require('./signupRoutes');
const dashboardRoutes = require('./dashboardRoutes')

router.use('/login', loginRoutes);
router.use('/post', postRoutes);
router.use('/signup', signupRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;