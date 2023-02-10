/*
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
    User.hasMany(Post)
    Post.belongsTo(User)

    User.hasMany(Comment)
    Comment.belongsTo(User)

    Post.hasMany(Comment)
    Comment.belongsTo(Post)
*/

const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'user_id'
  });
Post.belongsTo(User, {
    foreignKey: 'user_id'
  });

User.hasMany(Comment, {
    foreignKey: 'user_id'
  });
Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });

Post.hasMany(Comment, {
    onDelete: 'CASCADE',
    foreignKey: 'post_id'
});
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
  });

module.exports = {User, Post, Comment};