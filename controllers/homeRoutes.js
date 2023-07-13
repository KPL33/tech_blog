const router = require('express').Router();
const { Post, User, Comment } = require("../models");
// const withAuth = require("../utils/auth");

//Here, we "render" the "homepage", specifically using the "layout" (aka, "partial") at '../views/layouts/"main".handlebars'. Name of the "partial" appears in 'quotes'.
router.get('/', async (req, res) => {
    try {
      res.render('homepage', {
        layout: 'main'
      })
    } catch (err) {
      res.status(500).json(err);
    }
  });





module.exports = router;