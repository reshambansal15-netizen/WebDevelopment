import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./Navbar";
import BlogForm from "./BlogForm";
import BlogCard from "./BlogCard";

import "./App.css";

function App() {

  const [blogs, setBlogs] = useState([]);
  const [editBlog, setEditBlog] = useState(null);

  const fetchBlogs = async () => {
    const response =
      await axios.get(
        "http://localhost:5000/api/blogs"
      );

    setBlogs(response.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const deleteBlog = async (id) => {

    await axios.delete(
      `http://localhost:5000/api/blogs/${id}`
    );

    fetchBlogs();
  };

  return (
    <>
      <Navbar />

      <div className="container">

        <BlogForm
          fetchBlogs={fetchBlogs}
          editBlog={editBlog}
          setEditBlog={setEditBlog}
        />

        <div className="grid">

          {blogs.map(blog => (
            <BlogCard
              key={blog.id}
              blog={blog}
              deleteBlog={deleteBlog}
              setEditBlog={setEditBlog}
            />
          ))}

        </div>

      </div>
    </>
  );
}

export default App;