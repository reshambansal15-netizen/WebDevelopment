import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import API from "../../services/api";
import "./EditProfile.css";

function EditProfile() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await API.get("/auth/profile");
        setUsername(data.username);
        setBio(data.bio || "");
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("username", username);
    formData.append("bio", bio);

    if (profilePic) {
      formData.append("profilePic", profilePic);
    }

    try {
      await API.put("/auth/profile", formData);

      alert("Profile Updated Successfully!");

      navigate("/profile");
    } catch (error) {
      console.log(error);
      alert("Failed to update profile.");
    }
  };

  return (
    <>
      <Navbar />

      <div className="edit-container">
        <form className="edit-card" onSubmit={handleSubmit}>

          <h2>Edit Profile</h2>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <textarea
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setProfilePic(e.target.files[0])}
          />

          <button type="submit">
            Save Changes
          </button>

        </form>
      </div>
    </>
  );
}

export default EditProfile;