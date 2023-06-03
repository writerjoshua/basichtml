<?php
$blogPostDir = 'assets/blog posts/'; // Directory where blog post files are stored
$blogPosts = [];

// Scan the directory and retrieve the file names
$files = scandir($blogPostDir);
foreach ($files as $file) {
    if ($file !== '.' && $file !== '..' && pathinfo($file, PATHINFO_EXTENSION) === 'html') {
        $blogPosts[] = $file;
    }
}

// Encode the file names as JSON and output them
echo json_encode($blogPosts);
?>
