//"Controllers" folder is here to hold all of "Routes". This "index" file handles the logic between the "Views" and the "Models". 
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');


router.use('/api', apiRoutes);
router.use('/', homeRoutes);


module.exports = router;