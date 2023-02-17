const newCommentHandler = async (event) => {
    event.preventDefault();

    if (event.target.hasAttribute('data-id')) {
      const post_id = event.target.getAttribute('data-id');
      const content = document.querySelector('#newComment').value.trim();
    
      if (content) {
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
      };
    };
};
  
document
  .querySelector('.newComment-form')
  .addEventListener('submit', newCommentHandler);
  