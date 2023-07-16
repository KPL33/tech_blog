//"Controllers" folder is here to hold all of "Routes". This "index" file handles the logic between the "Views" and the "Models". 
const router = require('express').Router();
//Dane had you comment out the api stuff here. Needed later?
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;