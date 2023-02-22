const editPostHandler = async (event) => {
    event.preventDefault();

    if (event.target.hasAttribute('data-id')) {
        // variable set to the targeted form's 'data-id' dataset value, which is set to a post's unique id
        const id = event.target.getAttribute('data-id');
        // user input variables
        const title = document.querySelector('#editPost-title').value.trim();
        const content = document.querySelector('#editPost-contents').value.trim();
    
        if (title && content) {
          // PUT request to update a post
          const response = await fetch(`/api/post/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
          });
    
          if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert('Failed to update note.');
          };
        // if no 'title' or 'content' variables, do not send request and alert the user
        } else {
            alert('Your post needs both title and content!');
        };
    };
};
  
const deletePostHandler = async (event) => {
  
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
    
        // DELETE request to delete the post
        const response = await fetch(`/api/post/${id}`, {
            method: 'DELETE',
        });
    
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete post.');
        };
    };
};
  
document
  .querySelector('.editPost-form')
  .addEventListener('submit', editPostHandler);

document
  .querySelector('.deletePost-btn')
  .addEventListener('click', deletePostHandler);
