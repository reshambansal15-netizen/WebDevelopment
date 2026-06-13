import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./Navbar";
import BlogForm from "./BlogForm";
import BlogCard from "./BlogCard";

import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [editBlog, setEditBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const API = "http://localhost:5000/api/blogs";

  // Fetch all blogs
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(API);

      setBlogs(response.data);
      setFilteredBlogs(response.data);
    } catch (error) {
      console.log("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Delete blog
  const deleteBlog = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);

      fetchBlogs();
    } catch (error) {
      console.log("Error deleting blog:", error);
    }
  };

  // Search by title
  const searchBlog = () => {
    if (!searchTerm.trim()) {
      setFilteredBlogs(blogs);
      return;
    }

    const result = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredBlogs(result);
  };

  // Show all blogs
  const showAllBlogs = () => {
    setSearchTerm("");
    setFilteredBlogs(blogs);
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

        {/* Search Section */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search Blog By Title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button onClick={searchBlog}>
            Search
          </button>

          <button
            className="show-btn"
            onClick={showAllBlogs}
          >
            Show All Blogs
          </button>
        </div>

        {/* No Blog Found Message */}
        {filteredBlogs.length === 0 && (
          <h3 className="no-blog">
            No Blog Found 😔
          </h3>
        )}

        {/* Blog Cards */}
        <div className="grid">
          {filteredBlogs.map((blog) => (
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