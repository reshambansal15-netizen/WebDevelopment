import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <div className="glass">
        <span className="badge">✨ Premium Collection</span>

        <h1>Design Your Dream Space</h1>

        <p>Luxury furniture and décor for modern living.</p>

        <Link to="/products">
          <button>Explore Collection</button>
        </Link>
      </div>
    </section>
  );
}

export default Home;