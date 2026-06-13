const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let blogs = [
  {
    id: 1,
    title: "Welcome To my blog",
    author: "Admin",
    content: "This is the first blog post."
  }
];

// GET ALL BLOGS
app.get("/api/blogs", (req, res) => {
  res.status(200).json(blogs);
});

// GET SINGLE BLOG
app.get("/api/blogs/:id", (req, res) => {
  const blog = blogs.find(
    item => item.id === Number(req.params.id)
  );

  if (!blog) {
    return res.status(404).json({
      message: "Blog not found"
    });
  }

  res.json(blog);
});

// CREATE BLOG
app.post("/api/blogs", (req, res) => {

  const { title, author, content } = req.body;

  if (!title || !author || !content) {
    return res.status(400).json({
      message: "Please fill all fields"
    });
  }

  const newBlog = {
    id: Date.now(),
    title,
    author,
    content
  };

  blogs.push(newBlog);

  res.status(201).json(newBlog);
});

// UPDATE BLOG
app.put("/api/blogs/:id", (req, res) => {

  const blog = blogs.find(
    item => item.id === Number(req.params.id)
  );

  if (!blog) {
    return res.status(404).json({
      message: "Blog not found"
    });
  }

  blog.title = req.body.title || blog.title;
  blog.author = req.body.author || blog.author;
  blog.content = req.body.content || blog.content;

  res.json(blog);
});

// DELETE BLOG
app.delete("/api/blogs/:id", (req, res) => {

  blogs = blogs.filter(
    item => item.id !== Number(req.params.id)
  );

  res.json({
    message: "Blog deleted successfully"
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});