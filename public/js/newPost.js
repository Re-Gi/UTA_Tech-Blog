const newPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#newPost-title').value.trim();
    const content = document.querySelector('#newPost-contents').value.trim();

    if (title && content) {
        // POST request to create a new post
        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create note.');
        };
    // if no 'title' or 'content' variables, do not send request and alert the user
    } else {
        alert('Your new post needs both title and content!');
    };
};

document
    .querySelector('.newPost-form')
    .addEventListener('submit', newPostHandler);