/* 

WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment */

const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

/* WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created */

router.get('/', async (req, res) => {
    try {
      const dbPostData = await Post.findAll();
  
      const posts = dbPostData.map((post) =>
        post.get({ plain: true })
      );
  
      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

/* WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post */

router.get('/dashboard', withAuth, async (req, res) => {
try {
    const userPostData = await Post.findAll({
        where: {
            creator_id: req.session.user_id,
        },
    });

    const posts = userPostData.map((post) =>
    post.get({ plain: true })
    );

    res.render('dashboard', {
    posts,
    loggedIn: req.session.loggedIn,
    });
} catch (err) {
    console.log(err);
    res.status(500).json(err);
}
});

/* WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created */

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
          }
      ]
      })
  
      const post = postData.get({ plain: true });

      const comments = commentData.map((comment) =>
      comment.get({ plain: true })
      );

      console.log(post);
      console.log(comments);
  
      res.render('post', {
        ...post,
        comments,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;