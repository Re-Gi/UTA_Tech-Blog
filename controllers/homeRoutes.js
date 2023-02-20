const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/', async (req, res) => {
    try {
      const dbPostData = await Post.findAll({
        order: [['createdAt', 'DESC']],
        include: [
          { 
            model: User, 
            attributes: ['username'],
          },
        ],
      });
  
      const posts = dbPostData.map((post) =>
        post.get({ plain: true })
      );
  
      res.render('homepage', {
        posts,
        username: req.session.username,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });

      const commentData = await Comment.findAll({
        where: {
          post_id: req.params.id,
        },
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });
  
      const post = postData.get({ plain: true });

      const comments = commentData.map((comment) =>
      comment.get({ plain: true })
      );
  
      res.render('viewPost', {
        ...post,
        comments,
        username: req.session.username,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;