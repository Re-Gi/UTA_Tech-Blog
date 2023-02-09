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

User.hasMany(Post);
Post.belongsTo(User);

User.hasMany(Comment);
Comment.belongsTo(User);

Post.hasMany(Comment, {
    onDelete: 'CASCADE'
});
Comment.belongsTo(Post);

module.exports = {User, Post, Comment};