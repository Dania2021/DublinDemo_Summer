const blogForm = document.getElementById("blogForm");
const displayBlog = document.getElementById("displayBlog");

//Function to save the post
function savePost(author, title, content, timedate) {
	let posts = JSON.parse(localStorage.getItem('posts')) || [];
	posts.push({ author, title, content, timedate });
	localStorage.setItem('posts', JSON.stringify(posts));
}

//function to display the post
function displayPosts() {
	displayBlog.innerHTML = '';
	const posts = JSON.parse(localStorage.getItem('posts')) || [];
	posts.forEach(post => {
		const postDiv = document.createElement('div');
		postDiv.classList.add('blog-post');

		const postTitle = document.createElement('p');
		postTitle.textContent = post.title;

		const postAuthor = document.createElement('p');
		postAuthor.textContent = `Author: ${post.author}`;

		const postContent = document.createElement('p');
		postContent.textContent = post.content;

		const postTimeDate = document.createElement('p');
		postTimeDate.textContent = post.timedate;

		postDiv.appendChild(postAuthor);
		postDiv.appendChild(postTitle);
		postDiv.appendChild(postContent);
		postDiv.appendChild(postTimeDate);

		displayBlog.appendChild(postDiv);
        });
}

//function to display date and time
function getDateTime() {
	const now = new Date();
	const date = now.toLocaleDateString();
	const time = now.toLocaleTimeString();
	return `${date} ${time}`;
}

blogForm.addEventListener("submit", function(event) {
	event.preventDefault();
	
	const author = document.getElementById("author").value;
	const title = document.getElementById("title").value;
	const content = document.getElementById("content").value;
	const timedate = getDateTime();

	if (author && title && content) {
		savePost(author, title, content, timedate);
		displayPosts();
		blogForm.reset();

		alert("Your blog has been posted successfully!")
	}
});

document.addEventListener('DOMContentLoaded', displayPosts);

//Toggle
const toggleButton = document.getElementById("toggle-button");

toggleButton.addEventListener("click", function () {
	document.body.classList.toggle("dark-mode");
});


