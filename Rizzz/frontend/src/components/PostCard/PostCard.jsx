import API from "../../services/api";
import { FaHeart, FaTrash } from "react-icons/fa";
import "./PostCard.css";

function PostCard({ post, fetchPosts }) {
  if (!post || !post.user) return null;

  const likePost = async () => {
    try {
      await API.put(`/posts/like/${post._id}`);
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async () => {
    try {
      await API.delete(`/posts/${post._id}`);
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="post-card">

      <div className="post-top">

        <img
          src={
            post.user.profilePic ||
            "https://i.pravatar.cc/150"
          }
          alt="profile"
        />

        <div>
          <h3>{post.user.username}</h3>
          <span>{post.mood}</span>
        </div>

      </div>

      <p>{post.text}</p>

      <div className="post-actions">

        <button onClick={likePost}>
          <FaHeart />
          {post.likes.length}
        </button>

        <button
          className="delete-btn"
          onClick={deletePost}
        >
          <FaTrash />
          Delete
        </button>

      </div>

    </div>
  );
}

export default PostCard;