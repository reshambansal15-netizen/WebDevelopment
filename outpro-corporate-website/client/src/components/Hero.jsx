import { Link } from "react-router-dom";
import hero from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.65)), url(${hero})`,
      }}
    >
      <div className="container text-center hero-content">
        <h1>Empowering Businesses Through Technology</h1>

        <p>
          We create innovative software solutions, responsive websites,
          mobile applications, and digital experiences that help businesses
          grow faster.
        </p>

        <div className="mt-4">
          <Link to="/services" className="btn btn-warning btn-lg me-3">
            Explore Services
          </Link>

          <Link to="/contact" className="btn btn-outline-light btn-lg">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;