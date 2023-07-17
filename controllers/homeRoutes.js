const router = require('express').Router();
const { Post, User, Comment } = require("../models");
// const withAuth = require("../utils/auth");

//Here, we "render" the "homepage", specifically using the "layout" (aka, "partial") at '../views/layouts/"main".handlebars'. Name of the "partial" appears in 'quotes'.
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll();
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('homepage', { ...posts, layout: 'main' });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  res.render('login', { layout: 'main' });
});

router.get('/signup', (req, res) => {
  res.render('signup', { layout: 'main' });
});

module.exports = router;