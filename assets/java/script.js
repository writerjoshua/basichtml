// Example recent posts data
const recentPosts = [];

// Generate recent posts dynamically
const postList = document.getElementById("post-list");

// Fetch the blog post file names from the PHP script
fetch("get-blog-posts.php")
  .then(response => response.json())
  .then(blogPosts => {
    recentPosts.push(...blogPosts);

    // Generate recent posts dynamically
    recentPosts.forEach(post => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = `assets/blog posts/${post}`;
      link.textContent = post.replace(".html", ""); // Remove the file extension
      listItem.appendChild(link);
      postList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error("Error fetching blog posts:", error);
  });
