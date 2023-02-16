const editPostHandler = async (event) => {
    event.preventDefault();

    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        const title = document.querySelector('#editPost-title').value.trim();
        const content = document.querySelector('#editPost-contents').value.trim();

        console.log(id);
        console.log(title);
        console.log(content);
    
        if (title && content) {
          const response = await fetch(`/api/post/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
          });
    
          if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert('Failed to update note.');
          }
        } else {
            alert('Your post needs both title and content!');
        };
    }
};
  
//   const deletePostHandler = async (event) => {
//     event.preventDefault();
  
//     const username = document.querySelector('#username-signup').value.trim();
//     const password = document.querySelector('#password-signup').value.trim();
  
//     if (username && password) {
//       const response = await fetch('/api/user', {
//         method: 'POST',
//         body: JSON.stringify({ username, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         document.location.replace('/');
//       } else {
//         alert('Failed to sign up.');
//       }
//     }
// };
  
document
  .querySelector('.editPost-form')
  .addEventListener('submit', editPostHandler);

// document
//   .querySelector('.deletePost-btn')
//   .addEventListener('click', deletePostHandler);
