async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
}


async function renderPage() {
    const app = document.getElementById('app');


    // Fetch Users and Comments
    const users = await fetchData('https://jsonplaceholder.typicode.com/users');
    const comments = await fetchData('https://jsonplaceholder.typicode.com/comments');
    const photos = await fetchData('https://jsonplaceholder.typicode.com/photos');


    // Organize each user with their comment and image
    users.slice(0, 10).forEach((user, index) => {
        // Get a comment for the user
        const userComment = comments[index];
        const userPhoto = photos[index];


        // Create User Card
        const userCard = `
            <div class="card">
                <div class="card-content">
                    <h3>${user.name}</h3>
                    <p>Email: ${user.email}</p>
                    <p>Comment: ${userComment ? userComment.body : "No comments available."}</p>
                </div>
                <img src="${userPhoto ? userPhoto.url : 'https://via.placeholder.com/300'}" alt="User Image">
            </div>`;
        app.innerHTML += userCard;


        console.log('User:', user);
        console.log('Comment:', userComment);
        console.log('Photo:', userPhoto);
    });
}


renderPage();
