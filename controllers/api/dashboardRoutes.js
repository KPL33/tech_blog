const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('dashboard', { layout: 'main', isDashboard: true }); // Render the dashboard view
  });

module.exports = router;