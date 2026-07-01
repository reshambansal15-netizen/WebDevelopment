import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <img
        src="https://i.pravatar.cc/150?img=10"
        alt="Profile"
      />

      <h3>Welcome 👋</h3>

      <p>Express yourself on Rizzz.</p>

      <div className="stats">
        <div>
          <h2>0</h2>
          <span>Posts</span>
        </div>

        <div>
          <h2>0</h2>
          <span>Likes</span>
        </div>
      </div>

    </div>
  );
}

export default Sidebar;