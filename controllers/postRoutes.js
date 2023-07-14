const router = require('express').Router();
const { Post } = require('../models');

// Route to display a single post
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    const post = postData.get({ plain: true });
    res.render('single-post', { post, layout: 'main' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;