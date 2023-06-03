// Example recent posts data
const recentPosts = [
  { title: "Post 1", url: "#" },
  { title: "Post 2", url: "#" },
  { title: "Post 3", url: "#" }
];

// Generate recent posts dynamically
const postList = document.getElementById("post-list");

recentPosts.forEach(post => {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = post.url;
  link.textContent = post.title;
  listItem.appendChild(link);
  postList.appendChild(listItem);
});
