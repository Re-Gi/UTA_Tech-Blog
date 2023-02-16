const newPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#newPost-title').value.trim();
    const content = document.querySelector('#newPost-contents').value.trim();

    if (title && content) {
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
    } else {
        alert('Your new post needs both title and content!');
    };
};

document
    .querySelector('.newPost-form')
    .addEventListener('submit', newPostHandler);