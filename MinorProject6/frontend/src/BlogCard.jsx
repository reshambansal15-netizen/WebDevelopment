function BlogCard({ blog, deleteBlog, setEditBlog }) {

  return (
    <div className="card">

      <h2>{blog.title}</h2>

      <h4>{blog.author}</h4>

      <p>{blog.content}</p>

      <div className="buttons">

        <button
          onClick={() => setEditBlog(blog)}
        >
          Edit
        </button>

        <button
          onClick={() => deleteBlog(blog.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default BlogCard;