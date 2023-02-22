const newCommentHandler = async (event) => {
    event.preventDefault();

    if (event.target.hasAttribute('data-id')) {
      // variable set to the targeted form's 'data-id' dataset value, which is set to a post's unique id
      const post_id = event.target.getAttribute('data-id');
      // user input variable
      const content = document.querySelector('#newComment').value.trim();
    
      if (content) {
        // POST request to create a new comment with above variables
        const response = await fetch(`/api/comment`, {
          method: 'POST',
          body: JSON.stringify({ post_id, content }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace(`/post/${post_id}`);
        } else {
          alert('Failed to create comment.');
        };
      // if no 'content' variable, do not send request and alert the user
      } else {
        alert('Your comment needs content!');
      };
    };
};
  
document
  .querySelector('.newComment-form')
  .addEventListener('submit', newCommentHandler);
  