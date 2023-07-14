//"Controllers" folder is here to hold all of "Routes". This "index" file handles the logic between the "Views" and the "Models". 
const router = require('express').Router();
//Dane had you comment out the api stuff here. Needed later?
// const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

const postRoutes = require('./api/postRoutes');

const loginRoutes = require('./api/loginRoutes');

router.use('/', homeRoutes);
// router.use('/api', apiRoutes);

router.use('/api', postRoutes);

router.use(loginRoutes);

module.exports = router;
