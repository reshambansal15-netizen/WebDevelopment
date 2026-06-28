import about from "../assets/images/about.jpg";

function About() {
  return (
    <>
      <section className="py-5 bg-light">
        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">
              <img
                src={about}
                alt="About"
                className="img-fluid rounded shadow"
              />
            </div>

            <div className="col-lg-6">
              <h1 className="fw-bold mb-4">About Outpro</h1>

              <p>
                Outpro is a modern IT solutions company dedicated to helping
                businesses succeed in the digital world.
              </p>

              <p>
                We specialize in web development, mobile app development,
                UI/UX design, branding, cloud solutions and digital
                transformation.
              </p>

              <button className="btn btn-primary mt-3">
                Explore Services
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* Mission & Vision */}

      <section className="container py-5">

        <div className="row">

          <div className="col-md-6">

            <div className="about-card">

              <h3>🎯 Our Mission</h3>

              <p>
                To deliver innovative digital solutions that empower
                businesses worldwide.
              </p>

            </div>

          </div>

          <div className="col-md-6">

            <div className="about-card">

              <h3>🚀 Our Vision</h3>

              <p>
                To become one of India's most trusted software
                development companies.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Core Values */}

      <section className="bg-light py-5">

        <div className="container">

          <h2 className="text-center mb-5">
            Our Core Values
          </h2>

          <div className="row">

            <div className="col-md-3">
              <div className="value-card">
                💡
                <h4>Innovation</h4>
                <p>Creative ideas with modern technology.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="value-card">
                🤝
                <h4>Integrity</h4>
                <p>Honesty and transparency in every project.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="value-card">
                ⭐
                <h4>Quality</h4>
                <p>Delivering excellence every single time.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="value-card">
                ❤️
                <h4>Commitment</h4>
                <p>Dedicated support for every client.</p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Skills */}

      <section className="container py-5">

        <h2 className="text-center mb-5">
          Our Expertise
        </h2>

        <h5>Web Development</h5>

        <div className="progress mb-4">
          <div className="progress-bar bg-primary" style={{width:"95%"}}>
            95%
          </div>
        </div>

        <h5>Mobile Apps</h5>

        <div className="progress mb-4">
          <div className="progress-bar bg-success" style={{width:"90%"}}>
            90%
          </div>
        </div>

        <h5>UI / UX Design</h5>

        <div className="progress mb-4">
          <div className="progress-bar bg-warning" style={{width:"92%"}}>
            92%
          </div>
        </div>

        <h5>Cloud Solutions</h5>

        <div className="progress">
          <div className="progress-bar bg-danger" style={{width:"88%"}}>
            88%
          </div>
        </div>

      </section>

      {/* CTA */}

      <section className="cta-section">

        <div className="container text-center">

          <h2>
            Ready to Build Your Dream Project?
          </h2>

          <p>
            Let's create something extraordinary together.
          </p>

          <button className="btn btn-warning btn-lg">
            Contact Us
          </button>

        </div>

      </section>

    </>
  );
}

export default About;