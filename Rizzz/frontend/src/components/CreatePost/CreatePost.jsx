import { useState } from "react";
import { FaSmile, FaPaperPlane } from "react-icons/fa";
import { toast } from "react-hot-toast";
import API from "../../services/api";
import "./CreatePost.css";

function CreatePost({ fetchPosts }) {
  const [text, setText] = useState("");
  const [mood, setMood] = useState("Happy");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim()) {
      toast.error("Please write something first!");
      return;
    }

    try {
      await API.post("/posts", {
        text,
        mood,
      });

      toast.success("Post shared successfully!");

      setText("");
      setMood("Happy");

      fetchPosts();
    } catch (error) {
      console.log(error.response?.data);
      toast.error(
        error.response?.data?.message || "Failed to create post."
      );
    }
  };

  return (
    <div className="create-post-card">
      <h2>
        <FaSmile /> Share Your Vibe
      </h2>

      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="What's on your mind today?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />

        <div className="post-footer">
          <select
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          >
            <option value="Happy">😊 Happy</option>
            <option value="Love">😍 Love</option>
            <option value="Excited">🔥 Excited</option>
            <option value="Chill">😎 Chill</option>
            <option value="Sad">😢 Sad</option>
            <option value="Angry">😡 Angry</option>
          </select>

          <button type="submit">
            <FaPaperPlane />
            Share
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;