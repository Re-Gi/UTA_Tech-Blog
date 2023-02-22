const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// gets all existing posts along with creator usernames in descending order, then renders them to the homepage.handlebars
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

// renders a post and it's comments with all related creator-usernames to the viewPost.handlebars
router.get('/post/:id', async (req, res) => {
    try {
      // finds a post by primary key(id) with the 'username' of the associated User
      const postData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });

      // finds all comments related to the post's 'id', along with the 'username' of each comment's associated User
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

// renders login.handlebars
router.get('/login', (req, res) => {
  // redirects to the homepage if the user is already logged in
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;