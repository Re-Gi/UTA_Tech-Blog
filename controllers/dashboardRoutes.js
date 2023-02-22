const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// gets all of the current user's existing posts and renders the dashboard.handlebars with them
router.get('/', withAuth, async (req, res) => {
    try {
        const userPostData = await Post.findAll({
            where: {
                user_id: req.session.user_id,
            },
        });
    
        const userPosts = userPostData.map((post) =>
        post.get({ plain: true })
        );
    
        res.render('dashboard', {
        userPosts,
        username: req.session.username,
        logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// renders the newPost.handlebars
router.get('/new', withAuth, async (req, res) => {
    try {
      res.render('newPost', {
        username: req.session.username,
        user_id: req.session.user_id,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

// gets a user's post by id, then renders the editPost.handlebars with it
router.get('/edit/:id', withAuth, async (req, res) => {
    try {
      const postData = await Post.findOne({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      const post = postData.get({ plain: true });
  
      res.render('editPost', {
        post,
        username: req.session.username,
        user_id: req.session.user_id,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).redirect('/dashboard');
    }
});

module.exports = router;