# Tech-Blog
[Visit the Application](https://regi-techblog.herokuapp.com/)
![TechBlog](https://user-images.githubusercontent.com/119711335/220774239-108b4d63-78c7-4d0b-85ed-2b2b3298baa1.PNG)
A UTA Web Development Bootcamp challenge for unit 14, meant to test my use of MVC folder structure.

## Description
This is a simple tech-related blogging site built using MVC architecture, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Usage
Tech-Blog's homepage consists of a display of every post title, creator, and date created in descending order by creation date, as well as a right-hand nav-bar with "Home", "Dashboard", and "Login"/"Logout" links.

Each post on the homepage is clickable and takes the user to a "view" page that displays the full post with it's content, as well as any comments made on that post.

![TechBlog-loggedOut](https://user-images.githubusercontent.com/119711335/220777538-4d7a06ae-855b-4b5f-8caa-78e203d27167.PNG)

Tech-Blog allows visitors to view posts on the homepage as well as the comments made on each post, but to comment or create posts the user must login.  
The "Login" page consists of login and signup forms, signing up will automatically log the user in for that session.

Once logged in, the user can now leave comments on posts by clicking into the posts "view" page and filling out the comment form directly under the post and clicking "Post".

![TechBlog-newComment](https://user-images.githubusercontent.com/119711335/220777468-2205ea66-c1a8-48cd-838a-ba0b1787bc9a.PNG)

A logged-in user also has access to a personal "Dashboard", which they can visit by clicking the "Dashboard" link in the navigation.  
Here the user can see every post created with their account, and can use the "New Post" button to create brand-new posts.

![TechBlog-dashboard](https://user-images.githubusercontent.com/119711335/220782581-e98ff285-7617-414e-9084-24e3e4ec1fb0.PNG)
![TechBlog-newPost](https://user-images.githubusercontent.com/119711335/220782750-6527128e-3495-4dda-9efe-718f6266258c.PNG)

Each post is clickable and takes the user to an "Edit Post" page where they can see their post's title and content in editable textboxes.  
To save their edits the user can click the "Update" button.  
To delete a post entirely, the user can click on the red "Delete" button.

![TechBlog-editPost](https://user-images.githubusercontent.com/119711335/220783281-7741b79b-0e74-48c0-af60-69804dead97a.PNG)

Users will automatically be logged-out after 5 minutes of inactivity, but can also log themselves out by clicking on the "Logout" navigation link.

## License 
MIT License

Copyright (c) 2023 Re-Gi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Questions
Contact by email with any additional questions.

Visit my GitHub: [re-gi](https://github.com/re-gi)  
Send me an email: r.l.girndt@gmail.com
