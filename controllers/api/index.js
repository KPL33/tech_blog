const router = require('express').Router();
const loginRoutes = require('./loginRoutes');
const postRoutes = require('./postRoutes');
const signupRoutes = require('./signupRoutes');

router.use('/loginRoutes', loginRoutes);
router.use('/postRoutes', postRoutes);
router.use('/signupRoutes', signupRoutes);

module.exports = router;