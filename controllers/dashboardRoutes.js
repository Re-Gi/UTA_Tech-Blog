/* WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post */

const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

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
        logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// WHEN I click on the button to add a new blog post
// THEN I am prompted to enter both a title and contents for my blog post

// WHEN I click on the button to create a new blog post
// THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

router.get('/new', withAuth, async (req, res) => {
    try {
      res.render('newPost', {
        user_id: req.session.user_id,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

// WHEN I click on one of my existing posts in the dashboard
// THEN I am able to delete or update my post and taken back to an updated dashboard

router.get('/edit/:id', withAuth, async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        where: {
            user_id: req.session.user_id,
        },
      });
  
      const post = postData.get({ plain: true });
  
      res.render('editPost', {
        post,
        user_id: req.session.user_id,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;