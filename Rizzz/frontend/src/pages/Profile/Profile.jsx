import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import API from "../../services/api";
import "./Profile.css";
import { Link } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await API.get("/auth/profile");
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <>
      <Navbar />

      <div className="profile-container">
        <div className="profile-card">

          <img
            src={
              user.profilePic ||
              "https://i.pravatar.cc/150?img=12"
            }
            alt="Profile"
          />

          <h2>{user.username}</h2>

          <p>{user.email}</p>

          <p>{user.bio || "No bio added yet."}</p>

          <Link to="/edit-profile">
              <button>Edit Profile</button>
          </Link>

        </div>
      </div>
    </>
  );
}

export default Profile;