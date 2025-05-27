onst posts = [
 {
 title: 'First Post',
 content: 'This is the first post content.'
 },
 {
 title: 'Second Post',
 content: 'This is the second post content.'
 }
];

const postsDiv = document.getElementById('posts');

posts.forEach(post => {
 const postDiv = document.createElement('div');
 postDiv.classList.add('post');

 const title = document.createElement('h2');
 title.textContent = post.title;

 const content = document.createElement('p');
 content.textContent = post.content;

 postDiv.appendChild(title);
 postDiv.appendChild(content);

 postsDiv.appendChild(postDiv);
});