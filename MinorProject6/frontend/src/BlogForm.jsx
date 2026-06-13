import { useState, useEffect } from "react";
import axios from "axios";

function BlogForm({ fetchBlogs, editBlog, setEditBlog }) {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {

    if (editBlog) {
      setTitle(editBlog.title);
      setAuthor(editBlog.author);
      setContent(editBlog.content);
    }

  }, [editBlog]);

  const handleSubmit = async e => {

    e.preventDefault();

    if (editBlog) {

      await axios.put(
        `http://localhost:5000/api/blogs/${editBlog.id}`,
        {
          title,
          author,
          content
        }
      );

      setEditBlog(null);

    } else {

      await axios.post(
        "http://localhost:5000/api/blogs",
        {
          title,
          author,
          content
        }
      );
    }

    setTitle("");
    setAuthor("");
    setContent("");

    fetchBlogs();
  };

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
    >
      <input
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        placeholder="Blog Title"
      />

      <input
        value={author}
        onChange={(e)=>setAuthor(e.target.value)}
        placeholder="Author"
      />

      <textarea
        value={content}
        onChange={(e)=>setContent(e.target.value)}
        placeholder="Write blog..."
      />

      <button>
        {editBlog ? "Update Blog" : "Add Blog"}
      </button>
    </form>
  );
}

export default BlogForm;