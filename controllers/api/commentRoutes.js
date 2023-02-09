/*
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
    POST - create Comment

WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
    PUT - update Comment by id
    DELETE - destroy Comment by id
*/

const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

module.exports = router;