import { useState } from "react";

import p1 from "../assets/images/portfolio1.jpg";
import p2 from "../assets/images/portfolio2.jpg";
import p3 from "../assets/images/portfolio3.jpg";

function Portfolio() {
  const projects = [
    {
      image: p1,
      title: "Corporate Website",
      category: "Web",
      tech: "React • Bootstrap • Node.js",
    },
    {
      image: p2,
      title: "Restaurant Website",
      category: "Web",
      tech: "React • MongoDB",
    },
    {
      image: p3,
      title: "Banking Mobile App",
      category: "Mobile",
      tech: "Flutter • Firebase",
    },
    {
      image: p1,
      title: "E-Commerce Website",
      category: "Web",
      tech: "React • Express • MongoDB",
    },
    {
      image: p2,
      title: "Analytics Dashboard",
      category: "UI/UX",
      tech: "Figma • React",
    },
    {
      image: p3,
      title: "Travel Booking App",
      category: "Mobile",
      tech: "React Native • Firebase",
    },
  ];

  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <>
      {/* Hero Section */}

      <section className="portfolio-hero">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Our Portfolio</h1>

          <p className="lead">
            Explore some of our successful projects delivered for clients.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}

      <section className="py-4">
        <div className="container text-center">

          <button
            className={`btn ${
              filter === "All" ? "btn-primary" : "btn-outline-primary"
            } m-2`}
            onClick={() => setFilter("All")}
          >
            All
          </button>

          <button
            className={`btn ${
              filter === "Web" ? "btn-primary" : "btn-outline-primary"
            } m-2`}
            onClick={() => setFilter("Web")}
          >
            Web
          </button>

          <button
            className={`btn ${
              filter === "Mobile" ? "btn-primary" : "btn-outline-primary"
            } m-2`}
            onClick={() => setFilter("Mobile")}
          >
            Mobile
          </button>

          <button
            className={`btn ${
              filter === "UI/UX" ? "btn-primary" : "btn-outline-primary"
            } m-2`}
            onClick={() => setFilter("UI/UX")}
          >
            UI / UX
          </button>

        </div>
      </section>

      {/* Portfolio Cards */}

      <section className="container pb-5">
        <div className="row">

          {filteredProjects.map((project, index) => (

            <div className="col-lg-4 col-md-6 mb-4" key={index}>

              <div className="portfolio-item">

                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid"
                />

                <div className="portfolio-content">

                  <h4>{project.title}</h4>

                  <p className="text-muted">
                    {project.tech}
                  </p>

                  <div className="d-flex gap-2 mt-3">

                    <button className="btn btn-primary flex-fill">
                      Live Demo
                    </button>

                    <button className="btn btn-outline-dark flex-fill">
                      GitHub
                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>
      </section>

      {/* Technologies */}

      <section className="bg-light py-5">

        <div className="container">

          <h2 className="text-center mb-5">
            Technologies We Use
          </h2>

          <div className="row text-center">

            <div className="col-md-2 col-6 mb-3">
              <h5>React</h5>
            </div>

            <div className="col-md-2 col-6 mb-3">
              <h5>Node.js</h5>
            </div>

            <div className="col-md-2 col-6 mb-3">
              <h5>Express</h5>
            </div>

            <div className="col-md-2 col-6 mb-3">
              <h5>MongoDB</h5>
            </div>

            <div className="col-md-2 col-6 mb-3">
              <h5>Bootstrap</h5>
            </div>

            <div className="col-md-2 col-6 mb-3">
              <h5>Figma</h5>
            </div>

          </div>

        </div>

      </section>

      {/* Call To Action */}

      <section className="cta-section">

        <div className="container text-center">

          <h2 className="mb-3">
            Want Your Project Featured Here?
          </h2>

          <p className="mb-4">
            Let's create a powerful digital solution for your business.
          </p>

          <button className="btn btn-warning btn-lg">
            Start Your Project
          </button>

        </div>

      </section>

    </>
  );
}

export default Portfolio;